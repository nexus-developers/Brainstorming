import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: #FFF;
`;

export const HeaderCont = styled.View`
  flex-direction: row;
  margin: 20px 15px 0;
  justify-content: space-between;
`;

export const ScreenTitle = styled.Text`
  color: #3B2C33;
  font-size: 18px;
  font-family: 'Bold';
  margin-left: 5px;
`;

export const User = styled.TouchableOpacity``
export const UserPhoto = styled.Image`
  height: 40px;
  width: 40px;
  border-width: 1px;
  border-radius: 50px;
`

export const CreatePostComponent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #F7F8FA;
  margin: 20px 20px 0;
  padding: 10px;
  border-radius: 10px;
`

export const Comment = styled.Text`
  font-family: 'Light';
  font-size: 13px;
  color: #3B2C33;
`
export const Title = styled.Text`
  font-family: 'Bold';
  font-size: 15px;
  color: #3B2C33;
`