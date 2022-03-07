import styled from "styled-components";

export default function PostCard(props) {
  return (
    <PostContainer>
      <PostPreviewImg src={props.postImgUrl} alt={props.postImgAlt} />
      <H2>{props.postTitle}</H2>
      <ExcerptPar>{props.postExcerpt}</ExcerptPar>
    </PostContainer>
  );
}

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: #eee;
  border-radius: .25rem;
  padding: 1rem 1rem 1.5rem 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .25);
  border: 2px solid #eee;
  &&:hover {
    border: 2px solid #ff4500;
    cursor: pointer;
  }
`;

const PostPreviewImg = styled.img`
  width: 100%;
  border-radius: .25rem;
`;

const H2 = styled.h2`
  color: #333;
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const ExcerptPar = styled.p`
  color: #333;
  margin: 0;
`;
