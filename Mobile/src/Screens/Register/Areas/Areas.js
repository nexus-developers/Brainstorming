import React from 'react';
import { FlatList, StyleSheet } from 'react-native'
import { 
  Container,
  InternContainer,
  Title,
  Comment,
  Card,
  ImageCard,
  Title2
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
    id: 5,
    name: 'UX Designer',
    selected: false,
    info: 'design'
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

const Areas = () => {
  return (
    <Container>
        <InternContainer>
          <Title>
            Conta para a gente, em qual área você atua ou tem interesse em atuar? 
          </Title>
          <Comment>
            É importante sabermos onde você atua ou pode atuar, pois assim traremos os projetos e pessoas que podem te ajudar ou serem ajudadas. 
          </Comment>
          <FlatList 
            data={data}
            horizontal={true}
            renderItem={({ item }) => (
              <Card style={style.shadow}>
                <ImageCard 
                  source={character}
                />
                <Title2>{item.name}</Title2>
              </Card>
            )}
            keyExtractor={item => item.id}
          />
        </InternContainer>
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