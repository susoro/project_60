'use strict';

const panels = document.querySelectorAll('.panel')

panels.forEach( (panel) =>{
  panel.addEventListener('click', () =>{
    removeActiveClasses()
    panel.classList.add('active')
    // 클릭하면 뒤에껀 지워지게끔 하고 다음 이미지가 보여진다
  })
})

function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active')
  })
}