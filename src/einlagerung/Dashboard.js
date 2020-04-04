import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import { ButtonSelection } from "../components/button/ButtonSelection";
import { NeueEinlagerung } from "./neueEinlagerung/NeueEinlagerung";
import { OffeneEinlagerungen } from "./offeneEinlagerung/OffeneEinlagerungen";
import { AlleEinlagerungen } from "./alleEinlagerungen/AlleEinlagerungen";

import {
  SUB_PAGES,
  NEUE_EINLAGERUNG,
  OFFENE_EINLAGERUNGEN,
  ALLE_EINLAGERUNGEN,
} from "./data";

const COMPONENTS = {
  [NEUE_EINLAGERUNG.name]: NeueEinlagerung,
  [OFFENE_EINLAGERUNGEN.name]: OffeneEinlagerungen,
  [ALLE_EINLAGERUNGEN.name]: AlleEinlagerungen,
};

export const Dashboard = () => {
  const [type, setType] = useState(null);

  if (type) {
    const page = SUB_PAGES.find((page) => page.name === type);
    const Component = COMPONENTS[page.name];
    return <Component setType={setType} type={type} />;
  }
  return (
    <>
      <Header>Lager Einlagerung</Header>

      <DashboardWrapper>
        {SUB_PAGES.map((page, index) => (
          <ButtonSelection key={index} onClick={() => setType(page.name)}>
            {page.name}
          </ButtonSelection>
        ))}
      </DashboardWrapper>
    </>
  );
};

const DashboardWrapper = styled.div`
  margin-top: 3rem;
`;
