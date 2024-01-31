import Atividade from "../model/Atividade.mjs";
import ListaAtividadeView from "../view/ListaAtividadeView.mjs";
import ListaAtividade from "../model/ListaAtividade.mjs";
import AtividadeController from "./AtividadeController.js";

export default class ListaAtividadeController {
    #$inputTarefa;
    #$listaTarefas;
    #listaAtividadeView;
    #listaTarefas;
    constructor() {
        const $ = document.querySelector.bind(document);

        this.#$inputTarefa = $(".input-tarefa");
        this.#$listaTarefas = $(".lista-tarefas");

        let self = this;
        this.#listaAtividadeView = new ListaAtividadeView(this.#$listaTarefas);
        this.#listaTarefas = new Proxy(
            new ListaAtividade(JSON.parse(localStorage.getItem("tarefas"))),
            {
                set(alvo, propriedade, valor, proxy) {
                    Reflect.set(alvo, propriedade, valor, proxy);
                    self.#listaAtividadeView.renderizar(alvo[propriedade]);
                    return true;
                },
            }
        );

        this.#listaAtividadeView.renderizar(this.#listaTarefas.lista);

        this._adicionarClick();
    }

    adicionarTarefa() {
        const atividade = new Atividade(
            this.#listaTarefas.tamanho,
            this.#$inputTarefa.value,
            "nao iniciado"
        );

        this.#listaTarefas.lista = atividade;

        let listaEmJson = this.#listaTarefas.lista.map((atividade) => {
            return atividade.dados;
        });

        localStorage.setItem("tarefas", JSON.stringify(listaEmJson));

        this._adicionarClick();
    }

    _adicionarClick() {
        const $$ = document.querySelectorAll.bind(document);
        const $listaDeAtividades = $$(".atividade");

        $listaDeAtividades.forEach((tarefa) => {
            const id = tarefa.querySelector("h2").textContent;

            tarefa.addEventListener("click", () => {
                let atividade = this.#listaTarefas.lista.filter((elemento) => {
                    if (elemento.id == id) {
                        return true;
                    }
                });

                new AtividadeController(this.#listaTarefas.lista, ...atividade);
            });
        });
    }
}
