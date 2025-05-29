import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch, Modal, TextInput, Alert, Platform, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const RemindersScreen = () => {
    const navigation = useNavigation();

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Morning medication',
            description: 'Take 10mg of medication X with breakfast',
            date: new Date(2023, 5, 15, 8, 0),
            completed: false,
            reminderEnabled: true
        },
        {
            id: 2,
            title: 'Blood sugar check',
            description: 'Check fasting blood sugar level',
            date: new Date(2023, 5, 15, 12, 30),
            completed: false,
            reminderEnabled: true
        },
        {
            id: 3,
            title: 'Evening medication',
            description: 'Take 5mg of medication Y after dinner',
            date: new Date(2023, 5, 15, 19, 0),
            completed: false,
            reminderEnabled: true
        }
    ]);

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        date: new Date(),
    });
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatDate = (date) => {
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const toggleReminder = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, reminderEnabled: !task.reminderEnabled } : task
        ));
    };

    const handleDateChange = (event, selectedDate) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
        if (selectedDate) {
            setNewTask({ ...newTask, date: selectedDate });
        }
    };

    const showDateTimePicker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: newTask.date,
                mode: 'datetime',
                is24Hour: true,
                onChange: handleDateChange,
            });
        } else {
            setShowDatePicker(true);
        }
    };

    const handleAddTask = () => {
        if (!newTask.title.trim()) {
            Alert.alert('Error', 'Please enter a task title');
            return;
        }

        const taskToAdd = {
            id: Math.max(...tasks.map(t => t.id), 0) + 1,
            title: newTask.title,
            description: newTask.description,
            date: newTask.date,
            completed: false,
            reminderEnabled: true
        };

        setTasks([...tasks, taskToAdd]);
        setNewTask({
            title: '',
            description: '',
            date: new Date()
        });
        setIsAddModalVisible(false);
    };

    const deleteTask = (taskId) => {
        Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setTasks(tasks.filter(task => task.id !== taskId));
                    }
                }
            ]
        );
    };

    const renderRightActions = (taskId) => {
        return (
            <TouchableOpacity
                className="justify-center items-center bg-red-500 rounded-xl px-4 my-1 ml-2"
                onPress={() => deleteTask(taskId)}
            >
                <MaterialCommunityIcons name="trash-can" size={24} color="white" />
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <View className='mb-6'>
                <TouchableOpacity onPress={() => navigation.goBack()} className="mt-16 ml-6">
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <Text className="text-xl ml-8 mt-4 font-bold text-gray-900">Reminders</Text>
                <Text className="text-gray-600 ml-8 mt-2 text-lg font-medium">
                    Effortless tracking, better care
                </Text>
            </View>

            {/* Tasks List */}
            <ScrollView className="px-4 pt-6 flex-1 bg-white rounded-t-3xl" contentContainerStyle={{ paddingBottom: 100 }}>
                {tasks.map(task => (
                    <Swipeable
                        key={task.id}
                        renderRightActions={() => renderRightActions(task.id)}
                        overshootRight={false}
                    >
                        <View className="border border-gray-200 rounded-xl p-4 mb-4 bg-white shadow-sm">
                            <View className="flex-row justify-between items-start mb-2">
                                <View className="flex-1">
                                    <Text className={`text-lg font-semibold ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                                        {task.title}
                                    </Text>
                                    {task.description && (
                                        <Text className={`text-sm mt-1 ${task.completed ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {task.description}
                                        </Text>
                                    )}
                                </View>
                                <TouchableOpacity
                                    onPress={() => toggleTaskCompletion(task.id)}
                                    className="ml-4"
                                >
                                    <View className={`w-6 h-6 rounded-full border-2 ${task.completed ? 'bg-[#D798D1] border-[#AA66A4]' : 'border-gray-300'}`}>
                                        {task.completed && (
                                            <MaterialCommunityIcons
                                                name="check"
                                                size={16}
                                                color="white"
                                                style={{ alignSelf: 'center' }}
                                            />
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* Date & Reminder */}
                            <View className="flex-row items-center justify-between mt-4">
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="calendar" size={18} color="#6b7280" />
                                    <Text className="text-gray-600 ml-2 text-sm">
                                        {formatDate(task.date)}
                                    </Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Text className="text-gray-600 text-xs mr-2">Remind</Text>
                                    <Switch
                                        value={task.reminderEnabled}
                                        onValueChange={() => toggleReminder(task.id)}
                                        trackColor={{ false: '#E7CDED', true: '#E5BBE1' }}
                                        thumbColor={task.reminderEnabled ? '#AA66A4' : '#f3f4f6'}
                                    />
                                </View>
                            </View>
                        </View>
                    </Swipeable>
                ))}
            </ScrollView>

            {/* Floating Add Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 bg-[#D798D1] p-5 rounded-full shadow-lg"
                onPress={() => setIsAddModalVisible(true)}
                activeOpacity={0.8}
            >
                <MaterialCommunityIcons name="plus" size={24} color="black" />
            </TouchableOpacity>

            {/* Add Task Modal */}
            <Modal
                visible={isAddModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsAddModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/50 p-4">
                    <ScrollView
                        className="w-full max-w-md"
                        keyboardShouldPersistTaps="handled"
                    >
                        <View className="bg-white rounded-xl p-6">
                            <Text className="text-xl font-bold mb-4">Add New Task</Text>

                            {/* Title Input */}
                            <TextInput
                                className="border border-gray-300 rounded-lg p-3 mb-4"
                                placeholder="Enter task title (e.g., Take medication)"
                                value={newTask.title}
                                onChangeText={(text) => setNewTask({ ...newTask, title: text })}
                                autoFocus={true}
                            />

                            {/* Description Input */}
                            <TextInput
                                className="border border-gray-300 rounded-lg p-3 mb-4 h-24"
                                placeholder="Description (optional)"
                                value={newTask.description}
                                onChangeText={(text) => setNewTask({ ...newTask, description: text })}
                                multiline={true}
                            />

                            {/* Date Picker Trigger */}
                            <TouchableOpacity
                                className="border border-gray-300 rounded-lg p-3 mb-6 flex-row items-center"
                                onPress={showDateTimePicker}
                            >
                                <MaterialCommunityIcons name="calendar" size={20} color="violet" />
                                <Text className="ml-2 text-gray-600">
                                    {formatDate(newTask.date)}
                                </Text>
                            </TouchableOpacity>

                            {/* DateTimePicker */}
                            {showDatePicker && (
                                <DateTimePicker
                                    value={newTask.date}
                                    mode="datetime"
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    onChange={handleDateChange}
                                    minimumDate={new Date()}
                                />
                            )}

                            {/* Buttons */}
                            <View className="flex-row justify-end space-x-3 mt-4">
                                <TouchableOpacity
                                    className="px-4 py-2"
                                    onPress={() => setIsAddModalVisible(false)}
                                >
                                    <Text className="text-gray-600">Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="px-4 py-2 bg-[#AA66A4] rounded-lg"
                                    onPress={handleAddTask}
                                >
                                    <Text className='text-white'>Add Task</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

export default RemindersScreen;