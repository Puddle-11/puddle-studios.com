let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.ScrollWrapper');
const sliderButtonBack = document.querySelector('.ScrollButtonB');
const sliderButtonForward = document.querySelector('.ScrollButtonF');
let Scrolling = false;


const HomeButton = document.querySelectorAll('.Home');


function MoveHome(){

}
function ScrollBack()
{

  if(Scrolling == false){
  Scrolling = true;

  let x = 0
  let StartPos = slider.scrollLeft;
  var ScrollBackDelay = window.setInterval(function(){
    x++;
    slider.scrollLeft = easeInOutQuad(x, StartPos, 650, 150)
    if(x>=150){

      clearInterval(ScrollBackDelay)
      Scrolling = false;

    }
  }, 5);
}
}

function ScrollForward()
{
  if(Scrolling == false){
Scrolling = true;
  let x = 0
  let StartPos = slider.scrollLeft;
  var ScrollForwardDelay = window.setInterval(function(){
    x++;
    slider.scrollLeft = easeInOutQuad(x, StartPos, -650, 150)
    if(x>=150){

      clearInterval(ScrollForwardDelay)
      Scrolling = false;
    }
  }, 5);
  }
}

function easeInOutQuad (t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;

}
const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
sliderButtonBack.addEventListener('click', ScrollBack)
sliderButtonForward.addEventListener('click', ScrollForward)


HomeButton.forEach(section => {
  console.log('AddedEvent Listener')

section.addEventListener('click', MoveHome);
});
//HomeButton.addEventListener('click', MoveHome);
