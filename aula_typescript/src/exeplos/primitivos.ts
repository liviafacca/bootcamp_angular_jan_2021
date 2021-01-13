 export function exemploTipos(){
    const numero: number=5;
    const nome: string="livia";
    const ehumano: boolean=false;
    
    console.log("o numero é "+ numero.toString());
    console.log ("o nome é" + nome);
    console.log ("o ehumano é"+ ehumano);
}

export function exemploIfLoop(){
let contador = 0;
while (contador<=5) { 
   if(contador === 2){
       console.log("chegou a 2");
   } else{
       console.log("não chegou");

   }
    console.log("contador " + contador)
    contador++;
    
}
}

