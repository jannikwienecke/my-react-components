import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonElement = ({ arrBtns, formFunc, scheme }) => {
  if (!arrBtns) return <></>;

  const btns = arrBtns.btns.map((btn, index) => {
    return (
      <Btn key={index}>
        <Button
          variant={btn.variant}
          // onClick={!btn.isSubmitFunc ? btn.func.func : formFunc.handleSubmit}
          onClick={btn.isSubmitFunc ? formFunc.handleSubmit : btn.func}
          size={btn.size}
          disabled={btn.disabled}
        >
          {btn.text ? btn.text : "Bestätigen"}
        </Button>
      </Btn>
    );
  });

  return (
    <BtnContainer justifyContent={arrBtns.justifyContent}>{btns}</BtnContainer>
  );
};

export default ButtonElement;

const BtnContainer = styled.div`
  margin-top: 0.8rem;
  /* margin-left: 23.8rem; */

  display: flex;
  justify-content: flex-start;

  ${({ justifyContent }) =>
    justifyContent &&
    `
    justify-content: ${justifyContent}
  `}
`;

const Btn = styled.div`
  margin: 0 0.2rem;
`;
