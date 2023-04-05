import styled from "styled-components";

export const StyledLogin = styled.main`
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
  form {
    width: 320px;
    height: 402.69px;
    align-items: center;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin: 0 auto;
    padding: 0 10px;
    gap: 20px;
    overflow: auto;
  }
  .boxLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 17.59px;
  }
  h3 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 22px;
  }
  label {
    color: var(--grey-0);
    font-size: 13px;
    font-weight: 400;
    padding-left: 3px;
  }
  .parag{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    margin-top: 20px;
  }
  form > button {
    background-color: var(--grey-1);
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
