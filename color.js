function changebg(){
    let r=Math.trunc(Math.random()*256);
    console.log("red")
    let g=Math.trunc(Math.random()*256);
    console.log("green")
    let b=Math.trunc(Math.random()*256);
    console.log("blue")
    let body=document.querySelector("body")
    body.style.cssText=`background-color:rgb(${r},${g},${b})`;

    let headbg=document.querySelector("h1")
    headbg.innerHTML=`rgb(${r},${g},${b})`;
}

