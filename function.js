var btn = 0;
var button0 = document.getElementById('button0');

button0.onclick = clickFunction;

function clickFunction(){
    var icon0 = document.getElementById('heart0');
    var icon1 = document.getElementById('heart1');
    if (btn == 0){
        icon0.style.display = "none";
        icon1.style.display = "";
        button0.innerHTML = "Take my heart!";
        btn = 1;
    }
    else{
        icon0.style.display = "";
        icon1.style.display = "none";
        button0.innerHTML = "Give me heart!";
        btn = 0;
    }
    // console.log(btn)
}