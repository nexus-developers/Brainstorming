import React, { useState } from 'react';
import { ScrollView, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { TagSelect } from 'react-native-tag-select'
import { useNavigation } from '@react-navigation/native'


import { 
  Container,
  InternContainer,
  Title,
  ButtonRegister,
  ButtonText
} from './styles';

const Tags = () => {
  const [ tags, setTags ] = useState([])
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

  return (
    <Container>
      <ScrollView>
        <InternContainer>
          <Title>Selecione as tags que mais fazem sentido para você e seu conhecimento:</Title>
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
            <ButtonRegister
              onPress={() => navigation.navigate('AreasRegister')}
            >
              <ButtonText>Próxima etapa</ButtonText>
            </ButtonRegister>
        </InternContainer>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    borderColor: '#FDC75B',    
    backgroundColor: '#FFF',
  },
  label: {
    fontFamily: 'Bold',
    color: '#3B2C33'
  },
  itemSelected: {
    backgroundColor: '#FDC75B',
    borderWidth: 2,
    borderColor: '#FDC75B',    
  },
  labelSelected: {
    color: '#FFF',
    fontFamily: 'Bold',
  },
})

export default Tags;