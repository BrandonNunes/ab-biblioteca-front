import styled from "styled-components"
import colors from "../../utils/colors"

export const Container = styled("main")`
  height: calc(100vh - 8rem);
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled("div")`
  height: 95%;
  width: 80%;
  background-color: #f1f1f1;
  border-radius: 8px;
  color: #fff;
  box-shadow: 2px 2px 3px 2px ${colors.primary_orange};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  position: relative;
  &::-webkit-scrollbar{
    display: none;
  }
`