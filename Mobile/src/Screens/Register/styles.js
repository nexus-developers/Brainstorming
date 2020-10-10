import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`;

export const InternContainer = styled.View`
  margin: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ImagesView = styled.View`
  flex-direction: row;
  margin-top: 15%;
`

export const Image = styled.Image`
  width: 50%;
  height: 210px;
`

export const Title = styled.Text`
  text-align: center;
  font-family: 'Bold';
  font-size: 24px;
  margin-top: 20px;
  color: #3B2C33;
`

export const Comment = styled.Text`
  text-align: center;
  font-family: 'Light';
  margin-top: 40px;
  font-size: 12px;
  width: 60%;
  color: #3B2C33;
`

export const ViewButton = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const ButtonRegister = styled.TouchableOpacity`
  border-width: 1px;
  align-self: center;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 40px;
  background-color: #66A3FE;
  border-color: #66A3FE;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Bold';
  color: #FFF;
`

export const BackButton = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 40px;
  margin-bottom:20px;
  padding: 10px;
`

export const Comment1 = styled.Text`
  text-align: center;
  font-family: 'Light';
  font-size: 14px;
  width: 60%;
  color: #3B2C33;
`