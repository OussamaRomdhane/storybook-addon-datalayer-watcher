import { styled } from "storybook/theming";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.background.content};
  z-index: 9999999;
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 0 12px;

  height: 40px;
  width: 100%;
`;
