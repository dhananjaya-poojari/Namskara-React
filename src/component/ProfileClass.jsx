import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Profile Class: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Add
        </button>
      </>
    );
  }
}
export default ProfileClass;
