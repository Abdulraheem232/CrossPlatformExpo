import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f5f5f5', // Light gray background
  },
  text: {
    fontSize: 24, // Font size
    color: '#333', // Dark text color
  },
});
