
//criar Emprestimos 
async function criarEmprestimo() {
    const titulo_livro = document.getElementById("titulo_livro").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const data_emprestimo = document.getElementById("data_emprestimo").value;
    const data_devolucao = document.getElementById("data_devolucao").value;


    const resposta = await fetch(`http://localhost:3031/create/${titulo_livro}/${autor}/${genero}/${data_emprestimo}/${data_devolucao}`);

    if(resposta.ok) {
        alert("Emprestimo criado com sucesso!");
    }
}

//carregar Emprestimos
async function carregarEmprestimo() {
    const mostrarUrl = await fetch("http://localhost:3031/mostrar");
    const resposta = await mostrarUrl.json();

    const container = document.getElementById("divCards");
    container.innerHTML = "";

    resposta.forEach((cardEmprestimo) => {
        const emprestimoTabela = document.createElement('div');
        emprestimoTabela.innerHTML = `
            <div>
                <table class="table table-sm">
                    <tr>
                        <th><h5>Autor</h5></th>
                        <th><h5>Genero</h5></th>
                        <th><h5>data_emprestimo</h5></th>
                        <th><h5>data_devolucao</h5></th>
                    </tr>
                    <tr>
                        <td>${cardEmprestimo.titulo_livro}</td>
                        <td>${cardEmprestimo.autor}</td>
                        <td>${cardEmprestimo.genero}</td>
                        <td>${cardEmprestimo.data_emprestimo}</td>
                        <td>${cardEmprestimo.data_devolucao}</td>
                    </tr>
                </table>
                <a href="#" class="btn btn-primary">Criar</a>
                <a href="#" class="btn btn-info">Editar</a>
                <a href="#" class="btn btn-danger">Deletar</a>
            </div>
        `;

        container.appendChild(emprestimoTabela)
    });
}
window.onload = carregarEmprestimo();
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

//delete
async function deletar(id) {
    const resposta = await fetch(`http://localhost:3031/delete/${id}`);

    if (resposta.ok) {
        alert("Emprestimo deletado com sucesso!"); 
      } else {
        alert("Erro ao deletar aluno.");
      }
} */