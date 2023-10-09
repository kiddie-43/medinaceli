import { IMusician } from "../../../modelos/catalog/IMusician";

export const mapMusicianOptions = (data: IMusician[]) => {
    return data.map((item) => {
        return {
            id: item.id,
            text: item.name
        }

    })
}