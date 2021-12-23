import styled from "styled-components";

import PostCard from "../components/PostCard";

import PostImage from "../images/computer-on-chair.jpg";

export default function Blog() {
  return (
    <BlogSection>
      <PostCard
        postTitle="Post Title"
        postExcerpt="This is where the post excerpt would go!"
        postImgUrl={PostImage}
        postImgAlt="Post Alt Image Description"
      />
      <PostCard
        postTitle="Post Title"
        postExcerpt="This is where the post excerpt would go!"
        postImgUrl={PostImage}
        postImgAlt="Post Alt Image Description"
      />
      <PostCard
        postTitle="Post Title"
        postExcerpt="This is where the post excerpt would go!"
        postImgUrl={PostImage}
        postImgAlt="Post Alt Image Description"
      />
      <PostCard
        postTitle="Post Title"
        postExcerpt="This is where the post excerpt would go!"
        postImgUrl={PostImage}
        postImgAlt="Post Alt Image Description"
      />
    </BlogSection>
  );
}

const BlogSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 2rem;
  background: #333;
  color: #eee;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const H2 = styled.h2`
  color: #eee;
`;
