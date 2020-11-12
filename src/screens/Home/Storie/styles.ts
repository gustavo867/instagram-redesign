import styled from "styled-components/native";

interface Props {
  stories?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
`;

export const CreateContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
`;

export const Circle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-color: #ffff;
  border-width: 1.5px;
`;

export const StorieCircle = styled.TouchableOpacity`
  border-width: ${(props: Props) => (props.stories === true ? 2 : 0)}px;
  border-left-color: #d92f6c;
  border-right-color: #c12a5c;
  border-top-color: #b21ead;
  border-bottom-color: #ed8100;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 32px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
`;
