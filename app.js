let downloadSec = document.querySelector('.downloading')
let songListSection = document.querySelector(".song-list");
let songBtn = document.querySelectorAll('button')
// let arr = Array.from(songBtn);
// arr.pop();
// console.log(arr);


songBtn.forEach(button => {
    button.addEventListener("click", () => {
        songListSection.style.display = "none";  // Hide song list
        downloadSec.style.display = 'flex'

    });
});






let percent = document.querySelector('#percent')
let btn = document.querySelector('#download-btn')
let growth = document.querySelector('.growth')
let time = document.querySelector('span')

let grow = 0;
let timeRemaning = 5;
 btn.addEventListener('click',()=>{
    // console.log("hell");
    // growth.style.width = "100%"
    let timeStamp  = setInterval(()=>{
        timeRemaning--
        time.innerHTML = timeRemaning
    },1000)
    setTimeout(()=>{
        clearInterval(timeStamp)
    },5000)


    let start =  setInterval(()=>{
        grow++;
        console.log(grow);   
        percent.innerHTML = grow+'%'
        growth.style.width = grow+'%'
        
    },50)
    setTimeout(function(){
        clearInterval(start);
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = '0.5'
    },5000)
    
 })