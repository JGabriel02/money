
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../constants/color';
import GlobalState from '../contexts/GlobalState';

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (

    <GlobalState>
      <StatusBar backgroundColor={colors.primary} style='light'/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </GlobalState>
  )
  
}
