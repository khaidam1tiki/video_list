import store from "../../../../redux/store";

Component({
  data: {
    myText: "",
    unsubscribe: undefined
  },
  onInit() {
    this.setData({unsubscribe: store.subscribe(() => {
      const { myTextReducer } = store.getState();
      if (this.data.myText === myTextReducer)
        this.setData({myText: myTextReducer});
    })});
  },
  didUnmount() {
    if (this.data.unsubscribe) this.data.unsubscribe();
  }
});

