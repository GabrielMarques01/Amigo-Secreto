let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para sortear!');
        return;
    }

    const copiaAmigos = [...amigos];
    const resultado = [];
    while (copiaAmigos.length) {
        const sorteado = copiaAmigos.splice(Math.floor(Math.random() * copiaAmigos.length), 1)[0];
        resultado.push(sorteado);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '<h3>Resultado:</h3>';
    resultado.forEach((amigo, index) => {
        const li = document.createElement('li');
        const proximo = resultado[(index + 1) % resultado.length];
        li.textContent = `${amigo} tirou ${proximo}`;
        listaResultado.appendChild(li);
    });
}
