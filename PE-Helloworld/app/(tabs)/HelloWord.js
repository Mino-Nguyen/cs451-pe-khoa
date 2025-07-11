import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Khoa Nguyen</Text>
      <Text>Team 0</Text>
      <Text>Applied Computer Science</Text>
      <Text>MSCS</Text>
      <Text>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
