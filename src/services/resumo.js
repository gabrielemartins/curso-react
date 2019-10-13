import { URL_MYAPI } from "./Base";

export function consultarResumo(){
    return fetch(`${URL_MYAPI}/resumo`).then(result => result.json())
}