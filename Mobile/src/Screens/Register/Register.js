import React from 'react';

import { useNavigation } from '@react-navigation/native'

import { 
  Container, 
  InternContainer,
  ImagesView,
  Image,
  Title,
  Comment,
  ViewButton,
  ButtonRegister,
  ButtonText,
  BackButton,
  Comment1
} from './styles';

import Illustration1 from './Assets/character1.png'

const Register = () => {

  const navigation = useNavigation()
  return (
    <Container>
      <InternContainer>
        <ImagesView>
          <Image
            source={Illustration1}
          />
        </ImagesView>
          <Title>E ai, vamos tirar sua idéia do papel ou ajudar outras pessoas a tirar as delas?</Title>
          <Comment>Vamos tentar achar um projeto ou pessoas bacanas para te ajudar!</Comment>
        </InternContainer>
        <ViewButton>
          <ButtonRegister
            onPress={() => navigation.navigate('FormRegister')}
          >
            <ButtonText>Vamos Lá</ButtonText>
          </ButtonRegister>
          <BackButton
            onPress={() => navigation.goBack()}
          >
            <Comment1>Voltar ao Início</Comment1>
          </BackButton>
        </ViewButton>
    </Container>
  )
}

export default Register;