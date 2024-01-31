import View from "./View.mjs"

export default class AtividadeView extends View {
    _template(model) {
        return `<section class="modal">
        <form class="form form-atividade">
            <button type="button" class="btn-close">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="grupo-input">
                <label
                    ><input
                        type="text"
                        name="input-nome-atividade"
                        class="input-nome-atividade"
                        placeholder=${model.titulo}
                /></label>
            </div>
            <div class="grupo-input input-status">
                <label for="input-status">Status: </label>
                <select name="input-status" id="input-status">
                    <option disable value="${model.estado}">${
            model.estado
        }</option>
                    <option value="nao-iniciado">Não iniciado</option>
                    <option value="em-andamento">Em andamento</option>
                    <option value="concluido">Concluído</option>
                </select>
            </div>
            <div class="grupo-input input-descricao">
                <label for="input-descricao">Descrição</label>
                <textarea
                    name="input-descricao"
                    id="input-descricao"
                    cols="30"
                    rows="10"
                >${model.descricao || " "}</textarea>
            </div>
            <div class="grupo-botoes">
                <button type="button" class="btn btn-cancelar">Cancelar</button>
                <button type="submit" class="btn">Salvar</button>
                <button type="button" class="btn btn-excluir">Excluir</button>
            </div>
        </form>
    </section>`
    }

    desrenderizar(model) {
        this._elemento.innerHTML -= this._template(model)
    }
}
