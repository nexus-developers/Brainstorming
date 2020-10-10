import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;
export const InternContainer = styled.View``

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 10px;
  font-family: 'Bold';
  color: #3B2C33;
`
export const Comment = styled.Text`
  text-align: center;
  font-family: 'Light';
  font-size: 14px;
  width: 100%;
  padding: 0 20px;
  color: #3B2C33;
  margin-top: 10px;
`
export const Card = styled.TouchableOpacity`
  margin-right: 20px;
  border-radius: 10px;
  padding: 25px;
  margin: 40px 20px 15px 10px;
  align-items: center;
  flex-direction: column;
  background-color: #FFF;
  /* border-width: 3px;
  border-color: #FDC75B; */
`
export const ImageCard = styled.Image`
  width: 120px;
  height: 180px;
`
export const Title2 = styled.Text`
  text-align: center;
  font-family: 'Bold';
  margin-top: 20px;
  color: #3B2C33;
`

export const FormTitle = styled.Text`
  font-family: 'Bold';
  font-size: 16px;
  margin: 20px 0 10px 10px;
  color: #3B2C33;
`

export const Input = styled.TextInput`
  background-color: #F7F8FA;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px;
  margin: 0 10px 10px;
  font-size: 16px;
  font-family: 'Regular';
`

export const ButtonRegister = styled.TouchableOpacity`
  border-width: 1px;
  align-self: center;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 40px 0 20px 0;
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