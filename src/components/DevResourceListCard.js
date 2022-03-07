import styled from "styled-components";

export default function DevResourceListCard() {
  return (
    <ListContainer>
      <H2>Web Development Resources</H2>
      <List>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>
    </ListContainer>
  );
}

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: #333;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.25);
`;

const H2 = styled.h2`
  color: #eee;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const List = styled.ul`
  color: #eee;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ListItem = styled.li`
  color: #eee;
  margin: 0;
`;
