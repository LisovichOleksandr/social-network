import style from "./idiomPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navetr from "../../../../navApparatus/Navetr";
const IdiomPage = ({ certainIdiom, setIdiom }) => {
  //   const match = { params: useParams() };
  const { id } = useParams();
  useEffect(() => {
    setIdiom(id);
  }, [id]);
  return (
    <div>
      <div>
        <Navetr />
      </div>
      {/* <button onClick={() => props.setIdiom(id)}>ok</button> */}
      <h1>{certainIdiom.idiom}</h1>
      <p>
        Description: <b>{certainIdiom.description}</b>
      </p>
      <p>
        Example: <b>{certainIdiom.example}</b>
      </p>
    </div>
  );
};
export default IdiomPage;
