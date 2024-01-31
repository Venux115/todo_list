export default class FormController {
    #$form;
    #$btnCancelar;
    #$titulo;
    #$estado;
    #$descricao;
    #$btnFechar;
    #$btnExcluir;

    constructor() {
        this.carregarForm();
    }

    carregarForm() {
        const $ = document.querySelector.bind(document);
        this.#$form = $(".form-atividade");
        this.#$btnCancelar = $(".btn-cancelar");
        this.#$titulo = $(".input-nome-atividade");
        this.#$estado = $("#input-status");
        this.#$descricao = $("#input-descricao");
        this.#$btnFechar = $(".btn-close");
        this.#$btnExcluir = $(".btn-excluir");
    }

    configurarSubmit(editarCallback) {
        this.#$form.addEventListener("submit", (evento) => {
            evento.preventDefault();

            editarCallback({
                titulo: this.#$titulo.value || this.#$titulo.placeholder,
                estado: this.#$estado.value,
                descricao: this.#$descricao.value,
            });
        });
    }

    configurarBtnCancelar(cancelarCallback, atividade) {
        this.#$btnCancelar.addEventListener("click", () => {
            this.#$descricao.value = atividade.descricao || " ";
            this.#$titulo.value = atividade.titulo;
            this.#$estado.value = atividade.estado;
            cancelarCallback();
        });
    }

    configurarBtnFechar() {
        this.#$btnFechar.addEventListener("click", () => {
            window.location.reload();
        });
    }

    configurarBtnExcluir(excluirCallback) {
        this.#$btnExcluir.addEventListener("click", () => {
            excluirCallback();
        });
    }
}
