import React, { useState, useEffect } from 'react';
import  Api from '../../Services/Api';
import { View, ScrollView, Alert } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'; 

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
  const [userToken, setUserToken] = useState('');
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    GetUserToken();
    GetUserPosts();
  }, [])

  async function GetUserPosts() {
    const posts = await Api.get('/post', {
      headers: {
        'Authorization': `Bearer: ${userToken}`
      },
    })
      .then(resp => {
        setUserPosts(posts);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  };

  async function GetUserToken(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    setUserToken(token);
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
          <UserName>João Muribeca</UserName>
          <AreaDescription>Programador Front-End</AreaDescription>
          <StatisticsOutterCont>
            <StatisticsInnerCont>
              <Statistic>3582</Statistic>
              <FieldDescription>Pontos</FieldDescription>
            </StatisticsInnerCont>
            <StatisticsInnerCont>
              <Statistic>10</Statistic>
              <FieldDescription>Posts</FieldDescription>
            </StatisticsInnerCont>
            <StatisticsInnerCont>
              <Statistic>4</Statistic>
              <FieldDescription>Comentários</FieldDescription>
            </StatisticsInnerCont>
          </StatisticsOutterCont>
        </ProfileCont>
      </ScrollView>
    </Container>
  )
}

export default Profile;