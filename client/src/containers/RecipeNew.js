import React, { Component } from "react";

class RecipeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <p>title is {title}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button>Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default RecipeNew;
