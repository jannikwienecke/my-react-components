import React from "react";
import styled from "styled-components";
import { LayoutBase } from "./layout/LayoutBase";

export const MyLayout = ({ children }) => {
  return <LayoutBase width={75}>{children}</LayoutBase>;
};
