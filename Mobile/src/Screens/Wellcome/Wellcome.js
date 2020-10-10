import React from 'react';
import { View, Button, StatusBar } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

import { Container, ScreenTitleCont, ScreenTitle, ImageCont, Image, ContentCont, TitleCont, TitleText, SubtitleText, BtnsCont, LoginButton, RegisterButton, BtnText1, BtnText2 } from './styles';

export default function Wellcome({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <ScreenTitleCont>
        <Fontisto style={{ marginLeft: 15 }} name="atom" size={24} color="black" />
        <ScreenTitle>Brainstorming</ScreenTitle>
      </ScreenTitleCont>
      <ImageCont >
        <Image resizeMode='contain' source={require('./assets/LoginImg.png')} />
      </ImageCont>
      <ContentCont>
        <TitleCont>
          <TitleText>Boas vindas ao Brainstorm, <SubtitleText>aqui você tirará o seu projeto do papel!</SubtitleText></TitleText>
        </TitleCont>
        <BtnsCont>
          <LoginButton onPress={() => {navigation.navigate('Login')}}>
            <BtnText1>Entrar</BtnText1>
          </LoginButton>
          <RegisterButton onPress={() => {navigation.navigate('Register')}}>
            <BtnText2>Registrar</BtnText2>
          </RegisterButton>
        </BtnsCont>
      </ContentCont>
    </Container>
  )
}
