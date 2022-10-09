const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imgContainerEl=document.querySelectorAll(".image-container");
let currImg=1;

// var timer;
function nextimage(i,n){
    currImg++;
    // clearTimeout(timer);
    updateImg(i,n);
}

function previmage(i,n){
    currImg--;
    // clearTimeout(timer);
    updateImg(i,n);
}
updateImg();
function updateImg(i,n){
    if(currImg>n){
        currImg=1;  
    }
    else if(currImg<1){
        currImg=n;
    }
    imgContainerEl[i].style.transform=`translateX(-${(currImg-1)*800}px)`;
    // timer=setTimeout(()=>{
    //     currImg++;
    //     updateImg(i);
    // },3000);
}