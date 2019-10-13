import React, { Component } from 'react'
import { consultarResumo } from '../../services/resumo';

class Resumo extends Component {
    constructor(props){
        super(props);
        this.state = {
            consultas : {
                consultas_30dias_anteiores : 0,
                consultas_30dias_posteriores : 0
            },
            faturamento : {
                anterior : {
                    valor: 0,
                    comparativo : 0
                },
                previsao : {
                    valor: 0,
                    comparativo : 0
                }
            }
        }
    }

    componentDidMount(){
        consultarResumo().then(data => this.setState(data));
    }

    render() {
        return(
            <div>
                <h2 className="mt-2 text-white">Resumão</h2>

                <div className="row">
                    <div className="col">
                        <h3 className="text-white"> Consultas </h3>
                    
                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center text-white bg-primary">
                                    <div className="card-header">
                                        Mês anterior
                                    </div>
                                    <div className="card-body">
                                        { this.state.consultas.consultas_30dias_anteiores }
                                    </div>
                                </div>                             
                            </div>

                            <div className="col">
                                <div className="card mt-2 text-center text-white bg-primary">
                                    <div className="card-header">
                                        Mês Seguinte
                                    </div>
                                    <div className="card-body">
                                        { this.state.consultas.consultas_30dias_posteriores }
                                    </div>
                                </div>                             
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <h3 className="text-white"> Faturamento </h3>

                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center text-white bg-primary">
                                    <div className="card-header">
                                        Mês anterior
                                    </div>
                                    <div className="card-body">
                                        { this.state.faturamento.anterior.valor.toLocaleString("pt-br", {style : "currency", currency: "BRL"} ) }
                                        <span className={"badge ml-1 " + (this.state.faturamento.anterior.comparativo > 0 ? "badge-success" : "badge-danger")}>
                                            {this.state.faturamento.anterior.comparativo} %
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mt-2 text-center text-white bg-primary">
                                    <div className="card-header">
                                        Mês seguinte
                                    </div>
                                    <div className="card-body">
                                        { this.state.faturamento.previsao.valor.toLocaleString("pt-br", {style : "currency", currency: "BRL"} ) }
                                        <span className={"badge ml-1 " + (this.state.faturamento.previsao.comparativo > 0 ? "badge-success" : "badge-danger")}>
                                            {this.state.faturamento.previsao.comparativo} %
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Resumo;