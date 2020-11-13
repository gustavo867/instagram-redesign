import React, { useEffect } from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import data, { Data, Posts } from "../../utils";
import Storie from "./Storie";
import Post from "./Post";
import { LogBox } from "react-native";
import posts from "../../utils/posts";

interface ItemProps {
  item: Posts;
  index: number;
}

const Home: React.FC = () => {
  const Item = ({ item, index }: ItemProps) => {
    return (
      <S.ListContainer
        style={{
          marginTop: item.id !== 1 ? -20 : 0,
          marginBottom: index === posts.length - 1 ? 80 : 0,
        }}
      >
        <Post
          name={item.name}
          posts={item}
          profilePhoto={item.profilePhoto}
          index={index}
        />
      </S.ListContainer>
    );
  };

  const StorieItem = (item: Data) => {
    const stories = item.stories.length !== 0 ? true : false;

    return (
      <Storie
        createStory={false}
        label={item.name}
        profilePhoto={item.profilePhotoUrl}
        haveStories={stories}
      />
    );
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists"]);
  }, []);

  return (
    <S.Container>
      <S.Scroll showsVerticalScrollIndicator={false}>
        <Header />
        <S.StoriesContainer>
          <Storie createStory={true} />
          <S.StoriesList
            data={data}
            renderItem={({ item, index }: any) => <StorieItem {...item} />}
            keyExtractor={(item: any) => item.id.toString().trim()}
            contentContainerStyle={{
              flexDirection: "row",
            }}
          />
        </S.StoriesContainer>
        <S.List
          data={posts}
          renderItem={({ item, index }: any) => (
            <Item item={item} index={index} />
          )}
          keyExtractor={(item: any) => item.id.toString().trim()}
          style={{
            marginTop: 20,
          }}
        />
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
