/* VARIAVIES */
let titulo = document.querySelector("#titulo");
let btn =document.querySelector('#btn');
let txt = document.querySelector('#descricao');
valid = false;
let data1 = document.querySelector('#data');


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

btn.addEventListener('click',()=>{
    if(valid==true){
        let divNova = document.createElement('div');
        divNova.setAttribute('class','nova');
        
        let nome = titulo.value.toUpperCase();
        let h1 = document.createElement('h1');
        let texto = document.createTextNode(nome);
        h1.appendChild(texto);
        
        
        let descricao= txt.value;
        let h2 = document.createElement('h2');
        let texto2 = document.createTextNode(descricao)
        h2.appendChild(texto2)

        let data1 = document.querySelector('#data'); 
        let dat = data1.value;
        let conve = new Date(dat)
        let dia =  `${conve.getDate()+1}/${conve.getMonth()+1}/${conve.getFullYear()}`;
    
        let h3 = document.createElement('h3');
        let = data = document.createTextNode(dia);;
        h3.appendChild(data);

        divNova.appendChild(h1);
        divNova.appendChild(h2);
        divNova.appendChild(h3);
        console.log(divNova);
        let t = document.querySelector('#container');
        t.appendChild(divNova);
        
    }
    else{

    


    


    }
})


