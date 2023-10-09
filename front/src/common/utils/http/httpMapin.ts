import { HttpMethod } from "../../enums/metod"

export const httpData = (metod: HttpMethod, data?: any) => {
    return {
        metod,
        data: data ,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // Especificar que estás enviando datos en formato JSON
        },
    }
}