import React, { useState } from 'react';
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

import { ScrollView, Alert } from 'react-native'

const FormRegister = () => {

  const [ name, setName ] = useState('')
  const [ portfolio, setPortfolio ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function VerifyInformations(){
    if(name === '' || email === '' || password === ''){
      Alert.alert(
        'Ops! Falha ao receber seus dados',
        'Algum dos campos obrigatórios não foi preenchido'
      )
    } else {
      navigation.navigate('AreasRegister', {
        name: name,
        email: email,
        portfolio: portfolio,
        password: password
      })
    }
  }

  const navigation = useNavigation()
  return (
      <Container>
        <ScrollView>
          <InternContainer>
            <Title>Para a gente te conhecer melhor, preencha essas informações antes de prosseguir!</Title>
            <FormView>
              <FormTitle>Como você prefere ser chamado?*</FormTitle>
              <Input 
                autoCapitalize='words'
                autoCompleteType='name'
                maxLength={35}
                multiline={false}
                value={name}
                onChangeText={e => setName(e)}
              />
              <FormTitle>Me informa o link do teu portfólio?</FormTitle>
              <Input
                autoCapitalize='none'
                autoCompleteType='name'
                maxLength={35}
                multiline={false}
                value={portfolio}
                onChangeText={e => setPortfolio(e)}
              />
              <FormTitle>Qual o E-mail que você mais usa?*</FormTitle>
              <Input
                autoCapitalize='none'
                autoCompleteType='email'
                maxLength={35}
                multiline={false}
                value={email}
                onChangeText={e => setEmail(e)}
              />
              <FormTitle>Me informa uma senha para acesso?*</FormTitle>
              <Input 
                secureTextEntry={true}
                maxLength={25}
                value={password}
                onChangeText={e => setPassword(e)}
              />
            </FormView>
            <ButtonRegister
              onPress={() => VerifyInformations()}
            >
              <ButtonText>Próxima etapa</ButtonText>
            </ButtonRegister>
          </InternContainer>
        </ScrollView>
      </Container>
  );
}

export default FormRegister;