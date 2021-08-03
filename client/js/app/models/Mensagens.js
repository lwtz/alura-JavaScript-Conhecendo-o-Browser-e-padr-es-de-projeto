class Mensagens {
    constructor(txt = 'Adicionado com sucesso!') {
        this.$_texto = txt
    }

    getTexto() {
        return this.$_texto
    }

    setTexto(texto) {
        return this.$_texto = texto
    }
}
