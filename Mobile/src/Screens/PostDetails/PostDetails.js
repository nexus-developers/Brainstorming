import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fontisto, Feather, Ionicons, EvilIcons, Foundation } from '@expo/vector-icons';

import { 
  parseISO, 
  format, 
  formatRelative, 
  formatDistance,
} from 'date-fns';

import { pt } from 'date-fns/locale';

import { 
  Container,
  BackBtnCont, 
  BackBtn,
  OptionsBtn, 
  PostTitle,
  UserName,
  CreationDate,
  Description,
  TagCard,
  TagText
} from './styles';

import Img from '../Main/Assets/2.jpg';

const PostDetails = ({ route }) => {
  const [post, setPost] = useState(route.params.post);
  const [tags, setTags] = useState([]);

  const firstDate = parseISO(post.createdAt);
  const secondDate = parseISO(post.updatedAt);

  const relative = formatRelative(
    firstDate,
    secondDate,
    {locale: pt}
  );

  useEffect(() => {
    FillTagsArray();
    console.log(tags);
  }, [])

  function FillTagsArray() {
    let tagsArray = post.tags.split(', ');
    setTags(tagsArray);
  }

  // async function GetUser(){
  //   const token = await AsyncStorage.getItem('@brainstorm_Token');
  //   await Api.get('/users', {
  //     headers: {
  //       'Authorization': `Bearer: ${token}`
  //     },
  //   })
  //     .then(resp => {
  //       setUser(resp.data);
  //       console.log(resp.data);
  //     })
  //     .catch(err => {
  //       console.log(err.request);
  //     })
  // }

  const navigation = useNavigation()
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
            <Ionicons name="ios-log-out" size={26} color="black" style={{ paddingTop: 30, paddingRight: 20 }} />
          </OptionsBtn>
        </BackBtnCont>
        <PostTitle>{post.title}</PostTitle>
        <UserName>Usuário</UserName>
        <Image
          style={{ width: '90%', height: 200, alignSelf: 'center', borderRadius: 10 }}
          source={Img} 
        />
        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'Bold', marginTop: 20 }}>DESCRIÇÃO</Text>
            <CreationDate>{relative}</CreationDate>
            <FlatList 
              data={tags}
              style={{ marginTop: 15, marginBottom: 5 }}
              horizontal={true}
              renderItem={({ item }) => (
                <TagCard>
                  <TagText>{item}</TagText>
                </TagCard>
              )}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity style={{ marginHorizontal: 2 }}>
              <Feather name="send" size={17} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 2 }}>
              <EvilIcons name="comment" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 2 }}>
              <Foundation name="dollar" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Description>{post.content}</Description>
      </ScrollView>
    </Container>
  )
}

export default PostDetails;