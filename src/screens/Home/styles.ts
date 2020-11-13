import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000000;
  padding-top: ${Platform.OS === "android"
    ? Constants.statusBarHeight - 5
    : 0}px;
`;

export const Scroll = styled.ScrollView``;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 21px;
`;

export const List = styled.FlatList`
  flex-grow: 1;
`;

export const StoriesList = styled.FlatList`
  flex-direction: row;
`;

export const ListContainer = styled.View``;

export const StoriesContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 5px;
  margin-top: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
