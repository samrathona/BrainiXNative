import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CoursesScreen from '../screens/CoursesScreen';
import MyLearningScreen from '../screens/MyLearningScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen'; 

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Courses: undefined;
  MyLearning: undefined;
  CourseDetails: {
    course: {
      id: string;
      title: string;
      description: string;
    };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to BrainiX' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="Courses" component={CoursesScreen} options={{ title: 'Courses Catalog' }} />
        <Stack.Screen name="MyLearning" component={MyLearningScreen} options={{ title: 'My Learning Progress' }} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{ title: 'Course Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
