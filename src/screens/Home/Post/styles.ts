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
  padding: 20px;
  padding-bottom: 40px;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  margin: 0;
`;

export const Image = styled.Image`
  width: ${width}px;
  height: ${height * 0.6}px;
  z-index: -1;
  position: absolute;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 18px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const Name = styled.Text`
  color: #ffffffff;
  font-size: 17px;
`;

export const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
