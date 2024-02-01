import ListaAtividadesController from "./app/controller/ListaAtividadesController.mjs"

const $ = document.querySelector.bind(document)

const AtividadeController = new ListaAtividadesController()

const $form = $("form")

$form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    verificaFormulario(evento)
    AtividadeController.adicionarTarefa()
})

function  verificaFormulario(input){
    if (input){
        return true
    }
}
