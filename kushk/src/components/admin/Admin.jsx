import { useRef } from 'react';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledTable = styled.table`
  border: solid 2px blue;
`;
const StyledTd = styled.td`
  border: solid 1px blue;
  background-color: #dfdfdf;
`;

export default function Admin({ menuList }) {
  const Mindex = useRef();
  const Mid = useRef();
  const Mprice = useRef();
  const Mtext = useRef();
  const form_info = useRef();

  // 메뉴 추가
  function addMenu() {
    axios
      .post('http://49.50.172.207:3001/addMenu', {
        index: Mindex.current.value,
        id: Mid.current.value,
        price: Mprice.current.value,
        text: Mtext.current.value,
      })
      .then((response) => {
        if (response.data === true) {
          alert('데이터 추가 성공');
        } else {
          alert('데이터 추가 실패, 뭐가 잘못됬나 알아보기');
        }
      });
  }
  //'http://localhost:3001/selectMenu'
  // 로컬 url > 서버 요청 url로 변경
  // 메뉴 조회
  function SelectMenu() {
    console.log('조회 요청');
    axios
      .post('http://49.50.172.207:3001/selectMenu', {
        id: Mid.current.value,
      })
      .then((response) => {
        if (response.data === undefined) {
          alert('데이터가 없습니다.');
        } else {
          console.log(response.data);
          Mindex.current.value = response.data.menu_index;
          Mid.current.value = response.data.menu_id;
          Mprice.current.value = response.data.menu_price;
          Mtext.current.value = response.data.menu_text;
        }
      });
  }

  // 메뉴 수정
  function menuUpdate() {
    console.log('수정 요청');
    axios
      .patch('http://49.50.172.207:3001/menuUpdate', {
        index: Mindex.current.value,
        id: Mid.current.value,
        price: Mprice.current.value,
        text: Mtext.current.value,
      })
      .then((response) => {
        if (response.data === true) {
          alert('수정 완료');
        } else {
          alert('수정 실패');
        }
      });
  }
  // 메뉴 삭제
  function menuDelete() {
    console.log('삭제 요청');
    axios
      .delete('http://49.50.172.207:3001/menuDelete', {
        data: { id: Mid.current.value },
      })
      .then((response) => {
        if (response.data === true) {
          alert('메뉴 삭제 완료');
        } else {
          alert('삭제 실패');
        }
      });
  }
  return (
    <>
      <h3>관리자 페이지</h3>
      <p>사용 메뉴얼 : 메뉴 조회 후 수정, 삭제 가능 * 아이디는 수정 안됨 </p>
      <form ref={form_info}>
        <input ref={Mindex} name="index" type="text" placeholder="메뉴 품목" />
        <input ref={Mid} name="id" type="text" placeholder="메뉴 이름" />
        <input ref={Mprice} name="price" type="text" placeholder="메뉴 가격" />
        <input ref={Mtext} name="text" type="text" placeholder="메뉴 설명" />
        <button
          type="button"
          onClick={() => {
            addMenu();
          }}
        >
          메뉴 추가
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            SelectMenu();
          }}
        >
          메뉴 조회
        </button>
        <button
          type="button"
          onClick={() => {
            menuUpdate();
          }}
        >
          메뉴 수정
        </button>
        <button
          type="button"
          onClick={() => {
            menuDelete();
          }}
        >
          메뉴 삭제
        </button>
      </form>
      <h3>DB MenuList</h3>
      <StyledTable>
        <tr>
          <th>종류</th>
          <th>상품명</th>
          <th>가격</th>
          <th>설명</th>
        </tr>

        {menuList.map((menu) => (
          <tr>
            <StyledTd>{menu.menu_index}</StyledTd>
            <StyledTd>{menu.menu_id}</StyledTd>
            <StyledTd>{menu.menu_price}</StyledTd>
            <StyledTd>{menu.menu_text}</StyledTd>
          </tr>
        ))}
      </StyledTable>
    </>
  );
}
