class Negociacao {


    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor

        Object.freeze(this)
    }

    get volume() {
        return this._quantidade * this._valor
    }

    get data() {
        // Vai criar uma cópia do objeto date para nao ter como alterar ele, se querer setar uma data
        return new Date(this._data.getTime())
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

}
