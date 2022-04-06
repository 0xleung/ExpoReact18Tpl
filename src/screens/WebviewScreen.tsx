import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, } from 'react-native';
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';
import { RootStackScreenProps } from '../../types';

const CenteredView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
export default function WebviewScreen({ route }: RootStackScreenProps<'Webview'>) {
    const { url } = route.params;
  return (
    <WebView
      source={{ uri: url }}
    />
  );
}