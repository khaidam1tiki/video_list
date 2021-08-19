Component({
  props: {
    itemWidth: undefined,
    marginRight: 0
  },
  methods: {
    navigateTo() {
      console.log("Alo 123");
      my.navigateTo({url: "pages/ProductDetail/index"});
    }
  }
});