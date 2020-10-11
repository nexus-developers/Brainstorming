import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const ProfileCont = styled.View`
  width: 100%;
`;

export const ImgCont = styled.View`
  width: 100%;
  align-items: center;
`;

export const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const UserName = styled.Text`
  align-self: center;
  margin-top: 25px;
  color: #000;
  font-size: 22px;
  font-family: 'Bold';
`;

export const AreaDescription = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #000;
  font-size: 13px;
  font-family: 'Regular';
`;

export const StatisticsOutterCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const StatisticsInnerCont = styled.View`
  width: 33%;
  margin-top: 40px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Statistic = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Bold';
`;

export const FieldDescription = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'Light'
`;
