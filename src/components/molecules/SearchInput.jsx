import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SbuttonQrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SbuttonQrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  text-align: center;
`;

const SbuttonQrapper = styled.div`
  padding-left: 8px;
`;
