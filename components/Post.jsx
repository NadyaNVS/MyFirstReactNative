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
  flex-direction: colomn;
  justify-content: space-between;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
