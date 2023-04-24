/*  your css code here. If applicable */
let level=document.getElementById("level");
let ul=document.getElementsByTagName("ul")[0];
for(let i=0;i<ul.children.length;i++){
    if(ul.children[i]==level)
        alert("The level of the element is: "+(i+1));
}