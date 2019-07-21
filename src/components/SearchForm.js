import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { reduxForm, Field } from "redux-form";
import { renderTextField, validate } from "../forms";

const useStyles = makeStyles(() => ({
  menu: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center"
  },
  textField: {
    width: 300
  },
  button: {
    width: 300,
    marginTop: 30 
  },
}));

const SearchForm = props => {
  const classes = useStyles();
  const { handleSubmit } = props;

  return (
    <CardContent>
      <form
        className={classes.menu}
        autoComplete="off"
        onSubmit={scale => handleSubmit(scale)}
      >
        <Field
          name="search"
          component={renderTextField}
          className={classes.textField}
          label="Search"
          type="email"
        />
        <div>
          <Button variant="contained" className={classes.button} type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </CardContent>
  );
};

export default reduxForm({
  form: "searchField",
  validate
})(SearchForm);
