let cadastro = []

function usernamme() {
    let cascalho = document.forms["brita"]["username"];
    if (cascalho.value.length > 3 && cascalho.value.length < 25) {
        cascalho.className = "input correct";
        document.getElementById("grama").innerHTML="";
    } else {
        cascalho.className = "input error";
        document.getElementById("grama").innerHTML="Username deve conter entre 3 a 25 caracteres<br>";
    }
}

function emmail() {
    let sedimentar = document.forms["brita"]["email"];
    if (sedimentar.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        sedimentar.className = "input correct";
        document.getElementById("mato").innerHTML=""
    } else {
        sedimentar.className = "input error";
        document.getElementById("mato").innerHTML="Email deve ser válido"
    }
}

function sennha() {
    let esmeralda = document.forms["brita"]["senha"];
    if (esmeralda.value.length > 7) {
        esmeralda.className = "input correct";
        document.getElementById("erva").innerHTML="";
    } else {
        esmeralda.className = "input error";
        document.getElementById("erva").innerHTML="A senha precisa conter ao menos 8 caracteres"
    }
}

function confrima() {
    let rubi = document.forms["brita"]["confirma"];
    if (rubi.value === document.forms["brita"]["senha"].value) {
        rubi.className = "input correct";
        document.getElementById("daninha").innerHTML=""
    } else {
        rubi.className = "input error";
        document.getElementById("daninha").innerHTML="As senhas devem ser iguais"
    }
}

function valores() {
    for (let i = 0; i < cadastro.length; i++) {
        
        
    }
}