import color from "../../constants/color";
import myx from "../../services/myx";

Page({
  statusBarHeight: 0,
  data: {
    indicatorActiveColor: color.green,
    locationIconColor: color.green,
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
    ]
  },
  // eslint-disable-next-line no-unused-vars
  async onLoad(query){
    try {
      const systemInfo = await myx.getSystemInfo();
      this.setData({statusBarHeight: systemInfo.statusBarHeight});
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
  }
});