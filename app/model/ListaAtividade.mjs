import Atividade from "./Atividade.mjs"

export default class ListaAtividade {
    constructor(listaInicial = []) {
        this._lista =
            (typeof listaInicial === "object") &&  listaInicial != null
                ? listaInicial.map(
                      (tarefa) =>
                          new Atividade(
                              tarefa.id,
                              tarefa.titulo,
                              tarefa.estado,
                              tarefa.descricao
                          )
                  )
                : []
    }

    get lista() {
        return this._lista
    }

    set lista(atividade) {
        
        this._lista = [...this._lista, atividade]
    }

    get tamanho() {
        return this._lista.length
    }

}
