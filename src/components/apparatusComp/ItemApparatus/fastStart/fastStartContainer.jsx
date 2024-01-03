import { useSelector } from "react-redux";
import FastStart from "./fastStart";
import { getDataVerb } from "../../../../redux/wordsSelector";

const FastStartContainer = (props) => {
  const store = useSelector((state) => {
    let data = getDataVerb(state);
    return data.map((word) => word.translate);
  });
  return <FastStart wordRu={store} />;
};

export default FastStartContainer;
