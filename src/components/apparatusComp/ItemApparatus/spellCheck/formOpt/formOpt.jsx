import { Field, reduxForm } from "redux-form";
import styles from "./formOpt.module.css";

const OptForm = (props) => {
  return (
    <div className={styles.form__opt}>
      <h3>{props.itemOpt.translate}</h3>
      <form onSubmit={props.handleSubmit}>
        <h4>{props.itemOpt.check[0]}</h4>
        <Field
          placeholder={props.itemOpt.check[0]}
          name={props.itemOpt.check[0] + props.itemOpt.id}
          component="input"
        />
      </form>
    </div>
  );
};

const OptReduxForm = reduxForm({
  form: "opt",
})(OptForm);

export default OptReduxForm;
