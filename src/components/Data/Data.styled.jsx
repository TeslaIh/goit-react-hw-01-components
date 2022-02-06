import styled from "styled-components";

export const StatBlock = styled.section`
  display: block;
  width: fit-content;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Title = styled.h2`
  display: block;
  padding: 20px 0;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background-color: #fafafa;
  margin: 0px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0px;
`;

export const ListItem = styled.li`
  display: inline-block;
  background: linear-gradient(90deg, #b9deed, #efefef);
  width: 50px;
  padding: 10px;
  height: 40px;
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 20px;
`;

export const Percent = styled.span`
  display: block;
  font-size: 20px;
`;