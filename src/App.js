






const msg="hihi";

 msg="dd";

function App() {
  return (
    <div >
     <h1>안녕 리액트</h1>
     <h2>{msg}</h2>
     <p>이것은 js야!</p>
    </div>
  );
}

function HiComponent(){
  return (
    <div>
      <hi>{msg}</hi>
      <HiComponent></HiComponent>
      <p>이것은 React Js입니다.</p>
    </div>
  )
}
export default App;
/*export default : 다른 파일에서 사용할 수 있도록 내보내는 부분 기본적으로 내보낼 항목을 지정하는 역할을 함
다른 Js에서 App.Js에 있는 function App을 사용할 수 있도록 
*/


/*
Js에서는 글자값인지 숫자값인지 중요하지 않음
재사용이 가능한 지 재할당이 가능한 지가 중요


var : 재선언 재할당 가능
let : 재선언 불가 재할당만 가능
const : 재선언 재할당 둘 다 불가


*/ 