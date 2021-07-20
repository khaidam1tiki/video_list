import myx from "../../../../services/myx";

Component({
  data: {
    itemWidth: undefined,
  },
  async onInit() {
    const systemInfo = await myx.getSystemInfo();
    console.log("khai 123 screenWidth", systemInfo.screenWidth);
    this.setData({itemWidth: systemInfo.screenWidth * (85 / 100)});
  }
});