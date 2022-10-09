const grid=document.querySelector(".grid");
const flagsLeft=document.getElementById("flagsLeft");
const result=document.getElementById("result");
let totalFlags=10;
let validCounter=0;
let flagsCounter=0;
let gameOver=false;

(function createBoxes(){
    flagsLeft.innerHTML=totalFlags;
    let classArray=[];
    for(let i=0;i<100;i++){
        if(i>89){
            classArray.push('bomb');
        }
        else classArray.push('valid');
    }
    for(let i=0;i<100;i++){
        let box=document.createElement('div');
        let index=Math.floor(Math.random()*classArray.length);
        let className=classArray[index];
        classArray.splice(index,1);
        box.setAttribute("class",className);
        box.id=i;
        grid.appendChild(box);
    }
})();

const getBombsFromNeighbour=(target,value)=>{
    if(value===0 || value===9 || value===90 || value===99){
        setNumberOfBombs(target,cornercase,value);
    }
    else if(value>0 && value<9 ||value>90 && value<99 || 
    value===10 || value===20 || value===30 || value===40 || 
    value===50 || value===60 || value===70 ||value===80 ||
     value===19 || value===29 ||value===39 ||value===49 || 
     value===59 || value===69 || value===79 ||value===89){
         setNumberOfBombs(target,edgeCase,value);
    }
    else {
        setNumberOfBombs(target,generalCase,value);
    }
}

const cornercase=(val)=>{
    let arr;
    if(val===0){
        arr=[val+1,val+10,val+10+1];
    }
    else if(val===9){
        arr=[val-1,val+10,val+10-1];
    }
    else if(val===90){
        arr=[val+1,val-10,val-10+1];
    }
    else if(val===99){
        arr=[val-1,val-10,val-10-1];
    }
    return countBombs(arr);
}

const edgeCase=((val)=>{
let arr;
if(val>0 && val<9){
    arr=[val+1,val-1,val+10,val+10+1,val+10-1];
}
else if(val===10 || val===20 || val===30 || val===40 ||
val===50 || val===60 || val===70 || val===80){
    arr=[val-10,val+10,val+1,val-10+1,val+10+1];
}
else if(val===19 || val===29 || val===39 || val===49 ||
val===59 || val===69 || val===79 || val===89){
    arr=[val-10,val+10,val-1,val-10-1,val+10-1];
}
else if(val>90 && val<99){
    arr=[val+1,val-1,val-10,val-10+1,val-10-1];
}
return countBombs(arr);
})

const generalCase=((val)=>{
    let arr=[val-1,val+1,val-10,val+10,val-10-1,val-10+1,val+10-1,val+10+1];
    return countBombs(arr);
})

const countBombs=(arr)=>{
    let count=0;
    arr.forEach((item)=>{
        let ele=document.getElementById(item.toString());
        if(ele.classList.contains("bomb")){ count++;}
    })
    return count;
}

const setNumberOfBombs=((target,cases,val)=>{
    let bombsInNeighbour=cases(val);
    target.setAttribute('data',bombsInNeighbour);
    if(bombsInNeighbour===1){
        target.classList.add('one');
    }
    else if(bombsInNeighbour===2){
        target.classList.add('two');
    }
    else if(bombsInNeighbour===3){
        target.classList.add('three');
    }
   else if(bombsInNeighbour===4){
        target.classList.add('four');
    }
})

const setDataAttribute=()=>{
    let boxes=document.querySelectorAll(".bomb,.valid");
    boxes.forEach((box,index)=>{
        getBombsFromNeighbour(box,index);
    })
}
setDataAttribute();

const showAllBombs=()=>{
    let bombs=document.querySelectorAll('.bomb');
    bombs.forEach((bomb)=>{
    bomb.innerHTML="💣";
    if(!bomb.classList.contains('checked')){
        bomb.classList.add("checked");
    }
    })
}

const checkFlagedBoxContainBombs=()=>{
let flaged=document.querySelectorAll(".flag");
for(let i=0;i<flaged.length;i++){
    if(!flaged[i].classList.contains("bomb")){
        return false;
    }
}
return true;
}

grid.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(!gameOver){
        let target=e.target;
        let noOfBombsSurrounded=target.getAttribute('data');
        let targetClassList=e.target.classList;
        if(targetClassList.contains("bomb")){
            gameStatusMsg("LOSE");
            return;
        }
        else if(target.classList.contains("valid")){
            if(target.classList.contains("flag")){
                target.classList.remove('flag');
                flagsCounter--;
                flagsLeft.innerHTML=totalFlags-flagsCounter;
                target.innerHTML=noOfBombsSurrounded;
            }
        if(!targetClassList.contains("checked")){
            targetClassList.add("checked");
            target.innerHTML=noOfBombsSurrounded;
            validCounter+=1;
            if(validCounter===90){
                gameStatusMsg("WIN");
            }
        }
        }
    }
},false);

grid.addEventListener('contextmenu',(e)=>{
    e.stopPropagation();
    e.preventDefault();
    if(!gameOver){
        let target=e.target;
        if(flagsCounter<totalFlags){
            if(target.classList.contains("flag")){
                target.classList.remove("flag");
                flagsCounter--;
                flagsLeft.innerHTML=totalFlags-flagsCounter;
                target.innerHTML="";
            }
            else if(!target.classList.contains("flag")){
                 target.classList.add("flag");
                flagsCounter++;
                flagsLeft.innerHTML=totalFlags-flagsCounter;
                target.innerHTML="🚩";
                if(flagsCounter===totalFlags && checkFlagedBoxContainBombs()){
                    gameStatusMsg("WIN");
                }
                else if(flagsCounter===10 && !checkFlagedBoxContainBombs()){
                    gameStatusMsg("LOSE");
                }
            }
        }
    }
})

const gameStatusMsg=(winOrlose)=>{
    result.innerHTML=`Game Over: YOU ${winOrlose}!`;
    gameOver=true;
    showAllBombs();
}