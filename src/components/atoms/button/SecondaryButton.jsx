import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, teizo } = props;
  return <SButton onClick={teizo}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
  }
`;
