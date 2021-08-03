class NegociacaoController {

    /*
        Por padrão se nao for definido um constructor, ele vem vazio

        constructor() {}

     */

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListNegociacoes()
    }

    adiciona(event) {
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criarNegociacao())
        this._limpaForm()
        console.log(this._listaNegociacoes.negociacao)
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.txtToData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaForm() {
        this._inputData.value = ''
        this._inputValor.value = 0
        this._inputQuantidade = 0
        this._inputData.focus()
    }
}
