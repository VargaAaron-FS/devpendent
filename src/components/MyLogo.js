import styled from "styled-components";

export default function MyLogo() {
  return (
    <LogoContainer>
      <Link href="/">
        <H1>
          Dev<span style={{ fontStyle: "normal" }}>pendent</span>
          <span
            style={{
              color: "#ff4500",
              fontStyle: "normal",
              fontFamily: "Fira Code, monospace",
            }}
          >
            ()
          </span>
        </H1>
      </Link>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  color: #333;
  font-style: italic;
`;

const Link = styled.a`
  text-decoration: none;
`;
