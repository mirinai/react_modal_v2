import logo from './logo.svg';
import './App.css';
import Modal from './components/modal_popup/modal.jsx'
import { useState } from 'react';
// index 이름은 폴더까지만 import해도 됨
//state를 만들어서 모달창을 띄우고 지우기

function App() {
  let [showModal, setShowModal] = useState(false); // true면 모달 뜨고, false면 안 뜨기
  let handleOpenModal = () => setShowModal(true);  // 모달을 열기 위한 함수
  //let handleCloseModal = () => setShowModal(false); // 모달을 닫기 위한 함수

  function modalClose(){
    //모달을 열기 위해서는 setShowModal(true) 했으니까
    //모달을 닫기 위해서는 ~~~~
    //리액트에서 화면을 바꾸기 위해선 state를 고친다
    if (showModal===true){
      setShowModal(false)
    }
    
  }

  return (
    <div className="App">
      {
        //showModal이 true면 <Modal/> 실행됨
      }
      
        <button onClick={handleOpenModal}>모달창 열기</button>
      
      {/* showModal이 true일 때만 Modal 컴포넌트를 렌더링하고, onClose로 모달을 닫을 수 있게 합니다 
      && : 그리고(하나라도 false면 거짓
      && : 앞의 것이 틀리면(false, null, Nan) 뒤는 무시함*/}
      {showModal && <Modal id={`modal-1`} onClose={modalClose} 
      _body={<div>모달 윈도우 바디</div>}
      _header={<div><p>Title</p></div>}
      _footer={<h2>Footer</h2>}/>}
      {/* Modal 컴포넌트 */}
      {/*showModal이 true면 <Modal/> 실행됨*/}

    </div>
  );
}

export default App;
