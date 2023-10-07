import { HeaderStyle } from "./headerStyle.jss"

export const Header = () => {
    const style = HeaderStyle();

    return <header className={style.header}>
        encabezado
    </header>
}