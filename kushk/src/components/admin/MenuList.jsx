import React from 'react';

export default function MenuList({ index, id, price, img }) {
  return (
    <>
      <h3>데이터 받기 테스트</h3>
      <p>메뉴 품목 : {index}</p>
      <p>메뉴 이름 : {id}</p>
      <p>메뉴 가격 : {price}</p>
      <p>메뉴 경로 : {img}</p>
    </>
  );
}
