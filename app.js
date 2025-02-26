// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];
const LISTA_AMIGOS = "listaAmigos";
const INPUT_FIELD = "amigo";
const RESULT_ELEMENT = "resultado";

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


async function getFriendsHTMLList() {
    const friendsList = await document.getElementById(LISTA_AMIGOS);
    return friendsList;
}

 async function clearFriendsHTMLList() {
    let friendsList = await getFriendsHTMLList();
    friendsList.innerHTML = "";
}

async function displayFriends(friend){
    clearFriendsHTMLList();
    let friendsList = await getFriendsHTMLList();
    console.log(`FriendsList: ${friendsList}`);
    for (let friend of friends){
        let node = document.createElement("li");
        node.innerHTML = `${friend}`;
        friendsList.appendChild(node);
    }
}

function sortearAmigo(){
    const MIN = 0;
    const MAX = friends.length;

    if(friends === null || friends.length < 1 || !Array.isArray(friends)){
        alert("Agrega algunos amigos a la lista!");
        return;
    }

    let friendIndex = Math.floor((Math.random() * (MAX - MIN) + MIN));

      displayResult(`El amigo sorteado es: ${friends[friendIndex]}`);
      
      clearFriendsHTMLList();
}

function displayResult(winText){
    const resultElement = document.getElementById(RESULT_ELEMENT);

    let resultItem = document.createElement("li");
    resultItem.innerHTML = winText;
    resultElement.appendChild(resultItem);
}
