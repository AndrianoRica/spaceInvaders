//---------------img change continuamente------
id3 = null;

ch = true;
function changes(){
  id3 = setInterval(cambia, 300);

  function cambia(){
    if(ch==true){
      animate.style.background = "url('secondpig.jpeg') ";
      animate.style.backgroundSize = "contain";
      ch=false;
    }else{
      animate.style.background = "url('pig.jpeg') ";
      animate.style.backgroundSize = "contain";
      ch=true;
    }
  
  }

}



//---------------key command------------------
const myInput = document.getElementById("myInput");
document.addEventListener("keydown", function(event) {
  if ((event.key === " " || event.key ==="Space") && isOnFocus()) {
    // Execute your desired function here
    
    shoot.click();
  }
  if ((event.key === "r" ||event.key === "R") && isOnFocus()) {
    if(rimasti.innerHTML != 3){
    shoot.disabled = true; //displaying the button again after 3000ms or 3 seconds
    shoot.style.display = "none"; //displaying the button again after 3000ms or 3 seconds

    // Execute your desired function here
    new Audio("reload.mp3").play();
        setTimeout(function () {
          
          myMove2(1);
          shoot.disabled = false; //displaying the button again after 3000ms or 3 seconds
          shoot.style.display = "inline";
          reload.style.backgroundColor = "#EFEFEF"; //displaying the button again after 3000ms or 3 seconds

        }, 1000);
    }
  }
  if ((event.key === "p" || event.key === "P") && isOnFocus()) {
    // Execute your desired function here
    using.click();
  }
});
const ints = document.querySelectorAll("input");
function isOnFocus(){
  for(let i=0; i<ints.length; i++){
          console.log(ints[i] === document.activeElement);

    if(ints[i] === document.activeElement){
      return false;
    }
  }
  return true;
}
//----------------shot---------------------
  let shot=[false,false,false];
  container2.addEventListener('mousemove', function(e) {
    let ammo = document.getElementsByClassName("munizioni");
    if((e.clientX>398 || e.clientX<1)||(e.clientY<410|| e.clientY>490 )){
    pistol.style.left = 150 + 'px';
    for (let i = 0; i < ammo.length; i++) {
      if(shot[i]==false){
        ammo[i].style.left = 190+ 'px';
        console.log(e.clientX)
      }
    }
  }else if(e.clientX<=400-30 && e.clientX>=0+40){
    pistol.style.left = ((e.clientX)-50)  + 'px';
    for (let i = 0; i < ammo.length; i++) {
      if(shot[i]==false){
        ammo[i].style.left = ((e.clientX)-13)+ 'px';
        console.log(e.clientX +" " + e.clientY)
      }
    }
  }
  });
  
  id1 = null;
  function myMove2(n) {
    
    const anima = document.getElementById("animate");
    const pisto = document.getElementById("pistol");
    let ammo = document.getElementsByClassName("munizioni");
    let su = 370;
    let giu = 190;
    if (n == 1) {
      for (let i = 0; i < ammo.length; i++) {
        shot[i]= false;
        ammo[i].style.left = 37 + (parseInt((window.getComputedStyle(pistol).left).replace("[a-z]", ""))) + "px";
        ammo[i].style.top = su + "px";
        
      }
      rimasti.innerHTML = 3;
    } else {
      console.log(ammo.length);
      console.log("Ciao");
      let r = parseInt(rimasti.innerHTML);
      console.log(r);
      if (r > 0 && but[0].disabled &&  (window.getComputedStyle(animate).left !="0px" || window.getComputedStyle(animate).top !="0px" )) {
        shot[r-1]= true;
        if(r==3){
          new Audio("boom" + 1 + ".mp3").play();
        } else if(r==2){
          new Audio("boom" + 2 + ".mp3").play();
        }else if(r==1){
          new Audio("boom" + 3 + ".mp3").play();
        }
        
        clearInterval(id1);
    
        id1 = setInterval(spara, 1);

        shoot.disabled = true; //displaying the button again after 3000ms or 3 seconds
        //first hide the button
        setTimeout(function () {
          //using setTimeout function
          shoot.disabled = false; //displaying the button again after 3000ms or 3 seconds
        }, 550);
      } else if((window.getComputedStyle(animate).left =="0px" && window.getComputedStyle(animate).top == "0px" )){
        using.style.backgroundColor = "red";

        setTimeout(function () {
          using.attributeStyleMap.clear()

        }, 500);
      } else if(r >= 0 && but[0].disabled==false){
        using.style.backgroundColor = "red";

        setTimeout(function () {
          using.attributeStyleMap.clear()

        }, 500);
      }
      
      if(r-1==0 && but[0].disabled &&  (window.getComputedStyle(animate).left !="0px" ||window.getComputedStyle(animate).top !="0px" )){
        reload.style.backgroundColor = "red"; 
        shoot.disabled = true; //displaying the button again after 3000ms or 3 seconds//first hide the button
        shoot.style.display = "none";
        new Audio("reload.mp3").play();
        setTimeout(function () {
          
          myMove2(1);
          shoot.disabled = false; //displaying the button again after 3000ms or 3 seconds
          shoot.style.display = "inline";
          reload.style.backgroundColor = "#EFEFEF"; //displaying the button again after 3000ms or 3 seconds

        }, 1000);
        
      }

      function spara() {
        if (su <= 6) {
          ammo[r - 1].style.top = 6 + "px";
          rimasti.innerHTML = r - 1;
          clearInterval(id1);
        }
        su--;
        su--;
        su--;
        su--;
        su--;
        su--;su--;
        ammo[r - 1].style.top = su + "px";
        if (collision(anima, ammo[r - 1])) {
            for(let i =0; i< but.length; i++){

                    but[i].disabled = false;
            }
            gameOvertxt.style.background = "url(winn.jpeg) no-repeat"
            gameOvertxt.style.backgroundSize = "contain"
            gameOvertxt.style.opacity = "0.8";
            win();
            clearInterval(id3);
            console.log(window.getComputedStyle(gameOvertxt).opacity);
            animate.style.background = "url('dead.png') ";
            animate.style.backgroundSize = "contain";
            
            clearInterval(id);
            clearInterval(id1);


          
         
        }
        function collision(pig, bullet) {
          var parent = pig;
          var child = bullet;

          var parentRect = parent.getBoundingClientRect();
          var childRect = child.getBoundingClientRect();

          if (childRect.bottom > parentRect.top && childRect.top < parentRect.bottom &&
childRect.right > parentRect.left && childRect.left < parentRect.right) {
            return true;
          } else {
            return false;
}
        }
      }
    }
  }
  const but = document.getElementsByTagName("button");
  const s = document.getElementsByClassName("s");

  const u = document.getElementsByClassName("u");//use
  id = null;
  function myMove() {
    if(using.innerHTML == "--" && arrays.length == 0){
      s[0].style.backgroundColor = "red";
      inputs[0].style.backgroundColor = "red";
      setTimeout(function () {
        myMove2(1);
        s[0].attributeStyleMap.clear()
        inputs[0].attributeStyleMap.clear()
      }, 500);

      }
      else if(using.innerHTML == "--" && arrays.length != 0 || lost[arrays.indexOf(using.innerHTML)] == true){
        for(let i =0; i< u.length; i++){
          if(lost[i]==false)
            u[i].style.backgroundColor = "red";
          }
        s[0].style.backgroundColor = "red";
        inputs[0].style.backgroundColor = "red";
        setTimeout(function () {
          for(let i =0; i< u.length; i++){
            u[i].attributeStyleMap.clear();
          }
          s[0].attributeStyleMap.clear();
          inputs[0].attributeStyleMap.clear();
        }, 500);
      }else{
      for(let i =0; i< but.length; i++){
          if(but[i].id != "reload" && but[i].id != "shoot")
              but[i].disabled = "true";
          renderItems();
      }

      reload.style.display = "inline"; 
      shoot.style.display = "inline"; 
      myMove2(1)
      const elem = document.getElementById("animate");
      gameOvertxt.style.opacity = "0";
      elem.style.left = 0 + "px";
      elem.style.top = 0 + "px";
      let dx = 1;
      let sx = 1;
      let basso = 0;
      let c = 0;
      let contads = 1; //destra & sinistra
      let contasg = 1; //su & giu
      let sugiuTemp=1;
      let tried = false;
      clearInterval(id);
      changes();
      animate.style.background ="url(pig.jpeg) no-repeat";
      animate.style.backgroundSize = "contain";
      id = setInterval(destra, 1);

      function destra() {
        

        if ((c == 0 || c == 2)) {
          if(contads >= 350 ){
            elem.style.left = 350 + "px";
            c++
          }  if(contads <=0 ){
            elem.style.left = 1 + "px";
            c++
          }
        } else if ((c == 1 || c == 3) && sugiuTemp>=50) {
          contasg = contasg - (sugiuTemp - 51)
          sugiuTemp=1;
          c++;
          if (c == 4) {
            c = 0;
          }
        }
        if (contasg >= 350 && contads <=0) {
          console.log(contasg + " " + contads)
          clearInterval(id3);
          animate.style.background = "url(pig.jpeg) no-repeat";
          animate.style.backgroundSize = "contain";
          clearInterval(id);
          gameOvertxt.style.background = "url(gameover.jpeg) no-repeat"
          gameOvertxt.style.backgroundSize = "contain"
          gameOvertxt.style.opacity = "0.8";

            //using setTimeout function
            loose()
            
            for(let i =0; i< but.length; i++){
                but[i].disabled = false;
                renderItems();
            }

        } else{

        if (c == 0) {
          //destra
          
          for(let i =0; i< points[arrays.indexOf(using.innerHTML)]+1; i++){
            if(contads >= 350 )
              break;
            contads++;
          }
        
          elem.style.left = contads + "px";
        } else if (c == 1) {
          //giù
          for(let i =0; i< points[arrays.indexOf(using.innerHTML)]+1; i++){
            if(sugiuTemp>=50){
              break;
            }
            contasg++;
            sugiuTemp++;
          }

          elem.style.top = contasg + "px";
        } else if (c == 2) {
          //sinistra
          
          for(let i =0; i< points[arrays.indexOf(using.innerHTML)]+1; i++){
            if(contads <=0 ){
              break;
            }
            contads--;
          }
          elem.style.left = contads + "px";
        } else if (c == 3) {
          //giù2
          for(let i =0; i< points[arrays.indexOf(using.innerHTML)]+1; i++){
            if(sugiuTemp>=50){
              break;
            }
            contasg++;
            sugiuTemp++;
          }
          elem.style.top = contasg + "px";
        }
      }
        console.log(
          contads + " " + contasg + " " + c + " " + (contasg % 50 == 0)
        );
      }
    }
  }
