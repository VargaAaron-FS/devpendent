import styled from "styled-components";

export default function DesignResourceListCard() {
  return (
    <ListContainer>
      <H2>Design</H2>
      <ExcerptPar>List goes here.</ExcerptPar>
    </ListContainer>
  );
}

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: orangered;
  border-radius: 0.25rem;
  padding: 1rem 1rem 1.5rem 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
`;

const H2 = styled.h2`
  color: #eee;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const ExcerptPar = styled.p`
  color: #eee;
  margin: 0;
`;
