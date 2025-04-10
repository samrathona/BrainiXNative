import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

type Course = {
  id: string;
  title: string;
  description: string;
};

const courses: Course[] = [
  { id: '1', title: 'Introduction to AI', description: 'Learn the basics of AI.' },
  { id: '2', title: 'Data Structures', description: 'Understand core CS concepts.' },
  { id: '3', title: 'Web Development', description: 'HTML, CSS, JavaScript and more.' },
];

const CourseCatalog = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>📚 Course Catalog</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CourseCatalog;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
});
