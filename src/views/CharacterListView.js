import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchData } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    console.log(this.props.isFetching);
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  console.log(charsReducer);
  return {
    characters: charsReducer.characters,
    isFetching: charsReducer.isFetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchData
  }
)(CharacterListView);
