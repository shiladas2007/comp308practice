"use strict";
//let Ga=0;
//Ga="T";
//Ga=[];
//Ga={};
//self executing anonymous function
//IIFE=immediately invoked function expression
(function() {
  let fv = 0;
  /*function Start()
{
    let lv=0
    console.log('test ${fv}');
}*/
  //window.addEventListener("load",Start);

  //or

  /*window.addEventListener("load", function Start() {
    let lv = 0;
    console.log("test ${fv}");
  });*/

    window.addEventListener("load", ()=> {
        let lv = 0;
        console.log("test ${fv}");
    });
})();
