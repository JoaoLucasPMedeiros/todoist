


let btn_Add = document.getElementById("add");
let resutado = document.querySelector('#resultado');
let btn_Dell = document.getElementById('del');




btn_Add.addEventListener('click',()=>{
    addElemento();
})

function addElemento(){
    let input = document.createElement('input');
    let v = document.querySelector("input").value;
    input.setAttribute('type','text');
    input.setAttribute('class','text');
    input.setAttribute('value',v)
    let button = document.createElement('i');
    button.setAttribute('class','gg-remove-r')
    button.setAttribute('id','del')
    resutado.appendChild(input)
    resutado.appendChild(button)
    input.setAttribute('style','border: 2px gray solid;')
    input.setAttribute('style','background-color: #2e3152;')
    console.log(input,button)
}
