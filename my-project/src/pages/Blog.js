import styled from "styled-components";

export default function Blog() {
  return (
    <BlogSection>
      Blog posts go here!
    </BlogSection>
  );
}

const BlogSection = styled.section`
  display: flex;
  padding: 1rem 2rem;
  background: #333;
  color: #eee;
`;
