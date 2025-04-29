import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

// Define the route type for CourseDetails
type CourseDetailsRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

export default function CourseDetailsScreen() {
  const route = useRoute<CourseDetailsRouteProp>();
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});
