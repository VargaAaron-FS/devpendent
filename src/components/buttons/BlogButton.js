import styled from "styled-components";

export default function BlogButton(props) {
  return (
    <Button>
      {props.buttonTitle}
    </Button>
  );
}

const Button = styled.button`
  display: grid;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  grid-column: 1 / span 4;
  border: 2px solid #eee;
  border-radius: .25rem;
  color: #333;
  &:hover {
    background: #ff4500;
    color: #eee;
    border: 2px solid #ff4500;
  }
  @media (max-width: 1024px) {
    grid-column: 1 / span 2;
  }
  @media (max-width: 768px) {
    grid-column: 1 / span 1;
  }
`;
