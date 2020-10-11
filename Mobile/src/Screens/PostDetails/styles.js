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
  margin-bottom: 30px;
`;

export const CreationDate = styled.Text`
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

export const CommentsCont = styled.View`
  width: 90%;
  align-self: center;
`;

export const CommentsTitle = styled.Text`
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #CACACA;
  font-family: 'Regular';
`;

export const InputTitle = styled.Text`
  color: #3B2C33;
  font-size: 16px;
  font-family: 'Regular';
`;

export const CommentInput = styled.TextInput`
  background-color: #F7F8FA;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Regular';
`;

export const SubmitCommentBtn = styled.TouchableOpacity`
  align-self: center;
  background-color: #66A3FE;
  border-radius: 25;
  margin-bottom: 30px;
`;

export const SubmitText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: 'Regular';
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const FlatlistCard = styled.View`
  width: 89%;
  background-color: #F7F8FA;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const UserImg = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #FDC75B
`;