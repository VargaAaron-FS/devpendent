import styled from "styled-components";

export default function PostCard(props) {
  return (
    <PostContainer>
      <PostPreviewImg src={props.postImgUrl} alt={props.postImgAlt} />
      <H1>{props.postTitle}</H1>
      <ExcerptPar>{props.postExcerpt}</ExcerptPar>
    </PostContainer>
  );
}

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: #eee;
  border-radius: .25rem;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .25);
`;

const PostPreviewImg = styled.img`
  width: 100%;
  border-radius: .25rem;
`;

const H1 = styled.h1`
  color: #333;
`;

const ExcerptPar = styled.p`
  color: #333;
`;
