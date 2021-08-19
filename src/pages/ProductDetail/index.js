import myx from "../../services/myx";

Page({
  onReady() {
    myx.hideBackHome({hide: true});
  },
  // eslint-disable-next-line no-unused-vars
  async onLoad(query){
    try {
      const systemInfo = await myx.getSystemInfo();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight, 
        screenWidth: systemInfo.screenWidth
      });
    }
    catch (err) {
      console.log(err);
    }
  },
});