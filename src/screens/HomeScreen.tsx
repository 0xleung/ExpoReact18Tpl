import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, } from 'react-native';
import styled from 'styled-components/native'
import Cube3d from '../components/Cube3d';

const CenteredView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function HomeScreen() {
  return (
    <CenteredView>
        <View style={{
            height: 300,
            width: 300,
        }}>
            <Cube3d />
        </View>
      <Text>首页</Text>
    </CenteredView>
  );
}