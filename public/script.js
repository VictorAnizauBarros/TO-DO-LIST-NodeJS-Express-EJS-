const btnCloseMessage = document.querySelector('#close_message'); 
const message = document.querySelector(".message");

btnCloseMessage.addEventListener('click', ()=>{
    message.style.display = "none";
}); 

setTimeout(() => {
    message.style.display = "none"; 
}, 3000);