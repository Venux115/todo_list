export default class Atividade {
    #id;
    #titulo;
    #estado;
    #descricao;

    constructor(id, titulo, estado, descricao = null) {
        this.#id = id;
        this.#titulo = titulo;
        this.#estado = estado;
        this.#descricao = descricao;
        Object.freeze(Atividade);
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(titulo) {
        this.#titulo = titulo;
    }

    get estado() {
        return this.#estado;
    }

    set estado(estado) {
        this.#estado = estado;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get dados() {
        return {
            id: this.#id,
            titulo: this.#titulo,
            estado: this.#estado,
            descricao: this.#descricao,
        };
    }
}
