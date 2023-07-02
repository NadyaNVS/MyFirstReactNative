import React from 'react';
import styled from 'styled-components/native';

const PostView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const PostDate = styled.Text`
  font-size: 10px;
`;

const PostDetails = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }
  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

// export const Post = ({ title, imageUrl, createdAt }) => {
//   return (
//     <View>
//       <Image
//         source={{
//           uri: imageUrl,
//         }}
//         style={{ width: 200, height: 200 }}
//       />
//       <View>
//         <Text>{title}</Text>
//         <Text>{createdAt}</Text>
//       </View>
//     </View>
//   );
// };
