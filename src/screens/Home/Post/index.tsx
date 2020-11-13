import React, { useCallback, useState } from "react";
import { Posts } from "../../../utils";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import * as S from "./styles";
import { View } from "react-native";

interface Props {
  name: string;
  posts: Posts;
  profilePhoto: string;
  index: number;
}

interface ItemProps {
  item: Posts;
}

const Post: React.FC<Props> = ({ name, posts, profilePhoto, index }) => {
  const Item = ({ item }: ItemProps) => {
    const [selected, setSelected] = useState<
      "likes" | "comments" | undefined
    >();

    const selectHeart = useCallback(() => {
      setSelected((prevState) => (prevState === "likes" ? undefined : "likes"));
    }, [selected]);

    const selectComments = useCallback(() => {
      setSelected((prevState) =>
        prevState === "comments" ? undefined : "comments"
      );
    }, [selected]);

    return (
      <S.Container>
        <S.Images pagingEnabled>
          {item.post.map((item: string, index: number) => (
            <S.Image key={index} source={{ uri: item }} />
          ))}
        </S.Images>
        <S.TopContainer>
          <S.ProfilePhoto
            source={{
              uri: profilePhoto,
            }}
          />
          <S.Name>{name}</S.Name>
        </S.TopContainer>
        <S.BottomContainer>
          <S.IconsContainer>
            <S.Button
              delayPressIn={1}
              style={{
                backgroundColor: selected
                  ? selected === "likes"
                    ? "rgba(96, 91, 116, 0.4)"
                    : ""
                  : "rgba(96, 91, 116, 0.1)",
              }}
              onPress={selectHeart}
            >
              <AntDesign name="heart" size={18} color="#FFF" />
              <S.SmallText>{item.likes}</S.SmallText>
            </S.Button>
            <S.Button
              delayPressIn={1}
              style={{
                backgroundColor: selected
                  ? selected === "comments"
                    ? "rgba(96, 91, 116, 0.4)"
                    : ""
                  : "rgba(96, 91, 116, 0.1)",
              }}
              onPress={selectComments}
            >
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="#FFF"
              />
              <S.SmallText>{item.comments}</S.SmallText>
            </S.Button>
            <S.Button>
              <Entypo name="direction" size={18} color="#FFF" />
              <View />
            </S.Button>
          </S.IconsContainer>
          <Feather name="bookmark" size={24} color="#FFF" />
        </S.BottomContainer>
      </S.Container>
    );
  };

  return (
    <S.PostsContainer>
      <Item item={posts} />
    </S.PostsContainer>
  );
};

export default Post;
