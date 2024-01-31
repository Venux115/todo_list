export default class View {
    #elemento;

    constructor(elemento) {
        this.#elemento = elemento;
    }

    renderizar(model) {
        this.#elemento.innerHTML = this.template(model);
    }
}
