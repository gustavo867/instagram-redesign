import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  padding-top: 54px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  width: ${width}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 21px;
`;

export const List = styled.FlatList`
  flex-grow: 1;
`;

export const ListContainer = styled.View``;

export const StoriesContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
`;
