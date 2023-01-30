import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';
import axios from 'axios';
export default function Admin() {
  //   const [state, setState] = useState('이 값이');

  const Mindex = useRef();
  const Mid = useRef();
  const Mprice = useRef();
  const Mimg = useRef();
  const form_info = useRef();
  //   function indexChange() {
  //     console.log(Mindex.current.value);
  //     setState(Mindex.current.value);
  //   }

  function addMenu() {
    // let form = form_info.current;
    console.log(form_info.current);
    // let addData = {
    //   index: form.index.value,
    //   id: form.id.value,
    //   price: form.price.value,
    //   img: form.img.value,
    // };
    let addData = {
      index: Mindex.current.value,
      id: Mid.current.value,
      price: Mprice.current.value,
      img: Mimg.current.value,
    };
    console.log('데이터 보냈는디..ㅠㅠ');
    axios({
      method: 'post',
      url: '/addMenu',
      data: addData,
    }).then((response) => {
      if (response.data === true) {
        alert('데이터 추가 성공');
      } else {
        alert('데이터 추가 실패, 뭐가 잘못됬나 알아보기');
      }
    });
  }
  return (
    <>
      <h3>관리자 페이지</h3>
      <p>메뉴 품목 :</p>
      <p>메뉴 이름 : </p>
      <p>메뉴 가격 : </p>
      <p>메뉴 경로 : </p>
      <form ref={form_info}>
        <input
          ref={Mindex}
          name="index"
          type="text"
          placeholder="메뉴 품목"
          // onChange={() => {
          //   indexChange();
          // }}
        />
        <input ref={Mid} name="id" type="text" placeholder="메뉴 이름" />
        <input ref={Mprice} name="price" type="text" placeholder="메뉴 가격" />
        <input
          ref={Mimg}
          name="img"
          type="text"
          placeholder="메뉴 이미지 경로"
        />
        <button
          type="button"
          onClick={() => {
            addMenu();
          }}
        >
          메뉴 추가
        </button>
        <button type="button">메뉴 수정</button>
        <button type="button">메뉴 삭제</button>
      </form>
    </>
  );
}
