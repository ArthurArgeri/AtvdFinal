
//criar Emprestimos 
async function criarEmprestimo(event) {
    event.preventDefault();
    const titulo_livro = document.getElementById("titulo_livro").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const data_emprestimo = document.getElementById("data_emprestimo").value;
    const data_devolucao = document.getElementById("data_devolucao").value;

    const urlCreate = `http://localhost:3031/create/${titulo_livro}/${autor}/${genero}/${data_emprestimo}/${data_devolucao}`;

    try {
        const resposta = await fetch(urlCreate, {
            method: 'GET',
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados.resposta);

            window.location.href="./index.html";
        } 
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
    }
}


//carregar Emprestimos
async function carregarEmprestimo() {
    const mostrarUrl = await fetch("http://localhost:3031/mostrar");
    const resposta = await mostrarUrl.json();

    const container = document.getElementById("divRes");
    container.innerHTML = "";

    resposta.forEach((cardEmprestimo) => {
        const emprestimoTabela = document.createElement('div');
        const idA = cardEmprestimo.id
        emprestimoTabela.innerHTML = `
            <div class="dados">
                <div class="card">
                    <div class="card-header">
                        <h3>${cardEmprestimo.titulo_livro}</h3>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover cardCorpo">
                            <tr>
                                <th><h5>Autor</h5></th>
                                <th><h5>Genero</h5></th>
                                <th><h5>data do emprestimo</h5></th>
                                <th><h5>data de devolucao</h5></th>
                                <th><h5>Funções</h5></th>
                            </tr>
                            <tr>
                                <td>${cardEmprestimo.autor}</td>
                                <td>${cardEmprestimo.genero}</td>
                                <td>${cardEmprestimo.data_emprestimo}</td>
                                <td>${cardEmprestimo.data_devolucao}</td>
                                <td>
                                        <a href="#" class="btn btn-primary">Editar</a>
                                    <button class="btn btn-danger" onclick="deletar(${idA})">Deletar</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(emprestimoTabela)
    });
}

//delete
async function deletar(id) {
    const resposta = await fetch(`http://localhost:3031/delete/${id}`);

    if (resposta.ok) {
        alert("Emprestimo deletado com sucesso!");
        location.reload() 
    } else {
        alert("Erro ao deletar aluno.");
    }
}
    /* 
//update
function redirectUpdate(id) {
    window.location.href = `update.html?id=${id}`;
}

function redirectIndex() {
    window.location.href = `index.html.html`;
}

async function updateFunc() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const titulo_livro = document.getElementById("titulo_livro").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const data_emprestimo = document.getElementById("data_filme").value;

    const urlUpdate = `http://localhost:3031/update/${(id)}/${(titulo_livro)}/${(autor)}/${(genero)}/${(data_emprestimo)}/${(data_devolucao)}`;

    try {
        const resposta = await fetch(urlUpdate, {
            method: 'GET',
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados.resposta);

            readAllFunc();
        } else {
            console.error('Erro ao atualizar filme');
        }
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
    }
}

 */

