const secondHand=document.querySelector(".second-hand");
const minHand=document.querySelector(".minute-hand");
const hourHand=document.querySelector(".hour-hand");
function setClock(){
    const d=new Date();
    const hour=d.getHours();
    const min=d.getMinutes();
    const sec=d.getSeconds();
    
    const hoursDegrees=((hour/12)*360)+((min/60)*30)+90;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
    
    const minDegrees=((min/60)*360)+((sec/60)*6)+90;
    minHand.style.transform=`rotate(${minDegrees}deg)`;
    
    const secondDegrees=((sec/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegrees}deg)`;
    
};
setInterval(setClock,1000);
setClock();
