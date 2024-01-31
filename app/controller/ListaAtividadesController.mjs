import Atividade from "../model/Atividade.mjs"
import ListaAtividadeView from "../view/ListaAtividadeView.mjs"
import ListaAtividade from "../model/ListaAtividade.mjs"
import AtividadeController from "./AtividadeController.js"

export default class ListaAtividadeController {
    constructor() {
        const $ = document.querySelector.bind(document)

        this._$inputTarefa = $(".input-tarefa")
        this._$listaTarefas = $(".lista-tarefas")
        
        let self = this
        this._listaAtividadeView = new ListaAtividadeView(this._$listaTarefas)
        this._listaTarefas = new Proxy(
            new ListaAtividade(JSON.parse(localStorage.getItem("tarefas"))),
            {
                set(alvo, propriedade, valor, proxy) {
                    Reflect.set(alvo, propriedade, valor, proxy)
                    self._listaAtividadeView.renderizar(alvo[propriedade])
                    return true
                },
            }
        )
        
        this._listaAtividadeView.renderizar(this._listaTarefas.lista)

        this._adicionarClick()
    }

    adicionarTarefa() {
        
        this._tarefa = new Atividade(
            this._listaTarefas.tamanho,
            this._$inputTarefa.value,
            "nao iniciado"
        )
        
        this._listaTarefas.lista = this._tarefa
        

        
        localStorage.setItem(
            "tarefas",
            JSON.stringify(this._listaTarefas.lista)
        )
        this._adicionarClick()
    }

    _adicionarClick() {
        const $$ = document.querySelectorAll.bind(document)
        const $listaDeAtividades = $$(".atividade")

        $listaDeAtividades.forEach((tarefa) => {
            const id = tarefa.querySelector("h2").textContent

            tarefa.addEventListener("click", () => {
                let atividade = this._listaTarefas.lista.filter((elemento) => {
                    if (elemento.id == id) {
                        return true
                    }
                })

                new AtividadeController(this._listaTarefas.lista, ...atividade)
            })
        })
    }
}
