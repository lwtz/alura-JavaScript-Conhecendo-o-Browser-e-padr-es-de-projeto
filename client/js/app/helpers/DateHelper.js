class DateHelper {

    constructor() {
        // Erro para quando alguém querer instanciar a classe
        // Pq tem método que invoca diretamente pela classe
        throw new Error('Está classe não pode ser instanciada')
        /*
            Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
         */
    }

    static dateToTxt(data) {
        return `${data.getDate()} / ${data.getMonth() + 1} / ${data.getFullYear()}`
    }

    static txtToData(texto) {
        const reg = /\d{4}-\d{2}-\d{2}/

        if (!reg.test(texto)) {
            throw new Error('Tomou na jabiraca')
        } else {
            return new Date(...texto.split('-').map((item, index) => item - index % 2))
        }
    }


}
