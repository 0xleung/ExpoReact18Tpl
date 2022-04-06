import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import styled from 'styled-components/native'
import { RootTabScreenProps } from '../../types';

const CenteredView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const ButtonView = styled.View`
  padding: 10px 20px;
  background-color: #efe;
`

export default function MineScreen({ navigation }: RootTabScreenProps<'Mine'>) {
  return (
    <CenteredView>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Setting');
      }}>
        <ButtonView >
          <Text>去设置</Text>
        </ButtonView>
      </TouchableOpacity>
      <Text>我的</Text>
    </CenteredView>
  );
}