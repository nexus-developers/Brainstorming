import React, { useState, useEffect } from 'react';
import  Api from '../../Services/Api';
import { FlatList, ScrollView, Alert, Text, View, TouchableOpacity, Image } from 'react-native';
import { Fontisto, Feather, Ionicons, EvilIcons, Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'; 
import post1 from '../Main/Assets/2.jpg'

import { Title, Comment } from '../Main/styles'

import { 
  Container, 
  BackBtnCont, 
  BackBtn,
  OptionsBtn,
  ProfileCont, 
  ImgCont, 
  Img, 
  UserName, 
  AreaDescription, 
  StatisticsOutterCont,
  StatisticsInnerCont,
  Statistic,
  FieldDescription
} from './styles';

const Profile = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments ] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    GetPosts();
  }, [])

  useEffect(() => {
    GetUser()
  }, [])

  useEffect(() => {
    getComment()
  }, [])

  async function GetUser(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.get('/users', {
      headers: {
        'Authorization': `Bearer: ${token}`
      },
    })
      .then(resp => {
        setUser(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  }

  async function getComment(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.get('/comment', {
      headers: {
        'Authorization': `Bearer: ${token}`
      },
    })
      .then(resp => {
        setComments(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  }

  async function GetPosts(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.get('/post', {
      headers: {
        'Authorization': `Bearer: ${token}`
      },
    })
      .then(resp => {
        setUserPosts(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  };
  
  async function RemoveUserToken(){
    await AsyncStorage.removeItem('@brainstorm_Token');
    navigation.navigate('Wellcome');
  };



  return (
    <Container>
      <ScrollView>
        <BackBtnCont>
          <BackBtn onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </BackBtn>
          <OptionsBtn onPress={() => Alert.alert(
              'Sair', 
              'Deseja mesmo sair da sua conta?',
              [
                {
                  text: "Cancelar",
                  onPress: () => {},
                  style: "cancel"
                },
                {
                  text: "Sair",
                  onPress: () => {
                    RemoveUserToken();
                  }
                }
              ]
            )}>
            <Ionicons name="ios-log-out" size={26} color="black" style={{ paddingTop: 20, paddingRight: 20 }} />
          </OptionsBtn>
        </BackBtnCont>
        <ProfileCont>
          <ImgCont>
            <Img source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}/>
          </ImgCont>
          <UserName>{user.name}</UserName>
          <AreaDescription>{user.area}</AreaDescription>
          <StatisticsOutterCont>
            <StatisticsInnerCont>
              <Statistic>{userPosts.length + comments.length + 100}</Statistic>
              <FieldDescription>Pontos</FieldDescription>
            </StatisticsInnerCont>
            <StatisticsInnerCont>
              <Statistic>{userPosts.length}</Statistic>
              <FieldDescription>Posts</FieldDescription>
            </StatisticsInnerCont>
            <StatisticsInnerCont>
              <Statistic>{comments.length}</Statistic>
              <FieldDescription>Comentários</FieldDescription>
            </StatisticsInnerCont>
          </StatisticsOutterCont>
        </ProfileCont>

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
          <Text style={{ fontFamily: 'Regular', color: '#CACACA' }}>SEUS POSTS</Text>
        </View>

        <FlatList 
          data={userPosts}
          style={{ marginBottom: 20 }}
          keyExtractor={item => item.id}
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
                  >{item.content}</Comment>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <Feather name="send" size={15} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginHorizontal: 2 }}>
                    <EvilIcons name="comment" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </Container>
  )
}

export default Profile;