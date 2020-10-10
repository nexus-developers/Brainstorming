import React from 'react';
import { View, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { Container, Content, ScreenTitleCont, ScreenTitle, ContentCont, TitleCont, TitleText, SubtitleText, InputsCont, LoginBtnCont, InputText, Input, Input1, Input2, LoginButton, BtnText, LastCont, RegisterText, RegisterBtn, RegisterTextBtn } from './styles';

export default function Login({ navigation }) {
  return (
      <Container>
          <Content>
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
              <LoginBtnCont>
                <LoginButton>
                  <BtnText>Entrar</BtnText>
                </LoginButton>
                <LastCont>
                  <RegisterText>Ainda não tem uma conta?</RegisterText>
                  <RegisterBtn onPress={() => {navigation.navigate('Register')}}>
                    <RegisterTextBtn>Registrar</RegisterTextBtn>
                  </RegisterBtn>
                </LastCont>
              </LoginBtnCont>
            </ContentCont>
          </Content>
      </Container>
  )
}
