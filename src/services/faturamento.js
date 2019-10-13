import { URL_MYAPI } from "./Base";

export function exibirFaturamento(){
    return fetch(`${URL_MYAPI}/faturamento`).then(result => result.json())
}