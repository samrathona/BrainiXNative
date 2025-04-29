import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const featuredCourses = [
  { id: '1', title: 'React Native Basics', description: 'Start your mobile journey.' },
  { id: '2', title: 'UI/UX Principles', description: 'Design apps users love.' },
];

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏰 Welcome</Text>
      <Text style={styles.subheading}>Continue learning and conquering!</Text>

      <FlatList
        data={featuredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() => navigation.navigate('Courses' as never)}
          >
            <View style={styles.iconRow}>
              <Icon name="book-open" size={28} color="#4caf50" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyLearning' as never)}>
          <Icon name="book" size={22} color="#ffffff" />
          <Text style={styles.buttonText}> My Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#d32f2f' }]} onPress={() => navigation.navigate('Login' as never)}>
          <Icon name="logout" size={22} color="#ffffff" />
          <Text style={styles.buttonText}> Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
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
    backgroundColor: '#ffffff',
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
  buttons: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