//-------------------list ---------------------------
const list = document.getElementById("list");
const inputs = document.querySelectorAll(".inputs");
arrays = ["Guest"];
points = [0];
lost  =[false];

function removeIndex(a){

        arrays.splice((parseInt(a)), 1)
        points.splice((parseInt(a)), 1)
        lost.splice((parseInt(a)), 1)
        if(arrays.length ==0 || !arrays.includes(using.innerHTML)){
          using.innerHTML = "--";
        }
        renderItems();
}
function removeWord(){
    if(inputs[1].value !=""){
        for (let i = 0 ; i<arrays.length; i++) {
            console.log(inputs[1].value , " " , arrays[i] )
            if(arrays[i] == inputs[1].value){
                arrays.splice(i, 1)
            }
        }
        inputs[1].value = "";
        renderItems();
        inputs[1].attributeStyleMap.clear();
    } else {
        inputs[1].style.boxShadow = "0px 0px 12px -0px red";
    }
    
}
function addWord(){
    if(inputs[0].value !="" && !arrays.includes(inputs[0].value)){
        arrays.push(inputs[0].value);
        points.push(0);
        lost.push(false);
        inputs[0].value = "";
        renderItems();
        inputs[0].attributeStyleMap.clear();
    } else {
        inputs[0].style.boxShadow = "0px 0px 12px -0px red";
    }
}
function useIndex(a){
    

  using.innerHTML=arrays[a];
  renderItems();

}
function renderItems(){
    list.innerHTML = "";
    for(let i=0;i<arrays.length; i++){
      if(lost[i] == true){
        list.innerHTML+=`<li><button onclick='removeIndex(${i})'>x</button><button class="u"  onclick='useIndex(${i})' disabled>Lost</button> ${arrays[i]} --><label>Round<label/> ${points[i]}</li>`;

      }else if(arrays[arrays.indexOf(using.innerHTML)]== arrays[i]){
        list.innerHTML+=`<li><button onclick='removeIndex(${i})'>x</button><button class="u" onclick='useIndex(${i})' disabled>using</button> ${arrays[i]} --><label>Round<label/> ${points[i]}</li>`;
      } else{
        list.innerHTML+=`<li><button onclick='removeIndex(${i})'>x</button><button class="u" onclick='useIndex(${i})'>use</button> ${arrays[i]} --><label>Round<label/> ${points[i]}</li>`;
      }
    }
}
function useWord(){
    if(arrays.includes(inputs[1].value) && lost[arrays.indexOf(inputs[1].value)] == false){
        using.innerHTML=inputs[1].value;
        inputs[1].attributeStyleMap.clear();
        inputs[1].value="";
    }else if(arrays.length == 0){
      inputs[0].style.backgroundColor = "red";
      s[0].style.backgroundColor = "red";
      setTimeout(function () {
          inputs[0].attributeStyleMap.clear();
          s[0].attributeStyleMap.clear();
      }, 500);
  }
    else{
        inputs[1].style.boxShadow = "0px 0px 12px -0px red";
    }
  }
  function bubbleSort(){
	
    for(var i = 0; i <= points.length-1; i++){
        // Last i elements are already in place
        for(var j = 0; j < ( points.length - i -1); j++){

            // Comparing two adjacent numbers 
            // and see if first is greater than second
            if(points[j] < points[j+1]){

            // Swap them if the condition is true 
            var temp = points[j]
            points[j] = points[j + 1]
            points[j+1] = temp

            var temp2 = arrays[j]
            arrays[j] = arrays[j + 1]
            arrays[j+1] = temp2

            var temp3 = lost[j]
            lost[j] = lost[j + 1]
            lost[j+1] = temp3
            }
        }
    }
    // Print the sorted array
    console.log(arrays);
}
function win(){
    points[arrays.indexOf(using.innerHTML)]+=1;
    console.log(points[arrays.indexOf("Guest")]+"-"+ arrays +"-" + using.innerHTML);
    bubbleSort()
    renderItems();
}
function loose(){
  lost[arrays.indexOf(using.innerHTML)]=true;
  renderItems();
}
//_--------------------help menu_----------------


renderItems();