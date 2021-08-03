class ListNegociacoes {
    constructor() {
        this._negociacoes = []
    }


    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    get negociacao() {
        // Cria uma cópia da lista quando vai retornar. Evitando que se possa mexer de forma não autorizada
        // Programação defensiva
        return [].concat(this._negociacoes)
    }
}
