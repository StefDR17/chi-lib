function conversione1(){
    let chili = document.getElementById("chili").value;
    let libbre = parseFloat(chili) * 2.205;
    document.getElementById("risultato").innerHTML = libbre;
}

function conversione2(){
    let libbre = document.getElementById("libbre").value;
    let chili = parseFloat(libbre) / 2.205;
    document.getElementById("risultato").innerHTML = chili;
}