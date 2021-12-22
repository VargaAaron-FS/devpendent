import styled from "styled-components";

export default function DevResourceListCard() {
  return (
    <ListContainer>
      <H1>Development Resources</H1>
      <ExcerptPar>List goes here.</ExcerptPar>
    </ListContainer>
  );
}

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: #333;
  border-radius: .25rem;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .25);
`;

const H1 = styled.h1`
  color: #eee;
`;

const ExcerptPar = styled.p`
  color: #eee;
`;
