import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;

  font-weight: 500;
  font-size: 18px;
  color: var(--accent);

  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: 5px;

  cursor: pointer;
  box-shadow: var(--main-shadow);

  transition: all 300ms ease-in-out;

  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    color: var(--bg);
    background-color: var(--accent);
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
