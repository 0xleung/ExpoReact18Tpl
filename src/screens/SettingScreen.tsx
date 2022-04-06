import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, } from 'react-native';
import styled from 'styled-components/native'

const CenteredView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function SettingScreen() {
  return (
    <CenteredView>
      <Text>设置</Text>
    </CenteredView>
  );
}