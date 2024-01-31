import Atividade from "../model/Atividade.mjs"
import AtividadeView from "../view/AtividadeView.mjs"
import FormController from "./FormController.js"
import ListaAtividadeController from "./ListaAtividadesController.mjs"

export default class AtividadeController {
    constructor(lista, { id, titulo, estado, descricao }) {
        this._atividade = new Atividade(id, titulo, estado, descricao)
        this._atividadeView = new AtividadeView(document.querySelector(".base"))
        this._lista = lista

        this.abrirAtividade()
        this._formController = new FormController()
        this._configurarFormulario()
    }

    abrirAtividade() {
        this._atividadeView.renderizar(this._atividade)
    }

    _editar(dados) {
        this._atividade.titulo = dados.titulo
        this._atividade.estado = dados.estado
        this._atividade.descricao = dados.descricao

        let novaLista = this._lista.map((atividade) => {
            if (atividade.id == this._atividade.id) {
                let novaAtividade = new Atividade(
                    atividade.id,
                    dados.titulo,
                    dados.estado,
                    dados.descricao
                )
                return novaAtividade
            }
            return atividade
        })
        localStorage.setItem("tarefas", JSON.stringify(novaLista))

        this._atividadeView.renderizar(this._atividade)

        this._configurarFormulario()
    }

    _excluir() {
        let novaLista = this._lista.filter((atividade) =>
            atividade.id != this._atividade.id ? true : false
        )

        localStorage.setItem("tarefas", JSON.stringify(novaLista))
        window.location.reload()
    }

    _configurarFormulario() {
        this._formController.configurarSubmit((dados) => {
            this._editar(dados)
            this._formController.carregarForm()
            this._configurarFormulario()
        })
        this._formController.configurarBtnFechar()
        this._formController.configurarBtnCancelar(() => {
            this._atividadeView.renderizar(this._atividade)
            this._formController.carregarForm()
            this._configurarFormulario()
        }, this._atividade)
        this._formController.configurarBtnExcluir(() => {
            this._excluir()
            this._formController.carregarForm()
            this._configurarFormulario()
        })
    }
}
