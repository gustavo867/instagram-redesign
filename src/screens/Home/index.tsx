import React from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import data, { Data } from "../../utils";
import Storie from "./Storie";

const Home: React.FC = () => {
  const Item = (item: Data) => {
    return (
      <S.ListContainer>
        <S.Title>{item.name}</S.Title>
      </S.ListContainer>
    );
  };

  return (
    <S.Container>
      <Header />
      <S.StoriesContainer>
        <Storie createStory={true} />
      </S.StoriesContainer>
      <S.List
        data={data}
        renderItem={({ item }: any) => <Item {...item} />}
        keyExtractor={(item: any) => item.id.toString().trim()}
      />
    </S.Container>
  );
};

export default Home;
