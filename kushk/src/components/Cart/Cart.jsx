import React, { useContext, useEffect } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  console.log('cartCtx.totalAmount', cartCtx.totalAmount);
  console.log('hasItems', hasItems);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
        /* 리스트이기 때문에 키를 전달해야함 */
        /* 또 onRemove프롭추가 CartItem컴포넌트에서 기대하는 이름이니까 */
        /* onRemove에게 cartItemRemoveHandler에 대한 포인터를 전달 */
        /* onAdd프롭추가도 마찬가지로 반복 */
        /* 이제 두함수에 대해 bind호출하고, null과 item.id를 바인드함. 이렇게 하면 추가되거나 삭제된 항목의 id가 remove핸들러로 전달됨 */
        /* bind는 향후에 함수가 실행될때 받을 인수를 미리 구성할수있음..즉, 이두함수는 item.id를 받거나 item처럼 항목 자체를 받는 다는 것. */
      ))}
    </ul>
  );

  //   useEffect(() => {
  //     const jquery = document.createElement('script');
  //     jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
  //     const iamport = document.createElement('script');
  //     iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
  //     document.head.appendChild(jquery);
  //     document.head.appendChild(iamport);
  //     return () => {
  //       document.head.removeChild(jquery);
  //       document.head.removeChild(iamport);
  //       console.log('eee스크립트 호출')
  //     };
  //   }, []);

  // function RequestPay() {
  //   /* 1. 가맹점 식별하기 */
  //   const { IMP } = window;
  //   IMP.init('imp33311443');

  //   /* 2. 결제 데이터 정의하기 */
  //   requestPay = () => {
  //     // IMP.request_pay(param, callback) 결제창 호출
  //     IMP.request_pay(
  //       {
  //         // param
  //         pg: 'html5_inicis',
  //         pay_method: 'card',
  //         merchant_uid: `mid_${new Date().getTime()}`, // 주문 번호 받아와야함 merchant_uid     `mid_${new Date().getTime()}`
  //         name: '결제 테스트', // 주문명
  //         amount: 64900, // 결제 가격
  //       },
  //       (rsp) => {
  //         // callback
  //         if (rsp.success) {
  //           // 결제 성공 시: 결제 승인
  //           // jQuery로 HTTP 요청
  //           jquery
  //             .ajax({
  //               url: '{서버의 결제 정보를 받는 endpoint}', // 예: https://www.myservice.com/payments/complete
  //               method: 'POST',
  //               headers: { 'Content-Type': 'application/json' },
  //               data: {
  //                 imp_uid: rsp.imp_uid,
  //                 merchant_uid: rsp.merchant_uid,
  //               },
  //             })
  //             .done(function (data) {
  //               // 가맹점 서버 결제 API 성공시 로직
  //               alert('결제 성공');
  //             });
  //         } else {
  //           // 결제 실패 시 로직,
  //           alert(`결제 실패: ${error_msg}`);
  //         }
  //       }
  //     );
  //   };
  // }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 주문금액</span>
        <span>{totalAmount}원</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          닫기
        </button>
        {hasItems && (
          <button className={classes.button} onClick={() => {}}>
            주문
          </button>
        )}
        {/* 이주문버튼은 장바구니에 항목이 있는 경우에만 나타나도록 hasItem 만듦 */}
      </div>
    </Modal>
  );
};

export default Cart;
