import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, TextInput, StyleSheet, Alert} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import Api from '../../Services/Api'
import img from './Assets/img.png'
import { useNavigation } from '@react-navigation/native'
import { TagSelect } from 'react-native-tag-select'
import AsyncStorage from '@react-native-community/async-storage'

import { ButtonRegister, ButtonText } from '../Register/Tags/styles'

const CreatePost = () => {
  const [ tags, setTags ] = useState([])
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')

  const navigation = useNavigation()

  const data = [
    { id: 1, label: 'Saúde' },
    { id: 2, label: 'Alimentação' },
    { id: 3, label: 'Tecnologia' },
    { id: 4, label: 'Desenvolvimento Pessoal' },
    { id: 5, label: 'Leitura' },
    { id: 6, label: 'Auto Ajuda' },
    { id: 7, label: 'Musica' },
    { id: 8, label: 'Esportes' },
    { id: 9, label: 'Jogos' },
    { id: 10, label: 'Pets' },
    { id: 12, label: 'Jornalismo' },
    { id: 13, label: 'Finanças' },
    { id: 14, label: 'Empregabilidade' },
    { id: 15, label: 'Entretenimento' },
  ]

  function saveTags(tag){
    const itemFound = tags.find(item => item === tag)
    if(!itemFound){
      setTags([...tags, tag])
    } else {
      let arrayFake = tags
      const position = tags.indexOf(tag)
      arrayFake.splice(position, 1)
      setTags(arrayFake)
    }
  }

  async function registerPost(){
    if(title === '' || content === '' || tags.length === 0){
      Alert.alert(
        'Ops! Falha ao receber dados do post',
        'É necessário preencher todos os campos para registrar um post.'
      )
    } else {
      const transformTags = tags.join(', ')
      const token = await AsyncStorage.getItem('@brainstorm_Token');
      const data = {
        title: title,
        content: content,
        tags: transformTags
      }

      await Api.post('/post', data, {
        headers: {
          'Authorization': `Bearer: ${token}`
        }
      })
      .then(resp => {
        console.log(resp.data);
        Alert.alert(
          'Registro de Post',
          'Seu post foi criado com sucesso!'
        )
        navigation.goBack()
      })
      .catch(err => {
        Alert.alert(
          'Ops! Houve uma falha',
          'Houve uma falha ao criar o post.'
        )
        navigation.goBack()
      })
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <StatusBar backgroundColor='#8E88D0' barStyle='light-content'/>
        <View>
          <View style={{ backgroundColor: '#8E88D0', justifyContent: 'center', alignItems: 'center', borderBottomEndRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 10 }}>
            <TouchableOpacity

              style={{ position: 'absolute', top: 5, left: 5, padding: 20 }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="#FFF" />
            </TouchableOpacity>
              <Image 
                style={{ width:180, height: 195 }}
                source={img}
              />
              <Text style={{ width: '90%', fontFamily: 'Bold', fontSize: 18, color: '#FFF' }}>Criação de um Post</Text>
          </View>
          <Text style={{ width: '90%', fontFamily: 'Semibold', fontSize: 15, color: '#3B2C33', marginLeft: 10, marginTop: 20 }}>Titulo do Post:</Text>
          <TextInput
            value={title}
            onChangeText={e => setTitle(e)}
            style={{backgroundColor: '#F7F8FA', borderRadius: 10, height: 40, marginBottom: 30, padding: 10, fontSize: 16, fontFamily: 'Regular', width: '95%', alignSelf: 'center', marginTop: 5}}
          />

          <Text style={{ width: '90%', fontFamily: 'Semibold', fontSize: 15, color: '#3B2C33', marginLeft: 10 }}>Conteúdo do Post:</Text>
          <TextInput 
            multiline={true}
            numberOfLines={4}
            maxLength={500}
            value={content}
            onChangeText={e => setContent(e)}
            style={{backgroundColor: '#F7F8FA', borderRadius: 10, height: 150, marginBottom: 30, padding: 10, alignSelf: 'center', textAlignVertical: 'top',alignItems: 'flex-start' ,fontSize: 16, fontFamily: 'Regular', width: '95%', marginTop: 5}}
          />

          <Text style={{ width: '90%', fontFamily: 'Semibold', fontSize: 15, color: '#3B2C33', marginLeft: 10, marginBottom: 20 }}>Selecionar as Tags:</Text>
          <View style={{ alignItems: "center", justifyContent: 'center', marginHorizontal: 20}}>
            <TagSelect 
              data={data}
              max={5}
              onItemPress={(item) => saveTags(item.label)}
              itemStyle={styles.item}
              itemLabelStyle={styles.label}
              itemStyleSelected={styles.itemSelected}
              itemLabelStyleSelected={styles.labelSelected}
              onMaxError={() => {
                Alert.alert(
                  'Ops! Olha o Limite', 
                  'Você só pode escolher até 5 Tags.'
                );
              }}
            />
          </View>
          
          <ButtonRegister
              onPress={() => registerPost()}
            >
              <ButtonText>Publicar Post</ButtonText>
          </ButtonRegister>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    borderColor: '#8E88D0',    
    backgroundColor: '#FFF',
  },
  label: {
    fontFamily: 'Bold',
    color: '#3B2C33'
  },
  itemSelected: {
    backgroundColor: '#8E88D0',
    borderWidth: 2,
    borderColor: '#8E88D0',    
  },
  labelSelected: {
    color: '#FFF',
    fontFamily: 'Bold',
  },
})

export default CreatePost;