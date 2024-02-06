let btn = document.querySelector("button");
 
btn.addEventListener("click", function(){
   let randomcolor = getrandomcolor();
   let h3=document.querySelector("h3");
   h3.innerText=randomcolor;
   let h4=document.querySelector("h4");
   h4.innerText="This is your new color"

   let div= document.querySelector(".small");
   div.style.backgroundColor=randomcolor
});

function getrandomcolor(){

      let red = Math.floor(Math.random()*255);
      let green= Math.floor(Math.random()*255);
      let blue = Math.floor(Math.random()*255);
      let color=`rgb(${red},${green},${blue})`;
      return color;
      
}

