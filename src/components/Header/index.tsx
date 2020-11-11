import React from "react";
import { Dimensions } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

import logo from "../../images/logo-black.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Button>
        <Feather name="settings" size={24} color="#FFF" />
      </Button>
      <Logo source={logo} resizeMode="contain" />
      <Button>
        <MaterialCommunityIcons name="email-outline" size={24} color="#FFF" />
      </Button>
    </Container>
  );
};

export const Logo = styled.Image`
  width: ${width * 0.3}px;
  height: ${height * 0.07}px;
`;

export const Button = styled.TouchableOpacity``;

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  width: ${width}px;
  flex-direction: row;
  padding-horizontal: 15px;
`;

export default Header;
