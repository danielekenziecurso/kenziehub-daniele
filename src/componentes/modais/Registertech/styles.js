import styled from "styled-components";

export const Modalregister = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  .modalBox {
    max-width: 300px;
    height: 290px;
    background-color: var(--grey-3);
    border-radius: 4px;
  }
  header {
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    padding: 7px;
    background-color: var(--grey-2);
    border-radius: 3.19783px 3.19783px 0px 0px;
  }
  header > h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
  }
  header > span {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
  }
  form {
    width: 280px;
  }
  form > Input {
    width: 280px;
    height: 39px;
    border: 1.2182px solid var(--grey-0);
    border-radius: 4px;
  }
  label {
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 2px;
  }
  select {
    width: 280px;
    height: 39px;
    padding: 0 13px 0 13px;
    gap: 9px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 3.21px;
    color: var(--grey-0);
    margin-top: 10px;
  }
  p {
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 2px;
    margin-top: 20px;
  }
  button {
    background-color: var(--Color-primary-Negative);
    color: var(--grey-0);
    border: 1.2182px solid var(--Color-primary-Negative);
    border-radius: 4px;
    width: 280px;
    height: 39px;
    margin-top: 20px;
    :hover {
    background-color: var(--Color-primary);
    border: 1.2182px solid var(--Color-primary-Focus);
  }
  }
`;
