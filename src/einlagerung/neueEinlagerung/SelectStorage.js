import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { SelectBrückenStorage } from "./SelectBrückenStorage";
import { SelectStorageRow } from "./SelectStorageRow";
import { mockAPI, copy } from "../../functions/utils";

const SelectStorage = (props) => {
  const [choise, setChoise] = useState(null);
  const [showStorageOptions, setShowStorageOptions] = useState(null);
  const [openRows, setOpenRows] = useState();
  const [filterdRows, setFilteredRows] = useState();
  const [selectedRows, setSelelectedRows] = useState(null);

  const setChoise_ = (index) => {
    setChoise(index);
    setTimeout(() => {
      console.log("set true");

      setShowStorageOptions(true);
    }, 500);
  };

  const goBack = () => {
    setChoise(null);
    setShowStorageOptions(null);
  };

  return (
    <>
      <OptionWrapper choise={choise}>
        <StorageOption onClick={() => setChoise_(1)} index={1} choise={choise}>
          Brückenlager
        </StorageOption>
        <StorageOption onClick={() => setChoise_(2)} index={2} choise={choise}>
          Lager 2
        </StorageOption>
        <StorageOption onClick={() => setChoise_(3)} index={3} choise={choise}>
          Lager 3
        </StorageOption>
        <StorageOption onClick={() => setChoise_(4)} index={4} choise={choise}>
          Lager 4
        </StorageOption>
      </OptionWrapper>

      {showStorageOptions && (
        <>
          {choise === 1 && <SelectBrückenStorage {...props} />}
          {choise > 1 && (
            <SelectStorageRow
              goBack={goBack}
              {...props}
              selectedStorage={choise}
              selectedRows={selectedRows}
              setSelelectedRows={setSelelectedRows}
            />
          )}
        </>
      )}
    </>
  );
};
export default SelectStorage;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 3rem;

  transition: 1s;
  ${({ choise }) =>
    choise &&
    `
    margin-top: 0;
    height: 0;
  `}
`;

const keyFrame = keyframes`
  0% {
    opacity: .7;
    visibility: visible;
    height: 100%;
    border: none;
    
  }

  100% {
    transform: translate(0px, -300px);
    visibility: hidden;
    opacity:0;
    height: 0;
  }

  `;

const StorageOption = styled.div`
  width: 40%;
  border: 0.5px solid #c8c8c8;
  padding: 2rem;
  margin: 1rem 0 1rem 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.1);
  transition: 1s;

  ${({ choise, index }) =>
    choise &&
    css`
      animation: ${keyFrame} 1s ease-in-out forwards;
      animation-iteration-count: 1;
    `} :hover {
    box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.2);
    font-size: 1.25rem;
    transform: scale(1.05);
    border: 1px solid #3f51b5;
  }
`;

// ${({ choise, index }) =>
//   choise &&
//   choise === index &&
//   `
//       opacity: 0;
//       width: 0px;
//       height: 0px;
//       margin: 0px;
//       padding: 0px;

// `}
