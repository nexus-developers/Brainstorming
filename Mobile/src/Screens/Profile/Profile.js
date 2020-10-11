import React from 'react';
import { View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import  Api from '../../Services/Api';

import { 
  Container, 
  BackBtnCont, 
  BackBtn, 
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
  

  return (
    <Container>
      <ScrollView>
        <BackBtnCont>
          <BackBtn onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </BackBtn>
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