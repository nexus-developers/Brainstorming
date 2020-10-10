import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const InternContainer = styled.View`
  margin: 0 20px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  font-family: 'Bold';
  color: #3B2C33;
`
export const FormView = styled.View`
  margin-top: 60px;
`
export const FormTitle = styled.Text`
  font-family: 'Bold';
  font-size: 16px;
  margin-bottom: 10px;
  color: #3B2C33;
`
export const Input = styled.TextInput`
  background-color: #F7F8FA;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Regular';
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