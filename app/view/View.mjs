export default class View {
    constructor(elemento) {
        this._elemento = elemento
    }

    renderizar(model) {
        this._elemento.innerHTML = this._template(model)
    }
}