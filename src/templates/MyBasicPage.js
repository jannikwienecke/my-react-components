import React from "react";
import { Header } from "../../components/header/Header";
import { Navigation } from "../../components/navigation/Navigation";
import { ButtonPageNav } from "../../components/button/ButtonPageNav";
import { SUB_PAGES } from "../data";

export const NeueAuslagerung = ({ setType, type }) => {
  return (
    <>
      <HeaderElement setType={setType} type={type} />
    </>
  );
};

const HeaderElement = ({ setType, type }) => {
  return (
    <>
      <Header>Neue Einlagerung</Header>
      <Navigation>
        <ButtonPageNav onClick={() => setType(null)}>Zurück</ButtonPageNav>

        {SUB_PAGES.filter((page) => page.name !== type).map((page, index) => (
          <ButtonPageNav key={index} onClick={() => setType(page.name)}>
            {page.name}
          </ButtonPageNav>
        ))}
      </Navigation>
    </>
  );
};
