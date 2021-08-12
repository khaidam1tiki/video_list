Component({
  props: {
    screenWidth: 0,
    imageQuantity: 3
  },
  data: {
    activeImage: 1
  },
  methods: {
    onChange(e) {
      if (e.detail.current + 1 != this.data.activeImage) {
        this.setData({activeImage: e.detail.current + 1});
      }
    }
  }
});