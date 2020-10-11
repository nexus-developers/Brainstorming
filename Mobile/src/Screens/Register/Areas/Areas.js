import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { 
  Container,
  InternContainer,
  Title,
  Comment,
  Card,
  ImageCard,
  Title2,
  FormTitle,
  Input,
  ButtonRegister,
  ButtonText
} from './styles';

import character from '../Assets/character2.png'

const data = [
  {
    id: 1,
    name: 'UX Designer',
    selected: false,
    info: 'design'
  },
  {
    id: 2,
    name: 'Programador Front-End',
    selected: false,
    info: 'dev'
  },
  {
    id: 3,
    name: 'Gestor de Projetos',
    selected: false,
    info: 'gestão'
  },
  {
    id: 4,
    name: 'UI Designer',
    selected: false,
    info: 'dev'
  },
  {
    id: 6,
    name: 'Programador Back-End',
    selected: false,
    info: 'dev'
  },
  {
    id: 7,
    name: 'Programador Full-Stack',
    selected: false,
    info: 'dev'
  },
  {
    id: 8,
    name: 'Analista de Testes',
    selected: false,
    info: 'test'
  }
]

const Areas = ({ route }) => {
  const [ user, setUser ] = useState(route.params)
  const [ area, setArea ] = useState('')
  const [ experience, setExperience ] = useState('')
  const [ skills, setSkills ] = useState('')

  function VerifyData(){
    if(area === '' || experience === '' || skills === ''){
      Alert.alert(
        'Ops! Falha ao receber seus dados',
        'Algum campo não foi preenchido'
      )
    }else{
      navigation.navigate('TagsRegister', {
        name: user.name,
        email: user.email,
        portfolio: user.portfolio,
        password: user.password,
        area: area,
        experience: experience,
        skills: skills
      })
    }
  }

  const navigation = useNavigation()
  return (
    <Container>
      <ScrollView>
        <InternContainer>
          <Title>
            Em qual área você atua ou tem interesse em atuar? 
          </Title>
          <Comment>
            É importante sabermos a sua área de atuação, pois assim torna-se mais fácil de conectar você ao seu possível companheiro de equipe.
          </Comment>
          <FlatList 
            data={data}
            horizontal={true}
            renderItem={({ item }) => (
              <Card 
                style={style.shadow}
                onPress={() => setArea(item.name)}
                Selected={area === item.name ? true : false}
              >
                <ImageCard 
                  source={character}
                />
                <Title2>{item.name}</Title2>
              </Card>
            )}
            keyExtractor={item => item.id}
          />
          <FormTitle>Quanto tempo de experiência?*</FormTitle>
          <Input 
            keyboardType='number-pad'
            maxLength={10}
            value={experience}
            onChangeText={e => setExperience(e)}
          />

          <FormTitle>Suas Habilidades?*</FormTitle>
          <Input 
            autoCapitalize='words'
            value={skills}
            onChangeText={e => setSkills(e)}
          />
          <ButtonRegister
              onPress={() => VerifyData()}
            >
              <ButtonText>Próxima etapa</ButtonText>
          </ButtonRegister>
        </InternContainer>
      </ScrollView>
    </Container>
  )
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
})

export default Areas;