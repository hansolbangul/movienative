import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Text, Image, useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from './navigation/Root';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './styled';

const queryClient = new QueryClient();

export default function App() {
  const [assets] = useAssets([require('./ponyo008.jpg')]);
  const [loaded] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === 'dark';

  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
