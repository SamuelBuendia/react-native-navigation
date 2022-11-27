import { Categories, Products, Product } from './screens';
import { useFonts } from 'expo-font'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation';

export default function App() {
  const [loaded] = useFonts({
    LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf')
  })

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AppNavigator />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})