

console.log("nikhil");
let box = document.querySelectorAll(".box");
arr = [
    [ document.getElementById("box1").innerHTML,
     document.getElementById("box2").innerHTML,
     document.getElementById("box3").innerHTML,
     document.getElementById("box4").innerHTML],
     [document.getElementById("box5").innerHTML,
     document.getElementById("box6").innerHTML,
     document.getElementById("box7").innerHTML,
     document.getElementById("box8").innerHTML],
     [document.getElementById("box9").innerHTML,
     document.getElementById("box10").innerHTML,
     document.getElementById("box11").innerHTML,
     document.getElementById("box12").innerHTML],
     [document.getElementById("box13").innerHTML,
     document.getElementById("box14").innerHTML,
     document.getElementById("box15").innerHTML,
     document.getElementById("box16").innerHTML]
 ]//.map(value => parseInt(value) || ''); // Convert all values to integers or 0 if they are not numbers
 .map(value =>value.map(integer=>parseInt(integer) || ''));
 console.log(arr);


let random = ()=>{  
    while(true){
        let ran1 = Math.round(Math.random() * 3);
        let ran2 = Math.round(Math.random() * 3);
        if (arr[ran1][ran2] === '') {
            arr[ran1][ran2] = 2;
            break;
        }
    }
      



 // Assign 2 to a random position in the array


// Update the innerHTML of the boxes to reflect the changes in the array
document.getElementById("box1").innerHTML = arr[0][0];
 document.getElementById("box2").innerHTML = arr[0][1];
 document.getElementById("box3").innerHTML = arr[0][2];
 document.getElementById("box4").innerHTML = arr[0][3];
 document.getElementById("box5").innerHTML = arr[1][0];
 document.getElementById("box6").innerHTML = arr[1][1];
 document.getElementById("box7").innerHTML = arr[1][2];
 document.getElementById("box8").innerHTML = arr[1][3];
 document.getElementById("box9").innerHTML = arr[2][0];
 document.getElementById("box10").innerHTML = arr[2][1];
 document.getElementById("box11").innerHTML = arr[2][2];
 document.getElementById("box12").innerHTML = arr[2][3];
 document.getElementById("box13").innerHTML = arr[3][0];
 document.getElementById("box14").innerHTML = arr[3][1];
 document.getElementById("box15").innerHTML = arr[3][2];
 document.getElementById("box16").innerHTML = arr[3][3];
 
 console.log(arr);
 console.log(arr[0][0] ,arr[0][1],arr[0][2],arr[0][3] );
 console.log(arr[1][0] ,arr[1][1],arr[1][2],arr[1][3]);
 console.log(arr[2][0] ,arr[2][1],arr[2][2],arr[2][3]);
 console.log(arr[3][0] ,arr[3][1],arr[3][2],arr[3][3]);
}
let moveRight = ()=>{
    let count = 0;
    let Arr = arr;
    console.log(Arr);
    let Array1 = (Arr.map(subArray => new Array (subArray.length)));
    for (let i = 0; i <Arr.length; i++) {
    for (let z = 0; z <Arr[i].length; z++){
    if(Arr[i][z] ==''){
    count++;
    }
    for (let j = 0; j < count; j++){
    Array1[i][j] = '';
    } 
    }
    for (let b= 0; b <Arr[i].length; b++){
    if(Arr[i][b]!==''){
        Array1[i][count++] = Arr[i][b];
    }
    }
    count = 0;
    }
    arr = Array1;
    document.getElementById("box1").innerHTML = arr[0][0];
 document.getElementById("box2").innerHTML = arr[0][1];
 document.getElementById("box3").innerHTML = arr[0][2];
 document.getElementById("box4").innerHTML = arr[0][3];
 document.getElementById("box5").innerHTML = arr[1][0];
 document.getElementById("box6").innerHTML = arr[1][1];
 document.getElementById("box7").innerHTML = arr[1][2];
 document.getElementById("box8").innerHTML = arr[1][3];
 document.getElementById("box9").innerHTML = arr[2][0];
 document.getElementById("box10").innerHTML = arr[2][1];
 document.getElementById("box11").innerHTML = arr[2][2];
 document.getElementById("box12").innerHTML = arr[2][3];
 document.getElementById("box13").innerHTML = arr[3][0];
 document.getElementById("box14").innerHTML = arr[3][1];
 document.getElementById("box15").innerHTML = arr[3][2];
 document.getElementById("box16").innerHTML = arr[3][3];
    }

   
document.addEventListener("keyup" , event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowDown":
                random();
                console.log("DOWN");
              
                break;
            case "ArrowUp":
                random();
                console.log("UP");
                break;
            case "ArrowLeft":
                random();
                console.log("LEFT");
                break;
            case "ArrowRight":
                moveRight();
                random();
                console.log("RIGHT");               
                break;
        }
    }
    })

    
let arr = [[3,4,5],
[1,0,6],
[0,2,7]];

let count=0;
 for(let i =0 ; i<arr.length ; i++){
    for(let j =0 ; j<arr[i].length ; j++){
if(arr[i][j]==0){  
    count++;
}
for(let z =0 ;z<count ; z++){
    arr[i][z] = 0;
}
}
}
console.log("nikhil");
    












