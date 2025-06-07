import { styled } from "storybook/theming";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  margin: 12px;
  width: 100%;
  color: ${({ theme }) => theme.color.positive};
`;

export const EventItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const Counter = styled.span`
  padding: 0 8px;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.size.code};
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.lightest};
`;
