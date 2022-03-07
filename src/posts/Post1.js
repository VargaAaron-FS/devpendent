import styled from "styled-components";

export default function Post1() {
  return (
    <PostContainer>
      Post 1 goes here!
    </PostContainer>
  );
}

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
`;
