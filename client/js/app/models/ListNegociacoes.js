class ListNegociacoes {
    constructor() {
        this._$negociacoes = []
    }


    adiciona(negociacao) {
        this._$negociacoes.push(negociacao)
    }

    get negociacao() {
        // Cria uma cópia da lista quando vai retornar. Evitando que se possa mexer de forma não autorizada
        // Programação defensiva
        return [].concat(this._$negociacoes)
    }
}
