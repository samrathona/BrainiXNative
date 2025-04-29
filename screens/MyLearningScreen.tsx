import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const myCourses = [
  { id: '1', title: 'React Native Basics', progress: 1 },
  { id: '2', title: 'Advanced JavaScript', progress: 0.6 },
  { id: '3', title: 'UI/UX Design', progress: 0.3 },
];

export default function MyLearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📘 My Learning Progress</Text>

      <FlatList
        data={myCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <View style={styles.row}>
              <Icon
                name={item.progress === 1 ? 'check-circle' : 'progress-clock'}
                size={24}
                color={item.progress === 1 ? '#4caf50' : '#ff9800'}
              />
              <Text style={styles.courseTitle}>{item.title}</Text>
            </View>
            <ProgressBar
              progress={item.progress}
              color="#4caf50"
              style={styles.progressBar}
            />
            <Text style={styles.progressText}>
              {Math.round(item.progress * 100)}% complete
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
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
    marginBottom: 20,
    textAlign: 'center',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressText: {
    marginTop: 6,
    fontSize: 14,
    color: '#555',
  },
});
