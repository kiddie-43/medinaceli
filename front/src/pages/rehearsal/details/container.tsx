import { useParams } from "react-router-dom";

export const DetailRehearsalContainer = () => {
  let { id } = useParams();
  console.log(id);
  return <>desde container </>;
};
