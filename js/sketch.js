let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

let Mundo = {posiciones:[]};

function nuevoMundo(Mundo, attributo){
  return Object.assign({}, Mundo, attributo);
}


function setup() {
  createCanvas(400, 400);
}




function eventoMouse(Mundo){
  //if(length(Mundo.posiciones) <= 10){
   return nuevoMundo(Mundo, {posiciones: cons(cons(mouseX, cons(mouseY,[])),Mundo.posiciones)} );
  //}
  //return crearMundo(Mundo,{});
}

function eventoTeclado(Mundo){
  if(isEmpty(Mundo) != true){
   return nuevoMundo(Mundo,{posiciones:rest(Mundo.posiciones)});
  }
  return nuevoMundo(Mundo,{});
}

function dibujar(Mundo){
  background(220);
  text(Mundo.posiciones,10,10);
}

function Tics(Mundo){
  text(mouseX,100,100);
  text(mouseY,140,100);
  return nuevoMundo(Mundo,{});
}


//////////////////////////////
function draw() {
  dibujar(Mundo);
  Mundo = Tics(Mundo);
}

function mousePressed(){
  Mundo = eventoMouse(Mundo);
}


function keyPressed(){
  Mundo = eventoTeclado(Mundo);
}
