import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const PostsContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  width: ${width}px;
  height: ${height * 0.6}px;
  background-color: #fff;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  overflow: hidden;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 30px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  margin: 0;
  position: absolute;
  width: ${width}px;
  height: ${height * 0.6}px;
`;

export const Images = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  position: absolute;
  width: ${width}px;
  height: ${height * 0.6}px;
`;

export const Image = styled.Image`
  width: ${width}px;
  height: ${height * 0.6}px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 5px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70px;
  height: 50px;
  border-radius: 18px;
  padding-left: 5px;
`;

export const Name = styled.Text`
  color: #ffffffff;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-left: 5px;
`;

export const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const Circle = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(96, 91, 116, 0.3);
`;

export const SelectedCircle = styled.View`
  width: 20px;
  height: 6px;
  border-radius: 8px;
  background-color: #ffff;
`;
