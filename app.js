// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];
const LISTA_AMIGOS = "listaAmigos";
const INPUT_FIELD = "amigo";

async function getInputValue(input_id){
    let input_value = await document.getElementById(input_id).value;
    return await checkInputValue(input_value);
}

function clearInputField(){
    let field = document.getElementById(INPUT_FIELD);
    field.value = "";
}



async function checkInputValue(value){
    let lowerCaseValue = value.toLowerCase(value);

    if((lowerCaseValue.length < 3) || lowerCaseValue.match(/^\s+$/i)){
        alert(`El nombre ingresado debe contener al menos 3 carácteres. \nNombre ingresado: ${value}.`);
        return Promise.reject("Not enough characters.");
    } else if(lowerCaseValue.length >= 24){
        alert(`El nombre ingresado debe contener menos de 24 carácteres.`);
        return Promise.reject("Too much characters.");     
        /* TO-DO: Correct case-sensitive matching */
    } else if(friends.includes(value)) {
        alert(`El nombre ingresado ya existe: ${value}`);
        return Promise.reject("Name already exists.");
    } else {
        return value;
    }
}

async function agregarAmigo(input_id){
    let friend = await getInputValue(input_id);

    if(friend.length > 0){
        friends.push(friend);
    }
    displayFriends(friend);

    clearInputField();
}




function displayFriends(friend){
    const friendsList = document.getElementById(LISTA_AMIGOS);
    friendsList.innerHTML = "";
    for (let friend of friends){
        let node = document.createElement("li");
        node.innerHTML = `${friend}`;
        friendsList.appendChild(node);
    }
}

function sortearAmigo(){
    const MIN = 0;
    const MAX = friends.length;

    let friendIndex = Math.floor((Math.random() * (MAX - MIN) + MIN));
    console.log(`Numero sorteado: ${friendIndex}`);

    /* TO-DO: display results

    // update 'results' field

    */
}
