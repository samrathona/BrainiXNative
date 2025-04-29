import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const dummyCourses = [
  { id: '1', title: 'React Native Basics', description: 'Learn how to build mobile apps.' },
  { id: '2', title: 'Advanced JavaScript', description: 'Level up your JS skills.' },
  { id: '3', title: 'UI/UX Design Principles', description: 'Design better user experiences.' },
];

// ✅ Define typed navigation
type CoursesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

export default function CoursesScreen() {
  const navigation = useNavigation<CoursesScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📚 Course Catalog</Text>
      <Text style={styles.subheading}>Explore topics to boost your skills</Text>

      <FlatList
        data={dummyCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() =>
              navigation.navigate('CourseDetails', { course: item })
            }
          >
            <View style={styles.iconRow}>
              <Icon name="book-open-page-variant" size={28} color="#4caf50" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
});
