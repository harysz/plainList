let marke=document.querySelector('.Marke');
let modelis=document.querySelector('.Modelis');
let metai=document.querySelector('.Metai');
let kaina=document.querySelector('.Kaina');
let item = [];
fetch('https://backend.daviva.lt/API/InformacijaTestui')
.then(response => response.json())
.then(data => {
    marke.innerHTML=data.marke,
    modelis.innerHTML=data.modelis,
    metai.innerHTML=data.metai,
    kaina.innerHTML= data.kaina + '€'
    });

if(item.length > 0){
    console.log(item);
}