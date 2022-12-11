const btn = document.querySelector('.number-btn');
const btns = document.querySelectorAll('.btn');
const texthtml = document.createElement('P');
const htmlSelect = document.querySelector('.submit-section #selection');
const submitBtn = document.querySelector('.submit');
let select = '0';


btn.addEventListener('click', ClickBtn);
submitBtn.addEventListener('click', subBtn)

function ClickBtn(e) {
    
    const lista = [].slice.call(btns);
    lista.forEach((element, i)=> {
        if (element.classList.contains('activo')) {
            btn.children[i].classList.remove('activo')
        }
    });
    if (e.target.classList.contains('btn')) {
        e.target.classList.add('activo');
        select = e.target.textContent
        insertHtml()
    }
}

function insertHtml() {
    texthtml.textContent = `You selected ${select} out of 5`;
    texthtml.classList.add('p-submit')
    htmlSelect.appendChild(texthtml);
}
function subBtn() {
    
    if (select > 0) {
        const cambioSection1 = document.querySelector('.submit-section-1');
        const cambioSection2 = document.querySelector('.submit-section');
        cambioSection1.classList.add('display');
        cambioSection2.classList.remove('display');
    }else{
        alert('seleccion Invalida')
    }

    
}