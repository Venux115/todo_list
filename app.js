import ListaAtividadesController from "./app/controller/ListaAtividadesController.mjs"

const $ = document.querySelector.bind(document)

const AtividadeController = new ListaAtividadesController()

const $form = $("form")

$form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    AtividadeController.adicionarTarefa()
})
