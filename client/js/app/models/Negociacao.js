class Negociacao {


    constructor(data, quantidade, valor) {
        this._$data = new Date(data.getTime());
        this._$quantidade = quantidade;
        this._$valor = valor

        Object.freeze(this)
    }

    get volume() {
        return this._$quantidade * this._$valor
    }

    get data() {
        // Vai criar uma cópia do objeto date para nao ter como alterar ele, se querer setar uma data
        return new Date(this._$data.getTime())
    }

    get quantidade() {
        return this._$quantidade
    }

    get valor() {
        return this._$valor
    }

}
