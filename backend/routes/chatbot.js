const express = require('express');
const axios = require('axios');
const router = express.Router();

// FAQ list for selection
const faqList = {
  "Type 1 Symptoms": "What are the symptoms of Type 1 diabetes?",
  "Type 2 Symptoms": "What are the symptoms of Type 2 diabetes?",
  "Prediabetes Symptoms": "What are the symptoms of prediabetes?",
  "Managing Blood Sugar": "How can I manage my blood sugar levels effectively?",
  "Emergency Protocols": "What should I do in case of a diabetes emergency?",
  "Dietary Tips": "What are some dietary recommendations for people with diabetes?",
  // Add more FAQs as needed
};

/**
 * Example doctor database for demonstration.
 * In production, replace with a DB query.
 */
const doctorList = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Endocrinologist",
    clinic: "Cairo Diabetes Center",
    phone: "0123-456-789",
    location: "Cairo"
  },
  {
    name: "Dr. Mona Youssef",
    specialty: "Diabetologist",
    clinic: "Healthy Life Clinic",
    phone: "0111-222-333",
    location: "Cairo"
  }
  // Add more doctors as needed
];

/**
 * Checks if there are doctors for the user's location.
 * Returns a boolean.
 */
function hasDoctorInLocation(location) {
  if (!location) return false;
  return doctorList.some(doc =>
    doc.location.toLowerCase() === location.toLowerCase()
  );
}

/**
 * Builds a prompt for the LLM with all dynamic features.
 */
function buildPrompt(message, diabetesType, location, isParent, showCommunity = true) {
  const locationLine = location
    ? `\n- **Don't forget:** Dieabtify ME can help you find local support groups, pharmacies, and hospitals in **${location}**.\n`
    : '\n';

  const doctorMatchLine = hasDoctorInLocation(location)
    ? `\n- Use Dieabtify ME's Doctor Matching feature to view detailed profiles, qualifications, and contact information of diabetes specialists in your area.\n`
    : '';

  const parentingSection = isParent
    ? `\n### Parenting Resources\n- Guidance and support for parents/caregivers of children with diabetes.\n- Kid-friendly educational content to help your child stay informed and engaged.\n`
    : '';

  const educationLine = `\n### Educational & Success Resources\n- Explore our library of success stories and educational resources for inspiration and practical tips.\n`;

  const communityLine = showCommunity
    ? `\n- Join our community forums to connect with others living with diabetes.\n`
    : '';

  const motivationalClosing = `\n**Remember:** Early detection and proper management make a big difference. Stay informed, stay empowered, and know that you've got this!\n`;

  return `
You are a supportive, concise diabetes assistant for Dieabtify ME.

Instructions:
- Address the user as someone with ${diabetesType || "diabetes"}${isParent ? " who is a parent/caregiver" : ""}.
- Organize your answer using these Markdown headings:
  ### Symptoms
  ### What to Do Next
  ### Emergency Warning
  ### How Dieabtify ME Can Help${isParent ? "\\n### Parenting Resources" : ""}\\n### Educational & Success Resources
- Use dash (-) bullet points with a space for lists and keep each section concise.
- In "What to Do Next", always mention Dieabtify ME's Doctor Matching feature and${location ? ` local support groups, pharmacies, and hospitals in **${location}**.` : " local resources if available."}
- In "How Dieabtify ME Can Help", list features: Symptom Checker, Medication Reminders, Doctor Matching, Dietary Recommendations, Emergency Protocols, always include 'Dietary & Exercise Programs: Access personalized meal plans and exercise routines tailored for diabetes management.' and 'Mindfulness & Stress: Access resources on stress management, meditation, and relaxation techniques.'
- Encourage the user to try the Symptom Checker for a quick self-assessment.
- If doctor contact info is available in the user's location, instruct the user to use the Doctor Matching feature to view detailed doctor info.
- If community forums/support groups are available, mention them.
- Only mention other diabetes types if the user specifically asks.
- Avoid unnecessary medical jargon.
- End with an encouraging message.

User's question: ${message}

---

### Symptoms
- (List key symptoms for the user's diabetes type)

### What to Do Next
- Consult a doctor about your symptoms.
- Use Dieabtify ME's Doctor Matching feature to find a specialist.
${locationLine}
${doctorMatchLine}
### Emergency Warning
- If you experience severe symptoms (confusion, vomiting, loss of consciousness), seek immediate medical attention.

### How Dieabtify ME Can Help
- Symptom Checker: Track and understand your symptoms (Try our Symptom Checker for a quick self-assessment!)
- Medication Reminders: Stay on top of your treatment plan
- Doctor Matching: Find a healthcare professional who's right for you
- Dietary Recommendations: Get personalized nutrition advice
- Dietary & Exercise Programs: Access personalized meal plans and exercise routines tailored for diabetes management
- Mindfulness & Stress: Access resources on stress management, meditation, and relaxation techniques
- Emergency Protocols: Know what to do in case of an emergency
${communityLine}
${parentingSection}${educationLine}${motivationalClosing}
`;
}

router.post('/', async (req, res) => {
  try {
    const { message, selectedFaq, diabetesType, location, isParent, isFirstMessage } = req.body;

    if (!message && !selectedFaq) {
      return res.status(400).json({ error: 'Message or valid FAQ selection required' });
    }

    let userMessage = message;
    if (!userMessage && selectedFaq && faqList[selectedFaq]) {
      userMessage = faqList[selectedFaq];
    }

    const prompt = buildPrompt(userMessage, diabetesType, location, isParent);

    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3',
      prompt: prompt,
      stream: false
    });

    let reply = response.data.response || "";

    if (isFirstMessage) {
      const greeting = `Hey there! As someone with ${diabetesType || "diabetes"}, you're likely wondering what to expect. Here's a summary of common information:\n\n`;
      reply = greeting + reply;
    }

    res.json({ reply });
  } catch (err) {
    console.error('Ollama API error:', err.message);
    res.status(500).json({ error: 'Failed to get response from Ollama' });
  }
});

module.exports = router;