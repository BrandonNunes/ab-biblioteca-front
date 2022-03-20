import styled from "styled-components";
import colors from "../../utils/colors";

export const TableBooks = styled.table`
    width: 95%;
    border: 1px solid ${colors.primary_orange};
   // height: 100%;
`
export const TableBooksHeader = styled.thead`
    background-color: #f1f1f1;
    color: #000;

`
export const TableBooksTh = styled.th`
    border: 1px solid ${colors.primary_orange};

`
export const TableBooksRows = styled.tr`
    border: 1px solid ${colors.primary_orange};

`
export const TableBooksTbody = styled.tbody`
width: 100%;
height: 100%;


`
export const TableBooksTd = styled.td`
    font-size: 12px;
    color: #000;
    text-align: center;
    border-left: 1px solid ${colors.primary_orange};
    border-right: 1px solid ${colors.primary_orange};
    background-color: #fff;
    height: 30px;
`
export const BoxActions = styled.span` 
    max-width: 200px;
    display: flex;
    justify-content: center;
    gap: 10px;
`