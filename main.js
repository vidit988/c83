canvas=document.getElementById('myCanvas')
var cpx= canvas.getContext('2d')
var mousedown1=''
var startX=''
var startY=''
var endY=''
var endX=''

cpx.beginPath()
cpx.strokeStyle='blue'

cpx.lineWidth=3
var width=screen.width
console.log(width)
var height=screen.height
console.log(height)
var newwidth=width-100
var newheight=height-300
if (width<992){
    canvas.width=newwidth
    canvas.height=newheight
    document.body.style.overflow='hidden'
    
}
canvas.addEventListener('touchstart',touch)
function touch(event){
  startX=event.touches[0].clientX-canvas.offsetLeft  
  startY=event.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener('touchmove',touchmove)
function touchmove(event){
    endX=event.touches[0].clientX-canvas.offsetLeft
    endY=event.touches[0].clientY-canvas.offsetTop
    cpx.moveTo(startX,startY)
    cpx.lineTo(endX,endY)
    startX=endX
    startY=endY

}

// canvas.addEventListener('mousedown',click1)
// function click1(){
//     mousedown1='mousedownstart'
// }
// function click2(event){
//     endX=event.clientX-canvas.offsetLeft
//     endY=event.clientY-canvas.offsetTop
//     if (mousedown1=='mousedownstart'){
//         cpx.moveTo(startX,startY)
//         cpx.lineTo(endX,endY)
//         cpx.stroke()
//     }
//     startX=endX
//     startY=endY

// }
button=document.getElementById('clear')
button.addEventListener('mousedown',clearcanvas)

canvas.addEventListener('mousemove',click2)
function clearcanvas(){
    cpx.clearRect(0,0,canvas.width,canvas.height)
    console.log('clear')
}