import { URL_MYAPI } from "./Base";

export function listarConsultas(){
    return fetch(`${URL_MYAPI}/consultas`).then(result => result.json())
}