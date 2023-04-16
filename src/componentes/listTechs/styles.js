import styled from "styled-components";

export const StyledList = styled.section`
  width: 100vw;
  max-width: 670px;

  border-radius: 4px;
  padding: 22px 0;
  margin-top: 16px;

  background-color: var(--grey-3);

  overflow: auto;

  ul > li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 650px;
    height: 49px;

    margin: 0 auto;
    margin: 10px;

    gap: 463px;

    background-color: var(--grey-4);
    border-radius: 4px;

    list-style-type: none;
  }
  li > h3 {
    color: var(--grey-0);
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    padding-left: 16px;
  }
  li > p {
    color: var(--grey-1);
    font-size: 13px;
    font-weight: 600;
    line-height: 23px;
    padding-right: 16px;
  }`;