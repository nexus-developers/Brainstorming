import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    InternContainer,
    Title,
    FormView,
    FormTitle,
    Input,
    ButtonRegister,
    ButtonText
} from './styles';

import { ScrollView } from 'react-native'

const FormRegister = () => {
  const navigation = useNavigation()
  return (
      <Container>
        <ScrollView>
          <InternContainer>
            <Title>Olá, para a gente te conhecer melhor, preencha essas informações antes de partimos para a próxima etapa!</Title>
            <FormView>
              <FormTitle>Como você prefere ser chamado?*</FormTitle>
              <Input 
                autoCapitalize='words'
                autoCompleteType='name'
                maxLength={35}
                multiline={false}
              />
              <FormTitle>Me informa o link do teu portfólio?</FormTitle>
              <Input
                autoCapitalize='none'
                autoCompleteType='name'
                maxLength={35}
                multiline={false}
              />
              <FormTitle>Qual o E-mail que você mais usa?*</FormTitle>
              <Input
                autoCapitalize='none'
                autoCompleteType='email'
                maxLength={35}
                multiline={false}
              />
              <FormTitle>Me informa uma senha para acesso?*</FormTitle>
              <Input 
                secureTextEntry={true}
                maxLength={25}
              />
            </FormView>
            <ButtonRegister
              onPress={() => navigation.navigate('AreasRegister')}
            >
              <ButtonText>Ir para a próxima etapa</ButtonText>
            </ButtonRegister>
          </InternContainer>
        </ScrollView>
      </Container>
  );
}

export default FormRegister;