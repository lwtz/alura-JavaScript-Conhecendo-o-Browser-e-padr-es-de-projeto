class ViewNegociacoes extends View {
    constructor(elemento) {
        super(elemento)
    }

    _template(model) {
        return `
<table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
        </tr>
    </thead>
    <tbody>
        ${model.negociacao.map((n) => {
            return `
            <tr>
                <td>${DateHelper.dateToTxt(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>
            `
        }).join('')}
    </tbody>
    <tfoot>
        <td colspan="3"></td>
        <td>
            ${model.negociacao.reduce((total, n) => {
            return total + n.volume
        }, 0.0)}
        </td> 
    </tfoot>
</table>

     `
    }

}
