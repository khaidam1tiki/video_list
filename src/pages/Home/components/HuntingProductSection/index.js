import myx from "../../../../services/myx";

Component({
  data: {
    itemWidth: undefined,
  },
  async onInit() {
    const systemInfo = await myx.getSystemInfo();
    this.setData({itemWidth: systemInfo.screenWidth * (87 / 100)});
  }
});