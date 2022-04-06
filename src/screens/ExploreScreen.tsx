import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
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

export default function ExploreScreen({ navigation }: RootTabScreenProps<'Explore'>) {
  return (
    <CenteredView>
      <Text>探索</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Webview', {url: 'https://h5.stararknft.art/#/index'});
      }}>
        <ButtonView >
          <Text>去Webview</Text>
        </ButtonView>
      </TouchableOpacity>
    </CenteredView>
  );
}