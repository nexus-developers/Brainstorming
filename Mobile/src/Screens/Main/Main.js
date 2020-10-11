import React, { useState, useEffect } from 'react';
import  Api from '../../Services/Api';
import { ScrollView, View, Text, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'; 
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

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPosts();
  }, [])

  async function GetPosts(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.get('post-findAll')
      .then(resp => {
        setPosts(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  };

  const navigation = useNavigation()
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content'/>
      <Container>
        <HeaderCont>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Fontisto name="atom" size={24} color="black" />
            <ScreenTitle>Brainstorming</ScreenTitle>
          </View>
          <User onPress={() => navigation.navigate('Profile')}>
            <UserPhoto
              source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}
            />
          </User>
        </HeaderCont>
        <CreatePostComponent
          onPress={() => navigation.navigate('CreatePost')}
        >
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
          data={posts}
          style={{ marginBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ alignItems: "center", marginTop: 20 }}
              onPress={() => navigation.navigate('PostDetails', {
                post: item,
              })}
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
                  >{item.content}</Comment>
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