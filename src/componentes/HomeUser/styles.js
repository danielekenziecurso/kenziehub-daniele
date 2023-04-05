import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 720px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 36px;

  background-color: var(--grey-4);
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    max-width: 1440px;
    height: 72px;

    margin: 0 auto;
    margin-top: 40px;

    border-bottom: 0.1px solid var(--grey-2);
  }
  img {
    width: 145px;
    height: 20px;
  }
  button {
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
  .userInformation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    max-width: 1440px;
    height: 72px;
    margin: 0 auto;
    border-bottom: 0.1px solid var(--grey-2);
  }
  .userInformation > h3 {
    color: var(--grey-0);
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    margin-top: -25px;
  }
  .userInformation > P {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    margin-top: -25px;
  }
  .information {
    display: flex;
    flex-direction: column;
  }
  .information > h2 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-left: 22px;
  }
  .information > p {
    color: var(--grey-1);
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 25px;
    margin-left: 22px;
  }
  @media (max-width: 450px) {
    header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 90px;
    }
    .userInformation {
      display: flex;
      flex-direction: column;
    }
    .userInformation > h3 {
        margin-left: 20px;
    }
    .userInformation > p {
        margin-left: 20px;
    }
  }
`;
