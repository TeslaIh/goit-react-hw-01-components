import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  width: fit-content;
  overflow: hidden;
  padding: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 75px;
`;
export const Image = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid pink;
  border-radius: 50%;
  margin-right: 40px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: bold;
`;

export const Online = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => {
    return isOnline ? "green" : "red";
  }};
  border-radius: 50%;
  margin-right: 20px;
`;