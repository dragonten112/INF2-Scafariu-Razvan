const buton=document.getElementById('butonBara');
const navi=document.getElementById('navbar');
const x=document.getElementById('inchidebara')




if(buton){
    buton.addEventListener('click',()=>{
        navi.classList.add('active');
    })
}

if(x){
    x.addEventListener('click',()=> {
        navi.classList.remove('active');
    })
}


 
