const websocket = new WebSocket("ws://192.168.1.67:8080/chat");

// O manipulador de eventos “onopen” é chamado quando uma nova conexão é iniciada.
websocket.onopen = function() {
    console.log("Conexao foi aberta!")
}

// O manipulador de eventos “onerror” é chamado quando um erro é recebido durante a comunicação.
websocket.onerror = function(evt) {
    console.log("Erro de conexão!!")
}

// O manipulador de eventos “onclose” é chamado quando a conexão é finalizada.
websocket.onclose = function() {
    console.log("Conexao foi encerrada!")
}

// Recebe mensagens através do manipulador de eventos onmessage
websocket.onmessage = function (event) {
    let messagesArea = document.getElementById("mensagens");  // obtem o textarea 'mensagens'
    let jsonObj = JSON.parse(event.data); // obtem os dados do evento
    let message = jsonObj.user + ": " + jsonObj.message + "\r\n"; // dá quebra de linha nas mensagens
    messagesArea.value = messagesArea.value + message; // recoloca as mensagens com quebra de linha mo textarea
    messagesArea.scrollTop = messagesArea.scrollHeight; // scrolla sempre para o topo das mensagens*/
};

function connect () {
    websocket.onmessage;
}

function disconnect () {
    websocket.close(); // Encerra a conexão
}

function enviaMensagem() {
    const user = document.getElementById("usuario").value.trim(); // obtem o usuario
    if (user === "") { // se usuario estiver vazio
        alert ("Digite o seu nome!"); // Dá um aviso!
    }
    const mensagem = document.getElementById("messageInput"); // obtem o campo da mensagem
    const message = mensagem.value.trim(); // remove os espacos para validar
    if (message !== "") { // se a mensagem for diferente de vazio
        const jsonObj = {
            "user": `"${user}"`,
            "message": `"${message}"`
        } // une usuario e mensagem em um objeto json
        console.log("Convertido em JSON: " + JSON.stringify(jsonObj));
        websocket.send(JSON.stringify(jsonObj)); // transforma o objeto em string e envia pelo websocket
        mensagem.value = ""; // reseta o campo da mensagem
    }
    mensagem.focus(); // dá foco no campo de mensagem
}
