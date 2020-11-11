import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

interface Props {
  createStory?: boolean;
  label?: string;
  photo?: string;
  profilePhoto?: string;
}

const Storie: React.FC<Props> = ({
  createStory,
  label,
  photo,
  profilePhoto,
}) => {
  if (createStory) {
    return (
      <S.CreateContainer>
        <S.Circle>
          <AntDesign name="plus" size={18} color="#FFFF" />
        </S.Circle>
        <S.Label>Create Story</S.Label>
      </S.CreateContainer>
    );
  }

  return (
    <S.Container>
      <Text>{label}</Text>
    </S.Container>
  );
};

export default Storie;
