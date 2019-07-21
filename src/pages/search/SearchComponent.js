import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import { connect } from "react-redux";
import { searchAction } from "../../store/actions";
import { getSearchResults } from "../../store/selectors";
import SearchForm from "../../components/SearchForm";
import ResultContainer from "../../components/ResultContainer"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 40,
    marginBottom: 40
  },
}))

const SearchComponent = ({ searchAction, searchResults }) => {
  const classes = useStyles();

  const handleSubmit = value => {
    searchAction(value.search);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Card>
        <SearchForm onSubmit={handleSubmit} />
        <Divider />
        {(!searchResults || searchResults.length === 0) ? <Container className={classes.container}>No data</Container> :
        <ResultContainer searchResults={searchResults}/>}
      </Card>
    </Container>
  );
};

export default connect(
  state => {
    return {
      searchResults: getSearchResults(state)
    };
  },
  {
    searchAction
  }
)(SearchComponent);
