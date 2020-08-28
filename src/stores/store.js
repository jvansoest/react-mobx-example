import { observable, action, computed } from "mobx";

class MyStore {
  @observable birds = [];

  @action addBird = (bird) => {
    this.birds.push(bird);
  };

  @computed get birdCount() {
    return this.birds.length;
  }
}

/*export the instance such that everyone using this store
  will be using the same instance!*/
const store = new MyStore();
export default store;
