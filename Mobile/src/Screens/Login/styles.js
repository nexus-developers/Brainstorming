import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-end;
`;

export const ScreenTitleCont = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  /* margin-bottom: 30px; */
`;

export const ScreenTitle = styled.Text`
  color: #3B2C33;
  font-size: 18px;
  font-family: 'Bold';
  margin-left: 5px;
`;

export const ContentCont = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
`;

export const TitleCont = styled.View`
  width: 100%;
  height: 15%;
  justify-content: center;
`;

export const TitleText = styled.Text`
  width: 90%;
  color: #3B2C33;
  font-size: 25px;
  font-family: 'Bold';
  margin-top: 20px;
  align-self: center;
`;

export const SubtitleText = styled.Text`
  width: 90%;
  color: #c9c9c9;
  font-size: 14px;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 50px;
  font-family: 'Bold';
`;

export const InputsCont = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
`;

export const Input1 = styled.View`
  width: 100%;
`;

export const Input2 = styled.View`
  width: 100%;
`;

export const InputText = styled.Text`
  width: 90%;
  align-self: center;
  color: #3B2C33;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Semibold';
`;

export const Input = styled.TextInput`
  width: 90%;
  align-self: center;
  background-color: #F7F8FA;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Regular';
`;

export const LoginBtnCont = styled.View`
  width: 100%;
  height: 35%;
  align-items: center;
  justify-content: flex-start;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  margin-top: 20px;
  background-color: #66A3FE;
`;

export const BtnText = styled.Text`
  color: #FFF;
  font-size: 20px;
  text-align: center;
  font-family: 'Semibold';
`;

export const LastCont = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const RegisterText = styled.Text`
  color: #c9c9c9;
  font-family: 'Regular';
`;

export const RegisterBtn = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const RegisterTextBtn = styled.Text`
  color: #3B2C33;
  font-family: 'Regular';
`;

export const WellcomeBtn = styled.TouchableOpacity``;

export const WellcomeTextBtn = styled.Text`
    text-align: center;
  font-family: 'Regular';
  font-size: 14px;
  /* width: 60%; */
  color: #3B2C33;
`;