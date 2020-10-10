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
          <Title>E aí, Vamos tirar a sua idéia e a de outras pessoas do papel?</Title>
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
            <Comment1>Voltar</Comment1>
          </BackButton>
        </ViewButton>
    </Container>
  )
}

export default Register;