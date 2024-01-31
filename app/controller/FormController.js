export default class FormController {
    constructor() {
        this.carregarForm()
    }

    carregarForm() {
        const $ = document.querySelector.bind(document)
        this._$form = $(".form-atividade")
        this._$btnCancelar = $(".btn-cancelar")
        this._$titulo = $(".input-nome-atividade")
        this._$estado = $("#input-status")
        this._$descricao = $("#input-descricao")
        this._$btnFechar = $(".btn-close")
        this._$btnExcluir = $(".btn-excluir")
    }

    configurarSubmit(editarCallback) {
        this._$form.addEventListener("submit", (evento) => {
            evento.preventDefault()

            editarCallback({
                titulo: this._$titulo.value || this._$titulo.placeholder,
                estado: this._$estado.value,
                descricao: this._$descricao.value,
            })
        })
    }

    configurarBtnCancelar(cancelarCallback, atividade) {
        this._$btnCancelar.addEventListener("click", () => {
            this._$descricao.value = atividade.descricao || " "
            this._$titulo.value = atividade.titulo
            this._$estado.value = atividade.estado
            cancelarCallback()
        })
    }

    configurarBtnFechar() {
        this._$btnFechar.addEventListener("click", () => {
            window.location.reload()
        })
    }

    configurarBtnExcluir(excluirCallback) {
        this._$btnExcluir.addEventListener("click", () => {
            excluirCallback()
        })
    }
}
