let display = document.querySelector(".display");


/**
 * @rest el operador cuando es llamado en una función unifica los parametros que exceden los definidos en la función
 */

 function rest(one, two, ...others) {
    console.log(one, two, others);
    console.log(arguments);    
}



rest(1, 2, 3, 4, 5)