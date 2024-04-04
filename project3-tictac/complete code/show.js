let buttons = document.querySelectorAll(".box");
let flag = 0;
let reset=document.querySelector(".reset");
let heading=document.querySelector("h1");
let news=document.querySelector(".new-game");
let main=document.querySelector("main");
let play=document.querySelector(".play");
let title=document.querySelector(".title");

let got=0;
news.addEventListener("click",()=>{
    var audio1=new Audio('click2.mp3');
    audio1.play();
    main.classList.remove("tree");
    play.innerText="LET'S PLAY"
    got++;
    if(got!=1){
        buttons.forEach(check=>{
            check.innerHTML="";
            check.disabled=false;
            play.innerText=`ROUND-${got-1}`
        })
    }
});

buttons.forEach(choco => {
   
    choco.addEventListener("click", function() {
        var audio1=new Audio('click2.mp3');
        audio1.play();
        if (flag == 0) {
            choco.innerHTML = "X";
            heading.innerText="PLAYER TURN : O"
            flag = 1;
        } else {
          choco.innerHTML="O";
          heading.innerText="PLAYER TURN : X"
          flag=0;
        }
        choco.disabled=true;
        winner();
    });
});
reset.addEventListener("click",()=>{
    var audio1=new Audio('click2.mp3');
    audio1.play();
    buttons.forEach(check=>{
        check.innerHTML="";
        check.disabled=false;
        heading.innerText="TIC TAC TOE";
        got=1;
        counterx=0;
        countery=0;
        title.innerHTML="LETS PLAY";
    })
});
const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let counterx=0;
let countery=0;
const winner=()=>{
    for(i of winpatters){
        let val1=buttons[i[0]].innerHTML;
        let val2=buttons[i[1]].innerHTML;
        let val3=buttons[i[2]].innerHTML;
        if(val1 !="" && val2 != "" && val3 !=""){
            if(val1===val2 && val2===val3){
                heading.innerHTML=(`CONGRATULATIONS WINNER IS ${val1}`);
                if(val1==="X"){
                    counterx++;
                }
                else if(val1==="O"){
                    countery++;
                }
                title.innerHTML=`WINNINGS OF X:${counterx}\nWINNINGS OF O:${countery}`;
                title.style.marginLeft="60px";
                var audio = new Audio('win.mp3');
                    audio.play();
                buttons.forEach(check=>{
                    check.disabled=true;
                })
                return;
            }
        }

    }
    drawn();
};
const drawn = () => {
    let filling = 0;

    buttons.forEach(get => {
        if (get.innerHTML !== "") {
            filling++;
        }
    });

    if (filling === 9) {
        heading.innerHTML = "MATCH IS DRAWN";
        var audio3 = new Audio("loose.mp3");
        audio3.play();
    }
};