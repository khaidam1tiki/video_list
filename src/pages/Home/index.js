import color from "../../constants/color";
import myx from "../../services/myx";

Page({
  statusBarHeight: 0,
  data: {
    indicatorActiveColor: color.green,
    locationIconColor: color.green,
    screenHeight: undefined,
    tabs1: [
      { title: "Tab" },
      { title: "Tab" },
      { title: "Tab" },
      { title: "Tab" }
    ],
    tabs2: [
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
      { title: "Tab", icon: "home" },
      { title: "Tab 5", icon: "home" }
    ],
    productList: [
      {}, {}, {}, {}
    ]
  },
  // eslint-disable-next-line no-unused-vars
  async onLoad(query){
    try {
      const systemInfo = await myx.getSystemInfo();
      this.setData({statusBarHeight: systemInfo.statusBarHeight, screenHeight: systemInfo.screenHeight});
      console.log(systemInfo);
    }
    catch (err) {
      console.log(err);
    }
  },
  onReady() {
    console.log("khai onReady");
  },
  onShow() {
    console.log("khai Show");
  },
  onHide() {
  },
  onUnload() {
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  },
  onChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index
    });
  },
  onEndReached(e) {
    console.log("khai reach end", e);
    if (this.data.loading) return;
    console.log("khai reach end", e);
    this.setData({loading: true});
    setTimeout(() => {
      const cloneProductList = [...this.data.productList];
      const newProductList = cloneProductList.concat([{}, {}, {}, {}]);
      this.setData({productList: newProductList, loading: false});
    }, 5000);
  },
});