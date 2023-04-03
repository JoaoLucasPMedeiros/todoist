/* VARIAVIES */
let titulo = document.querySelector("#titulo");
let btn =document.querySelector('#btn');
let txt = document.querySelector('#descricao');
let valid = false;
let newDate = document.querySelector('#data');
let alteraData = document.querySelector("#alteraData");
let img = document.querySelector("#img"); 
let dataFormatada = false;


/* FAZ COM QUE O USUARIO ESCOLHA UMA DATA, CASO NÃO SEJA PREENCHIDA, ENTENDE-SE QUE A TAREFA É HOJE(DATA ATUAL) */
img.addEventListener('click',()=>{
    alteraData.setAttribute('style',' display: none;');
    newDate.setAttribute('style','display: inline') ;
});



function validar(){
    let newDate = document.querySelector('#data').value;
    if(newDate ==''){

        let data = new Date();
        let dia = data.getDate(); 
        let mes = data.getMonth()+1;
        let ano = data.getFullYear();
        let dataFormatada =`${dia}/${mes}/${ano}`;
        return dataFormatada;

        
    }else{
       
        let data = new Date(newDate);
        let dia = data.getDate()+1; 
        let mes = data.getMonth()+1;
        let ano = data.getFullYear();
        console.log(dia,mes,ano)
        let dataFormatada =`${dia}/${mes}/${ano}`;
        return dataFormatada;

    }
}

/* -------------------------------------------------------------------- */


/* APONTA O USUARIO O CAMPO OBRIGATORIO A SER PREENCHIDO, NO CASO O TITULO */
/* E NÃO DEIXA QUE O USUARIO 'ADICIONE' UMA NOVA TAREFA */
titulo.addEventListener('keyup',()=>{
    if(titulo.value.length >=5){
        titulo.setAttribute('style','border-bottom: 2px solid #09af32;');
        btn.setAttribute('style','background-color:#ea6006');
        valid = true;

    }else{
        titulo.setAttribute('style','border-bottom: 2px solid #bd1e1e;');
        btn.setAttribute('style','background-color:#4d4d4d')
        valid = false;
    }
})


/*APÓS OS CAMPOS PREENCHIDOS CORETAMENTE, É CRIADO UM NOVO CARD */
btn.addEventListener('click',()=>{
    if(valid==true){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class','nova');
        
    let nome = titulo.value.toUpperCase();
    let h1 = document.createElement('h1');
    let texto = document.createTextNode(nome);
    h1.appendChild(texto);
        
    let descricao= txt.value;
    let h2 = document.createElement('h2');
    let desTarefa = document.createTextNode(descricao);
    h2.appendChild(desTarefa);

    let h3 = document.createElement('h3');
    let dat = document.createTextNode(validar());
    h3.appendChild(dat);

    newDiv.appendChild(h1);
    newDiv.appendChild(h2);
    newDiv.appendChild(h3);
 
       
    console.log(newDiv);
    let cards = document.querySelector('#cards');
    cards.appendChild(newDiv);
        
    }

    else{



    };
})