const form = document.getElementById('formulario');
const cmpoA = document.getElementById('n1');
const cmpoB = document.getElementById('n2');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const msgSucesso = `Campos preenchidos corretamente! O número ${cmpoA.value} é menor que o número ${cmpoB.value}. `
    if(cmpoA.value <= cmpoB.value){
        const containerMensagemSucesso = document.getElementById('sucesso-mensagem');
        containerMensagemSucesso.innerHTML = msgSucesso;
        containerMensagemSucesso.style.display = 'block';

        cmpoA.value = '';
        cmpoB.value = '';

        function removeMsg() {
            setTimeout(function(){
                document.getElementById('sucesso-mensagem').innerHTML = "";
                containerMensagemSucesso.style.display = 'none'
            }, 4000);
            ;
        }
        removeMsg()
        

    } else {
        n2.style.border = '1px solid red';
        document.getElementById('erro-mensagem').style.display = 'block';
    }
    

});



n2.addEventListener('keyup', function(e) {
    console.log(e.target.value)

    if (cmpoA.value >= cmpoB.value) {
        n2.classList.add('erro')
        document.getElementById('erro-mensagem').style.display = 'block';
    } else {
        n2.classList.remove('erro')
        document.getElementById('erro-mensagem').style.display = 'none';
    }
});

