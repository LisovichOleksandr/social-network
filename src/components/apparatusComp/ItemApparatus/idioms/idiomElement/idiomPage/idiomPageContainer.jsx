import { connect } from "react-redux";
import IdiomPage from "./idiomPage";
import { getCertainIdiom } from "../../../../../../redux/wordsSelector";
import { setIdiom } from "../../../../../../redux/wordsReducer";

const mapStateToProps = (state) => {
  return {
    certainIdiom: getCertainIdiom(state),
  };
};

const IdiomPageContainer = connect(mapStateToProps, { setIdiom })(IdiomPage);
export default IdiomPageContainer;
