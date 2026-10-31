

let areaTitle = document.querySelector('#areaTitle');
let areaText = document.querySelector('#areaText');
let btnParagraf = document.querySelector('#btnParagraf');
let articleWrapper = document.querySelector('#articleWrapper');



const paragrafo = {


    insertParagraf : function (titolo, paragrafo) {
        let div = document.createElement('div');
        div.innerHTML = `
    
            <h2>${titolo}</h2>
            <p>${paragrafo}</p>
        
        `;
    
        articleWrapper.appendChild(div);
    
    }
    
    
};



btnParagraf.addEventListener('click', ()=>{

    let titolo = areaTitle.value.trim();
    let testo = areaText.value.trim();


    if(titolo != '' && testo != ''){
        paragrafo.insertParagraf(titolo, testo);
        areaTitle.value = '';
        areaText.value = '';

    }else{
        alert('Devi inserire un Titolo e un testo');
    };


});