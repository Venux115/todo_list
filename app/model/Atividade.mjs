export default class Atividade {
    constructor(id, titulo, estado, descricao=null) {
        this._id = id
        this._titulo = titulo
        this._estado = estado
        this._descricao = descricao
        Object.freeze(Atividade)
    }

    get id() {
        return this._id
    }

    get titulo() {
        return this._titulo
    }

    get estado() {
        return this._estado
    }

    get descricao(){
        return this._descricao
    }

    set id(id) {
        this._id = id
    }

    set titulo(titulo) {
        this._titulo = titulo
    }

    set estado(estado) {
        this._estado = estado
    }

    set descricao(descricao) {
        this._descricao = descricao
    }
}
