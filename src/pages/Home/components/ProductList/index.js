import myx from "../../../../services/myx";

Component({
  data: {
    itemWidth: undefined,
  },
  props: {
    productList: [],
    loading: false,
  },
  async onInit() {
    const systemInfo = await myx.getSystemInfo();
    this.setData({itemWidth: systemInfo.screenWidth * (50 / 100) - 14});
  },
  methods: {
    onEndReached(e) {
      if (this.data.loading) return;
      console.log("khai reach end", e);
      this.setData({loading: true});
      setTimeout(() => {
        const cloneProductList = [...this.data.productList];
        const newProductList = cloneProductList.concat([{}, {}, {}, {}]);
        this.setData({productList: newProductList, loading: false});
      }, 5000);
    },
  }
});