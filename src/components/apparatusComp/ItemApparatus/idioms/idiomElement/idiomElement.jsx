import { NavLink } from "react-router-dom";
import style from "./idiomElement.module.css";

const IdiomElement = ({ idioms, setIdiom }) => {
  return (
    <div className={style.idiom}>
      <ul>
        {idioms.map((idiom) => (
          <NavLink to={`/apparatus/idioms/${idiom.id}`}>
            <li
              onClick={() => {
                setIdiom(idiom.id);
              }}
              key={idiom.id}
            >
              {idiom.idiom}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
export default IdiomElement;
