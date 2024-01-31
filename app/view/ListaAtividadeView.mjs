import View from "./View.mjs"

export default class ListaAtividadeView extends View {
    _template(model) {
        let html = ""

        model.forEach((tarefa) => {
            html += `
            <li class="tarefa">
                <button class="atividade" >
                    <h2>${tarefa.id}</h2>
                    <p>${tarefa.titulo}</p>
                    <span class="estado ${tarefa.estado}">${tarefa.estado}</span>
                </button>
            </li>
            `
        })
        return html
    }
}
