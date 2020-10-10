import React from 'react';
import { View, Button } from 'react-native';

import { Container, ImageCont, BtnsCont, TitleText } from './styles';

export default function Wellcome({ navigation }) {
  return (
    <Container>
      <ImageCont >

      </ImageCont>
      <BtnsCont>
        <TitleText>Olá</TitleText>
      </BtnsCont>
    </Container>
  )
}
