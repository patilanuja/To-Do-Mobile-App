import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import TodoScreen from './src/screen/ToDoScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TodoScreen/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
