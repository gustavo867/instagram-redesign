import React from "react";
import { Posts } from "../../../utils";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as S from "./styles";

interface Props {
  name: string;
  posts: Posts[];
  profilePhoto: string;
}

interface ItemProps {
  item: Posts;
  index: number;
}

const Post: React.FC<Props> = ({ name, posts, profilePhoto }) => {
  const Item = ({ item, index }: ItemProps) => {
    return (
      <S.Container>
        <S.Image source={{ uri: item.post[1] }} />
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
            <S.Button>
              <AntDesign name="heart" size={24} color="#FFF" />
            </S.Button>
          </S.IconsContainer>
          <Feather name="bookmark" size={24} color="#FFF" />
        </S.BottomContainer>
      </S.Container>
    );
  };

  return (
    <S.PostsContainer>
      <S.List
        data={posts}
        renderItem={({ item, index }: any) => (
          <Item item={item} index={index} />
        )}
        keyExtractor={(item: any) => item.id.toString().trim()}
        contentContainerStyle={{
          margin: 0,
        }}
      />
    </S.PostsContainer>
  );
};

export default Post;
