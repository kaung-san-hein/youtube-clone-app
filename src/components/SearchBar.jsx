import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };
  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            name="searchTerm"
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
