import React, { useState } from 'react';
import Api from '../../Services/Api'
import { Platform, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  Container, 
  Content, 
  ScreenTitleCont, 
  ScreenTitle, 
  ContentCont, 
  TitleCont, 
  TitleText, 
  SubtitleText, 
  InputsCont, 
  LoginBtnCont, 
  InputText, 
  Input, 
  Input1, 
  Input2, 
  LoginButton, 
  BtnText, 
  LastCont, 
  RegisterText, 
  RegisterBtn, 
  RegisterTextBtn, 
  WellcomeBtn, 
  WellcomeTextBtn 
} from './styles';

export default function Login({ navigation }){
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  async function SaveTokenUser(data){
    await AsyncStorage.setItem('@brainstorm_Token', data.token)
    navigation.navigate('Main')
  }

  async function LoginUser(){
    if(email === '' || password === ''){
      Alert.alert(
        'Ops! Falha ao receber dados',
        'É necessário preencher os dois campos para fazer login'
      )
    }else{
      await Api.post('/sessions', {
        email: email,
        password: password
      })
      .then(resp => {
        SaveTokenUser(resp.data)
      })
      .catch(err => {
        if(err.request.status ===  401){
          Alert.alert(
            'Ops! Falha em efetuar login',
            'Os dados informados não existem na nossa base de dados'
          )
        } else {
          Alert.alert(
            'Ops! Falha em efetuar login',
            'Houve uma falha ao efetuar login'
          )
        }
      })
    }
  }

  return (
      <Container >
        <Content behavior={Platform.OS === 'ios' ? "position" : "padding"}>
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
                value={email}
                onChangeText={e => setEmail(e)}
                autoCapitalize='none'
                keyboardType='email-address'
              />
            </Input1>
            <Input2>
              <InputText>Senha</InputText>
              <Input
                value={password}
                onChangeText={e => setPassword(e)}
                secureTextEntry={true}
              />
            </Input2>
            <LoginButton
              onPress={() => LoginUser()}
            >
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
