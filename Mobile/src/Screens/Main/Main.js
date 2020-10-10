import React from 'react';
import { View, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { Container, HeaderCont, ScreenTitle } from './styles';

const Main = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'blue' }}>
      <Container>
        <HeaderCont>
          <Fontisto style={{ marginLeft: 15 }} name="atom" size={24} color="black" />
          <ScreenTitle>Brainstorming</ScreenTitle>
        </HeaderCont>
      </Container>
    </ScrollView>
  )
}

export default Main;