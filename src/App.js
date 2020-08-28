import React from "react";
import { inject, observer } from "mobx-react";

@inject("MyStore")
@observer
class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.MyStore.addBird(bird);
    this.bird.value = "";
  };

  render() {
    const { MyStore } = this.props;
    // const MyStore = this.props.MyStore

    return (
      <div className="App">
        <h2>you have {MyStore.birdCount} birds.</h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            ref={(i) => (this.bird = i)}
            placeholder="Enter bird"
          ></input>
          <button>Ok</button>
        </form>
      </div>
    );
  }
}

export default App;
