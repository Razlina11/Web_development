const mybtn=document.getElementsByClassName('my-btn')[0];

/*Anonymous function,event emitter*/

mybtn.addEventListener('click',function() {
    fetch('my-api')
    /* 
    .then(e=>e.text())
    .then(e=> setVal(e))
    */
   setVal(Math.ceil(Math.random()*6));
})


function setVal(val)
{
const myop=document.getElementById('my-output');
myop.innerHTML=val;
}