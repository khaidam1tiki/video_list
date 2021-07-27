Component({
  props: {
    quality: "new",
  },
  data: {
    qualityTitle: "Mới 100%",
    qualityBadgeClass: "johnny-quality-badge-new",
  },
  onInit() {
    switch(this.props.quality) {
    case "new":
      this.setData({qualityTitle: "Mới 100%"}); break;
    case "likeNew":
      this.setData({qualityTitle: "Như Mới"}); break;
    case "good":
      this.setData({qualityTitle: "Còn Tốt", qualityBadgeClass: "johnny-quality-badge-good"}); break;
    default:
      return;
    }
  }
});