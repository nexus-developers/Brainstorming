import React, { useState, useEffect } from 'react';
import  Api from '../../Services/Api';
import { View, ScrollView, Image, Text, TouchableOpacity, Linking, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons, Foundation } from '@expo/vector-icons';
import { TagSelect } from 'react-native-tag-select'
import AsyncStorage from '@react-native-community/async-storage'; 

import { 
  parseISO, 
  formatRelative, 
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
  CommentsCont,
  CommentsTitle,
  InputTitle,
  CommentInput,
  SubmitCommentBtn,
  SubmitText,
  FlatlistCard,
  UserImg
} from './styles';

import Img from '../Main/Assets/2.jpg';

const PostDetails = ({ route }) => {
  const [post, setPost] = useState(route.params.post);
  const [tags, setTags] = useState([]);
  const [user, setUser] = useState({});

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const firstDate = parseISO(post.createdAt);
  const secondDate = parseISO(post.updatedAt);

  const relative = formatRelative(
    firstDate,
    secondDate,
    {locale: pt}
  );

  function formatDate(createdAt, updatedAt){
    const parsedCreatedAt = parseISO(createdAt)
    const parsedUpdatedAt = parseISO(updatedAt)

    const dateFormated = formatRelative(
      parsedCreatedAt,
      parsedUpdatedAt,
      { locale: pt }
    )

    return dateFormated
  }

  useEffect(() => {
    GetPostUser();
    FillTagsArray();
    GetPostComments();
    console.log(comments);
  }, [])

  function FillTagsArray() {
    let tagsArray = post.tags.split(', ');
    setTags(tagsArray);
  }

  async function GetPostUser(){
    await Api.get(`/users/${post.user_id}`)
      .then(resp => {
        setUser(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  }

  async function PostComment() {
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.post('/comment', {
      "content": comment,
      "post_id": post.id
    }, {
      headers: {
        'Authorization': `Bearer: ${token}`
      },
    })
      .then(resp => {
        GetPostComments();
      })
      .catch(err => {
        console.log(err.request);
      })
  }

  async function GetPostComments(){
    const token = await AsyncStorage.getItem('@brainstorm_Token');
    await Api.get(`/comment/${post.id}`, {
      headers: {
        'Authorization': `Bearer: ${token}`
      },
    })
      .then(resp => {
        setComments(resp.data);
      })
      .catch(err => {
        console.log(err.request);
      })
  }

  function SendWhatsapp() {
    Linking.openURL(`whatsapp://send?&text=teste`);
  }

  const navigation = useNavigation()
  return (
    <Container>
      <ScrollView>
        <BackBtnCont>
          <BackBtn onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </BackBtn>
        </BackBtnCont>
        <PostTitle>{post.title}</PostTitle>
        <UserName>{user.name}</UserName>
        <Image
          style={{ width: '90%', height: 200, alignSelf: 'center', borderRadius: 10 }}
          source={Img} 
        />
        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '50%' }}>
            <Text style={{ fontSize: 16, fontFamily: 'Bold', marginTop: 20 }}>DESCRIÇÃO</Text>
            <CreationDate>{relative}</CreationDate>
          </View>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity style={{ marginHorizontal: 2 }} onPress={() => SendWhatsapp()}>
              <Feather name="send" size={17} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 2 }}>
              <Foundation name="dollar" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
          <TagSelect 
            data={tags}
            itemStyle={{
              height: 30,
              textAlign: 'center',
              padding: 5,
              borderRadius: 5,
              borderColor: '#FDC75B',
              backgroundColor: '#FDC75B',
            }}
            itemLabelStyle={{
              color: 'white',
            }}
            itemStyleSelected={{
              height: 30,
              textAlign: 'center',
              padding: 5,
              borderRadius: 5,
              borderColor: '#FDC75B',
              backgroundColor: '#FDC75B',
            }}
            itemLabelStyleSelected={{
              color: 'white',
            }}
          />
        </View>
        <Description>{post.content}</Description>
        <CommentsCont>
          <CommentsTitle>COMENTÁRIOS</CommentsTitle>
          <FlatList 
            data={comments}
            style={{ marginBottom: 20 }}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5}}>
                    <UserImg source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }}/>
                  </View>
                  <FlatlistCard>
                    <Text style={{ fontFamily: 'Regular', color: '#3B2C33' }}>{item.content}</Text>
                  </FlatlistCard>
                </View>
                <Text style={{ alignSelf: 'flex-end', fontFamily: 'Light', fontSize: 12 }}>{formatDate(item.createdAt, item.updatedAt)}</Text>
              </View>
            )}
          />
          <InputTitle>Deixe aqui o seu comentário:</InputTitle>
          <CommentInput
            autoCapitalize='words'
            autoCompleteType='name'
            multiline={true}
            value={comment}
            onChangeText={e => setComment(e)}
          />
          <SubmitCommentBtn onPress={() => {
            if (comment === '') {
              Alert.alert('Ops', 'Preencha o campo de comentário para envia-lo')
            } else {
              PostComment();
              setComment('');
            }
          }}>
            <SubmitText>Enviar Comentário</SubmitText>
          </SubmitCommentBtn>
        </CommentsCont>
      </ScrollView>
    </Container>
  )
}

export default PostDetails;