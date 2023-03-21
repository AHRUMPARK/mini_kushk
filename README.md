# mini_kushk
미니 키오스크 서비스


**`진행기간`**  2023.01.26 ~ 2023.02.03

**`Frontend`** 1명, **`Backend`** 1명

<img src="https://user-images.githubusercontent.com/116782319/226572885-6080c1c1-4b33-4e6c-9d52-9bc988fb9efe.png" width="500" align="center" />
<h4>🔗demo <a href="http://49.50.172.207:3001/">mini_kushk/a></h4>
   
   <br/>
<h3>☕ 서비스 소개</h3>
<hr />
<h4>카페 키오스크 서비스를 목표로 기획 </h4>


   <br/>
<h3>🛠️ 사용 기술 & 라이브러리</h3>

**`Frontend`**
• html / css / js 
• React / Redux


**`Backend`**
• node / Express
• Sequelize / Socket.io / Mysql

   
**`Communication`**
• Slack / kakaotalk / Notion / Figma


   <br/>
<h3>✒ 구현 기능</h3>
<hr />

   
**`메인 페이지`**

**React 로 SPA 구현**

Redux & UseContext 사용 ⇒ 주문하기 누르면 장바구니 추가
<br />

 **`장바구니`**
   
`Import API 사용` ⇒ 결제 기능 구현

BootStrap, StyeledComponents 사용
   
   <br />
   
   
**`DB 관리자 페이지`**

 Rest API 사용 ⇒ 메뉴 DB 관리
   
 <img src="https://user-images.githubusercontent.com/116782319/226573602-c6c89351-3c02-48aa-b6fb-bbc607521809.png" width="500" align="center" />  
   <br />



   <br/>
<h3>💡느낀점 & 추후 개발</h3>
<hr />

React의 여러 훅들을 써봐서 좋은 기회였고, React build 파일을 nginx를 이용해 배포하는 것이 어려웠다.
   
git 충돌 오류도 모아서 정리 했고, React의 spa의 매력을 느낄 수 있었다. 
   
아임포트 API 모듈만 연결해 놓고, 서버 통신을 구현

결제하면 결제 DB에 데이터가 들어가도록 하는 것을 구현

다른 팀원은 메뉴 컴포넌트 품목 별로 들어오는 것을 구현
