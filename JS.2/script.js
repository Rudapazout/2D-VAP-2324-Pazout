let platno = document.getElementById("platno");
let kontext = platno.getContext("2d");
let stredKruhuX = 100; 
let stredKruhuY = 100;

platno.onmousemove = pohyb

function pohyb(event) {
    let rect = platno.getBoundingClientRect()
    stredKruhuX = event.clientX
    stredKruhuY = event.clientY
}
function nakresli(){
    kontext.clearRect(0, 0, platno.clientWidth, platno.clientHeight)
    kontext.beginPath()
    kontext.fill()
    kontext.arc(stredKruhuX, stredKruhuY, 50, 0, 2*Math.PI)
    kontext.fillStyle = "blue"
    kontext.fillRect(150, 150, 100, 100)
    kontext.fillStyle = "green"
    requestAnimationFrame(nakresli)
}

nakresli()