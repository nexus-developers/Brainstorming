import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Fontisto, Feather, Ionicons, EvilIcons, Foundation } from '@expo/vector-icons';

import post1 from './Assets/2.jpg'

import { 
  Container, 
  HeaderCont, 
  ScreenTitle,
  User,
  UserPhoto,
  CreatePostComponent,
  Comment,
  Title
} from './styles';

const post = [
  {
    id: 1,
    title: 'Aplicativo de Mensagens',
    comments: 20,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Tecnologia'
  },
  {
    id: 2,
    title: 'Mercado Livre de Livros',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    comments: 100,
    tag: 'Leitura'
  },
  {
    id: 3,
    title: 'Aplicativo de Mensagens',
    comments: 20,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Tecnologia'
  },
  {
    id: 4,
    title: 'Mercado Livre de Livros',
    comments: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Leitura'
  },
  {
    id: 5,
    title: 'Aplicativo de Mensagens',
    comments: 20,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Tecnologia'
  },
  {
    id: 6,
    title: 'Mercado Livre de Livros',
    comments: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Leitura'
  },
  {
    id: 7,
    title: 'Aplicativo de Mensagens',
    comments: 20,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Tecnologia'
  },
  {
    id: 8,
    title: 'Mercado Livre de Livros',
    comments: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    tag: 'Leitura'
  },
  

]

const Main = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Container>
        <HeaderCont>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto name="atom" size={24} color="black" />
            <ScreenTitle>Brainstorming</ScreenTitle>
          </View>
          <User>
            <UserPhoto
              source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
            />
          </User>
        </HeaderCont>
        <CreatePostComponent>
          <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <View style={{ backgroundColor: '#66A3FE', padding: 6, borderRadius:10, alignItems: 'center' }}>
                <Feather name="send" size={20} color="#FFF" />
              </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Comment>Teve alguma ideia bacana?</Comment>
              <Title>Criar uma publicação</Title>
            </View>
          </View>
          <Ionicons name="ios-arrow-forward" size={20} color="#CACACA" style={{ marginRight: 15 }} />
        </CreatePostComponent>

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
          <Text style={{ fontFamily: 'Regular', color: '#CACACA' }}>NOSSA COMUNIDADE</Text>
          <TouchableOpacity>
            <Text style={{ fontFamily: 'Bold', color: '#66A3FE' }}>Ver Todos</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={post}
          style={{ marginBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
            >
              <Image 
                style={{ width: '95%', height: 200, borderRadius: 10 }}
                source={post1}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 10, alignItems: "center" }} >
                <View>
                  <Title>{item.title}</Title>
                  <Comment 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{ width: 280 }}
                  >{item.description}</Comment>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Feather name="send" size={15} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <EvilIcons name="comment" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Foundation name="dollar" size={25} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </Container>
    </ScrollView>
  )
}

export default Main;