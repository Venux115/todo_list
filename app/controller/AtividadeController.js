import Atividade from "../model/Atividade.mjs";
import AtividadeView from "../view/AtividadeView.mjs";
import FormController from "./FormController.js";

export default class AtividadeController {
    #atividade;
    #atividadeView;
    #formController;
    #lista;
    
    constructor(lista, { id, titulo, estado, descricao }) {
        this.#atividade = new Atividade(id, titulo, estado, descricao);
        this.#atividadeView = new AtividadeView(
            document.querySelector(".base")
        );
        this.#lista = lista;

        this.abrirAtividade();
        this.#formController = new FormController();
        this.#configurarFormulario();
    }

    abrirAtividade() {
        this.#atividadeView.renderizar(this.#atividade);
    }

    #editar(dados) {
        this.#atividade.titulo = dados.titulo;
        this.#atividade.estado = dados.estado;
        this.#atividade.descricao = dados.descricao;

        let novaLista = this.#lista.map((atividade) => {
            if (atividade.id == this.#atividade.id) {
                let novaAtividade = new Atividade(
                    atividade.id,
                    dados.titulo,
                    dados.estado,
                    dados.descricao
                );
                return novaAtividade;
            }
            return atividade;
        });

        let listJSON = novaLista.map((atividade) => {
            return atividade.dados;
        });

        localStorage.setItem("tarefas", JSON.stringify(listJSON));

        this.#atividadeView.renderizar(this.#atividade);

        this.#configurarFormulario();
    }

    #excluir() {
        let novaLista = this.#lista.filter((atividade) =>
            atividade.id != this.#atividade.id ? true : false
        );
        let listaJSON = novaLista.map((atividade) => {
            return atividade.dados;
        });
        localStorage.setItem("tarefas", JSON.stringify(listaJSON));
        window.location.reload();
    }

    #configurarFormulario() {
        this.#formController.configurarSubmit((dados) => {
            this.#editar(dados);
            this.#formController.carregarForm();
            this.#configurarFormulario();
        });
        this.#formController.configurarBtnFechar();

        this.#formController.configurarBtnCancelar(() => {
            this.#atividadeView.renderizar(this.#atividade);
            this.#formController.carregarForm();
            this.#configurarFormulario();
        }, this.#atividade);

        this.#formController.configurarBtnExcluir(() => {
            this.#excluir();
            this.#formController.carregarForm();
            this.#configurarFormulario();
        });
    }
}
