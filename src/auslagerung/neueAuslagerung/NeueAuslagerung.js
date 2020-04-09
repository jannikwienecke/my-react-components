import React, { useEffect } from "react";
import { SUB_PAGES } from "../data";
import { useDispatch } from "react-redux";
import { fetchAuslagerungen } from "../store";
import { Parent } from "../../baseComponents/Parent";
import CreateTour from "../createTour/CreateTour";
export const NeueAuslagerung = ({ setType, type }) => {
  return (
    <>
      <Parent
        header={{
          name: "Neue Auslagerung",
          setType: setType,
          type: type,
          sub_pages: SUB_PAGES,
        }}
      />

      <CreateTour />
    </>
  );
};
