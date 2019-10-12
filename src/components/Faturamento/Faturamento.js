import React, {Component} from 'react'

class Faturamento extends Component {

    constructor(props){
        super(props)
        this.state = {
            detalhamento : []
        }
    }

    componentDidMount(){
        fetch('http://devup.com.br/php/api-dashboard/api/faturamento')
.then(result => result.json().then(data => this.setState(data)))
    }

    render(){
        return (
            <div>
                <h2 className="mt-2 text-white"> Faturamento </h2>

                <div className="row">
                    <div className="col">
                        <div className="card bg-primary">
                        <div className="card-header text-white">
                            Total por forma de pagamento
                        </div>

                        <table className="table text-white">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {
                                    this.state.detalhamento.map((item,indice) => {
                                        return (
                                            <tr key={indice}>
                                            <td>{item.descricao}</td>
                                            <td className="text-right">
                                                {item.valor.toLocaleString("pt-br", {style: "currency", currency : "BRL"})}
                                            </td>
                                        </tr>
                                        )
                                    })

                            }
                            </tbody>
                        </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faturamento;