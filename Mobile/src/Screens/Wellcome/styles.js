import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const ScreenTitleCont = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  flex-direction: row;
`;

export const ScreenTitle = styled.Text`
  color: #3B2C33;
  font-size: 18px;
  font-family: 'Bold';
  margin-left: 5px;
  margin-top: 5px;
`;

export const ImageCont = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 75%;
`;

export const ContentCont = styled.View`
  width: 100%;
  height: 40%;
`;

export const TitleCont = styled.View`
  width: 90%;
  height: 25%;
  align-self: center;
`;

export const TitleText = styled.Text`
  color: #3B2C33;
  font-size: 22px;
  text-align: center;
  font-family: 'Bold';
  margin-top: 5px;
`;

export const SubtitleText = styled.Text`
  color: #66A3FE;
  font-size: 22px;
  align-self: center;
  text-align: center;
  font-weight: 700;
  font-family: 'Light';
`;

export const BtnsCont = styled.View`
  flex-direction: row;
  width: 100%;
  height: 75%;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 40%;
  height: 20%;
  border-radius: 30px;
  background-color: #66A3FE;
  align-items: center;
  justify-content: center;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 40%;
  height: 20%;
  border-radius: 30px;
  border-color: #3B2C33;
  border-width: 1.5px;
  align-items: center;
  justify-content: center;
`;

export const BtnText1 = styled.Text`
  color: #FFF;
  font-size: 18px;
  align-self: center;
  text-align: center;
  font-weight: 700;
  font-family: 'Light';
`;

export const BtnText2 = styled.Text`
  color: #3B2C33;
  font-size: 18px;
  align-self: center;
  text-align: center;
  font-weight: 700;
  font-family: 'Light';
`;
