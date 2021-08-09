import color from "../../constants/color";
import myx from "../../services/myx";

Page({
  data: {
    statusBarHeight: 0,
    shoppingIcon: "shopping-cart",
    indicatorActiveColor: color.green,
    locationIconColor: color.green,
    screenHeight: undefined,
    hasHeaderBottomBorder: false,
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
    this.lottieContext = my.createLottieContext("lottie");
    try {
      const systemInfo = await myx.getSystemInfo();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight, 
        screenHeight: systemInfo.screenHeight, 
        screenWidth: systemInfo.screenWidth
      });
      console.log(systemInfo);
    }
    catch (err) {
      console.log(err);
    }
  },
  onReady() {
    this.animation = my.createAnimation();
    this.headerAnimation = my.createAnimation();
    this.inputAnimation = my.createAnimation();
    console.log(this.inputAnimation);
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
  onScroll(e) {
    if (e.detail.scrollTop > 100) {
      console.log("den day", this.data.statusBarHeight);
      this.headerAnimation.height(32).backgroundColor(color.white).step({duration: 200});
      this.inputAnimation.width(this.data.screenWidth - 16 - 95 - 32).top(this.data.statusBarHeight + 4).step({duration: 200});
      this.setData({
        headerAnimation: this.headerAnimation.export(),
        inputAnimation: this.inputAnimation.export(),
        shoppingIcon: "shopping-cart-black",
        hasHeaderBottomBorder: true
      });
    }
    else {
      this.headerAnimation.height(83.5).backgroundColor(color.green).step({duration: 200});
      this.inputAnimation.width(this.data.screenWidth - 32).top(this.data.statusBarHeight + 56).step({duration: 200});
      this.setData({
        headerAnimation: this.headerAnimation.export(),
        inputAnimation: this.inputAnimation.export(),
        shoppingIcon: "shopping-cart",
        hasHeaderBottomBorder: true
      });
    }
  },
  play() {
    this.lottieContext.play();
  },
  pause() {
    this.lottieContext.pause();
  },
});