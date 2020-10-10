import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;
export const InternContainer = styled.View`
  align-items: center;
`
export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 20px;
  font-family: 'Bold';
  color: #3B2C33;
`
export const Comment = styled.Text`
  text-align: center;
  font-family: 'Light';
  font-size: 14px;
  width: 80%;
  color: #3B2C33;
  margin-top: 20px;
`
export const Card = styled.TouchableOpacity`
  margin-right: 20px;
  border-radius: 10px;
  padding: 25px;
  margin: 60px 20px 15px 10px;
  align-items: center;
  flex-direction: column;
  background-color: #FFF;
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