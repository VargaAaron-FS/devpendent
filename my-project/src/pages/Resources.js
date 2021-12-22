import styled from "styled-components";

import DesignResourceListCard from "../components/DesignResourceListCard";
import DevResourceListCard from "../components/DevResourceListCard";

export default function Resources() {
  return (
    <ResourcesSection>
      <DesignResourceListCard />
      <DevResourceListCard />
    </ResourcesSection>
  );
}

const ResourcesSection = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
column-gap: 1rem;
row-gap: 1rem;
padding: 2rem;
background: #eee;
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
