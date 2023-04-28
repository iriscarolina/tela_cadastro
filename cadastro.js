
function Validar (){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let name = document.getElementById('nome').value;
    // let data = document.getElementById('data').value;
    // let fone= document.getElementById('fone').value;
    // let CPF= document.getElementById('CPF').value;
    // let rua= document.getElementById('rua').value;

    if(!email|| !senha|| !name){
        alert("campos de preenchimento obrigatório. Favor preencher");
    }else{
        alert(" Campos preenchidos com sucesso!");
    }

    
}
