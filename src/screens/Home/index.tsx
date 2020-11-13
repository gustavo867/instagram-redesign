import React, { useEffect } from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import data, { Data } from "../../utils";
import Storie from "./Storie";
import Post from "./Post";
import { LogBox } from "react-native";

interface ItemProps {
  item: Data;
  index: number;
}

const Home: React.FC = () => {
  const Item = ({ item, index }: ItemProps) => {
    return (
      <S.ListContainer
        style={{
          marginTop: index !== 0 ? -20 : 0,
          marginBottom: index === data.length - 1 ? 80 : 0,
        }}
      >
        <Post
          name={item.name}
          posts={item.posts}
          profilePhoto={item.profilePhotoUrl}
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
      <S.Scroll>
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
          data={data}
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
