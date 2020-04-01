import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonElement = ({ arrBtns, formFunc }) => {
  if (!arrBtns) return <></>;

  console.log("variant", arrBtns);

  const btns = arrBtns.btns.map((btn, index) => (
    <Btn key={index}>
      <Button
        variant={btn.variant}
        onClick={btn.isSubmitFunc ? formFunc.handleSubmit : btn.func}
        size={btn.size}
      >
        {btn.text ? btn.text : "Bestätigen"}
      </Button>
    </Btn>
  ));

  return (
    <BtnContainer justifyContent={arrBtns.justifyContent}>{btns}</BtnContainer>
  );
};

export default ButtonElement;

const BtnContainer = styled.div`
  margin-top: .8rem;
  /* margin-left: 23.8rem; */

  
  display: flex;
  justify-content: flex-start;

  ${({ justifyContent }) =>
    justifyContent &&
    `
    justify-content: ${justifyContent}
  `}

  /* ${({ position }) =>
    position &&
    `
  `} */
`;

const Btn = styled.div`
  margin: 0 0.2rem;
`;
