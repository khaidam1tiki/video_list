import _ from "lodash";

Component({
  props: {
    productList: []
  },
  data: {
    items: [
      {id: 1, itemImage: "../../../../assets/images/camera.png"},
      {id: 2, itemImage: "../../../../assets/images/ipad.png"},
      {id: 3, itemImage: "../../../../assets/images/monitor.png"},
      {id: 4, itemImage: "../../../../assets/images/tv.png"},
      {id: 5, itemImage: "../../../../assets/images/camera.png"},
      {id: 6, itemImage: "../../../../assets/images/monitor.png"},
      {id: 7, itemImage: "../../../../assets/images/tv.png"},
    ],
    currentSelectedId: 1,
  },
  onInit() {
    console.log("khai alo",this.props.productList);
  },
  methods: {
    selectItemHandler(selectedId) {
      console.log("khai 123");
      if (selectedId === this.data.currentSelectedId) return;
      const newSelectedItemIndex = _.findIndex(this.data.items, {id: selectedId});
      this.setData({currentSelectedId: this.data.items[newSelectedItemIndex].id});
    }
  }
});