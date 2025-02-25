// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

async function getInputValue(input_id){
    let input_value = await document.getElementById(input_id).value;
    return await checkInputValue(input_value);
}


/* Regex 
value.match(/^(?!\s*$).+|^\s+$/i)
*/



async function checkInputValue(value){
  //  alert(`value: ${value}`);
    if(value.length === 0 || value.match(/^\s+$/i) ){
        return alert(`Por favor, ingresa un nombre válido. \nNombre ingresado: ${value}.`);
    } else {
  //      alert("GOOD");
        return value;
    }
}

function agregarAmigo(input_id){
    getInputValue(input_id);
}
