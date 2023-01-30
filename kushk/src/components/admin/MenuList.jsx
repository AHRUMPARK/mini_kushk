import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledTable = styled.table`
  border: solid 2px blue;
`
const StyledTd = styled.td`
  border: solid 1px blue;
  background-color: #dfdfdf;
`;

// 메뉴 DB 조회 출력 컴포넌트 
export default function MenuList() {
    let [menuList, setMenuList] = useState([]);
    
    useEffect(() => {
      axios.get('http://localhost:3001/getMenuList')
      .then((response) => {
        setMenuList(response.data)
      })
      .catch(err => console.log(err))
      ;
    }, []);

   const menuListArr = menuList.map((el, index) => {
    return (
      <tr key={index}>
        <StyledTd>{el.menu_index}</StyledTd>
        <StyledTd>{el.menu_id}</StyledTd>
        <StyledTd>{el.menu_price}</StyledTd>
        <StyledTd>{el.menu_img}</StyledTd>
      </tr>
    );
   })
  return (
    <>
      <h3>DB MenuList</h3>
      <StyledTable>
        <tr>
          <th>종류</th>
          <th>상품명</th>
          <th>가격</th>
          <th>이미지 경로</th>
        </tr>
        {menuListArr}
      </StyledTable>
    </>
  );
}
