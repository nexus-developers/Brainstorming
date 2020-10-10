import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { Container, Content, ScreenTitleCont, ScreenTitle, ContentCont, TitleCont, TitleText, SubtitleText, InputsCont, LoginBtnCont, InputText, Input, Input1, Input2, LoginButton, BtnText, LastCont, RegisterText, RegisterBtn, RegisterTextBtn, WellcomeBtn, WellcomeTextBtn } from './styles';

export default function Login({ navigation }) {
  return (
      <Container >
        <Content behavior={(Platform.OS === 'ios') ? "position" : "padding"}>
          <ScreenTitleCont>
            <Fontisto style={{ marginLeft: 15 }} name="atom" size={24} color="black" />
            <ScreenTitle>Brainstorming</ScreenTitle>
          </ScreenTitleCont>
          <ContentCont>
            <TitleText>Bem vindo de volta!</TitleText>
            <SubtitleText>Faça o seu login para continuar</SubtitleText>
            <Input1>
              <InputText>Email</InputText>
              <Input 
                autoCapitalize='none'
              />
            </Input1>
            <Input2>
              <InputText>Senha</InputText>
              <Input
                secureTextEntry={true}
              />
            </Input2>
            <LoginButton>
              <BtnText>Entrar</BtnText>
            </LoginButton>
            <LastCont>
              <RegisterText>Ainda não tem uma conta?</RegisterText>
              <RegisterBtn onPress={() => {navigation.navigate('Register')}}>
                <RegisterTextBtn>Registre-se</RegisterTextBtn>
              </RegisterBtn>
            </LastCont>
            <LastCont>
              <WellcomeBtn onPress={() => {navigation.navigate('Wellcome')}}>
                <WellcomeTextBtn>Voltar</WellcomeTextBtn>
              </WellcomeBtn>
            </LastCont>
          </ContentCont>
        </Content>
      </Container>
  )
}
