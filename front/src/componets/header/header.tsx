import { useAppSelector } from "../../redux/hooks";
import { HeaderStyle } from "./headerStyle.jss";

export const Header = () => {
  const style = HeaderStyle();
  const { headerName } = useAppSelector((state) => state.header);
  return <header className={style.header}>{headerName}</header>;
};
