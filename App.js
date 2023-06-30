import {StatusBar} from 'expo-status-bar';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native'

const Post = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  `;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-rigth: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

const PostDate = styled.Text`
  font-size: 10px;
`

const PostDetails = styled.View`
  display: flex;
  flex-direction: colomn;
  justify-content: space-between;
`

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <StatusBar style="auto" />
      <Post>
        <PostImage
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
        />
        <PostDetails>
          <PostTitle>Hi</PostTitle>
          <PostDate>30/06/2023</PostDate>
        </PostDetails>
      </Post>
    </View>
  );
}
