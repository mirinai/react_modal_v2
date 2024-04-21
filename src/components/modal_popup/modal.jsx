import { Component } from 'react';
import './modal.css'

//Modal 컴포넌트를 만들어서 App.js에서 쓰기

//컴포넌트를 만든 다음 내보낸다 (컴포넌트는 대문자로 비롯되는 함수)
function Modal({id,_header,_body,_footer, onClose}) {
  

  return (
    <>
    {/* id값은 쓰는 곳에서 설정할 수 있게 하기
    ==> 매개변수 (쓰는 곳에서 결정하게 한다.)
    ==> 컴포넌트의 매개변수
    1. props
    2. {} 직접만들기

    id값을 쓰는 곳에서 넣어줬으면 그걸로 설정하고,
    안 넣었으면 Modal로 아이디 정함
    && : (그리고)앞의 것이 틀리면 이미 틀려서 뒤의 것을 무시함
    || : (또는) 앞의 것이 맞으면 이미 맞아서 뒤의 걸 무시함
    틀림(0,false,"",null,NaN, undefined)
    
    */}
      <div className="modal-component" id={id || 'Modal'} onClick={(e)=>{
        //console.log(e.target.className)
        if (e.target.className === `modal-component`)
        {
          onClose();
        }
      }}>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='close-modal-icon' onClick={onClose}>&times;</span>
            {/* 모달의 내용은 쓰는 곳에서 정하기 == 매개변수 */}
            <h2>{_header}</h2>
          </div>
          <div className='modal-body'>
            {_body}
          </div>
          <div className='modal-footer'>
            {_footer}
          </div>
        </div>
      </div>
    </>
  );
}


export default Modal;