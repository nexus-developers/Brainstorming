import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: #FFF;
`;

export const BackBtnCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackBtn = styled.TouchableOpacity`
  padding-left: 20px;
  padding-top: 30px;
`;

export const OptionsBtn = styled.TouchableOpacity`

`;

export const PostTitle = styled.Text`
  align-self: center;
  font-size: 22px;
  font-family: 'Bold';
`;

export const UserName = styled.Text`
  align-self: center;
  font-size: 16px;
  font-family: 'Light';
  margin-top: 5px;
  margin-bottom: 50px;
`;

export const CreationDate = styled.Text`
  align-self: center;
  font-size: 14px;
  font-family: 'Light';
`;

export const Description = styled.Text`
  width: 90%;
  align-self: center;
  margin-top: 10px;
  font-family: 'Regular';
  font-size: 14px;
  /* text-align: center; */
`;

export const TagCard = styled.View`
  border-width: 1px;
  border-radius: 5px;
  border-color: #FDC75B;
  background-color: #FDC75B;
`;

export const TagText = styled.Text`
  padding: 5px;
  color: white;
`;