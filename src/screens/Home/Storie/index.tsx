import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

interface Props {
  createStory?: boolean;
  label?: string;
  photo?: string;
  profilePhoto?: string;
  haveStories?: boolean;
}

const Storie: React.FC<Props> = ({
  createStory,
  label,
  photo,
  profilePhoto,
  haveStories,
}) => {
  if (createStory) {
    return (
      <S.CreateContainer>
        <S.Circle>
          <AntDesign name="plus" size={18} color="#FFFF" />
        </S.Circle>
        <S.Label>My Story</S.Label>
      </S.CreateContainer>
    );
  }

  return (
    <S.Container>
      <S.StorieCircle stories={haveStories}>
        <S.Image source={{ uri: profilePhoto }} />
      </S.StorieCircle>

      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default Storie;
