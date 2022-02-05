'use strict';


const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)


function checkboxes(){
  const triggerBottom = window.innerHeight / 5 *4
  boxes.forEach(box => {
    // 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환합니다.
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
// https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect