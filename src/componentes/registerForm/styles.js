import styled from "styled-components";

export const StyledRegister = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 36px;

  background-color: var(--grey-4);

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 113.4px;

    align-items: center;

    width: 300px;

    margin: 0 auto;
    margin-top: 40px;
  }
  header > img {
    width: 145px;
    height: 20px;
  }
  header > button {
    background-color: var(--grey-3);
    color: var(--grey-0);

    border-radius: 4px;
    border: none;

    width: 68px;
    height: 41px;

    font-size: 12px;
    font-weight: 600;
    line-height: 29px;

    align-items: center;
  }
  form {
    width: 320px;
    height: 709.96px;
    align-items: center;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin: 0 auto;
    padding: 0 10px;
    gap: 20px;
    overflow: auto;
  }
  .boxToCreate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 17.59px;
  }
  .boxToCreate > h3 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 22px;
  }
  .boxToCreate > p {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
  }
  label {
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
  }
  .boxselect > p {
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
    margin-top: 10px;
  }
  select {
    width: 300px;
    height: 48px;
    gap: 10px;
    padding-left: 16px;
    color: var(--grey-1);
    background-color: var(--grey-2);
    box-sizing: border-box;
    border-radius: 4px;
    border: 1.2182px solid var(--grey-2);
    margin-top: 10px;
  }
  form > button {
    background-color: var(--Color-primary-Negative);
    color: var(--grey-0);
    border: 1.2182px solid var(--Color-primary-Negative);
    border-radius: 4px;
    width: 300px;
    height: 48px;
    margin-top: 20px;
    :hover {
    background-color: var(--Color-primary);
    border: 1.2182px solid var(--Color-primary-Focus);
  }
  }
`;
