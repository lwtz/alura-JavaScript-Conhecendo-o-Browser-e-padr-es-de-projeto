class NegociacaoController {
    /*
        Por padrão se nao for definido um constructor, ele vem vazio
        constructor() {}
     */

    constructor() {
        let $ = document.querySelector.bind(document)
        this._$inputData = $('#data')
        this._$inputQuantidade = $('#quantidade')
        this._$inputValor = $('#valor')

        this._$listaNegociacoes = new ListNegociacoes()
        this._$negociacoesView = new ViewNegociacoes($('#negociacoesView'))
        this._$negociacoesView.update(this._$listaNegociacoes)

        this.$_mensagem = new Mensagens()
        this.$_mensagemView = new MensagemView($('#msgView'))
        this.$_mensagemView.update(this.$_mensagem)
    }

    adiciona(event) {
        event.preventDefault()
        this._$listaNegociacoes.adiciona(this._criarNegociacao())
        this._$negociacoesView.update(this._$listaNegociacoes)
        this.$_mensagem.setTexto = 'Add com sucesso'
        this.$_mensagemView.update(this.$_mensagem)

        this._limpaForm()
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.txtToData(this._$inputData.value),
            this._$inputQuantidade.value,
            this._$inputValor.value
        )
    }

    _limpaForm() {
        this._$inputData.value = ''
        this._$inputValor.value = 1
        this._$inputQuantidade = 1
        this._$inputData.focus()
    }
}
