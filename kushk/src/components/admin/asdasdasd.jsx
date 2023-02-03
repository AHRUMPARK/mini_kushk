import React, { useEffect } from 'react';
export default function Power() {
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  function onClickPayment() {
    const { IMP } = window;
    IMP.init('imp37316783'); // 결제 데이터 정의
    const data = {
      pg: 'html5_inicis', // PG사 (필수항목)
      pay_method: 'card', // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
      name: '결제 테스트', // 주문명 (필수항목)
      amount: '9000000', // 금액 (필수항목)
      // custom_data: { name: '부가정보', desc: '세부 부가정보' },
      // buyer_name : '아임포트 기술지원팀', // 구매자 이름
      // buyer_tel : '010-1234-5678', // 구매자 전화번호 (필수항목)
      // buyer_email : 'Iamport@chai.finance', // 구매자 이메일
      // buyer_addr : '서울특별시 강남구 삼성동',
      // buyer_postcode : '123-456',
    };
    IMP.request_pay(data, callback);
  }
  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };
  return (
    <div>
      <button onClick={() => onClickPayment()}>결제하기</button>
    </div>
  );
}
