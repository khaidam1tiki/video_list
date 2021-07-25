Component({
  props: {
    title: "",
    onPressHandler: () => undefined,
    iconName: ""
  },
  methods: {
    onPress() {
      this.props.onPressHandler();
    }
  }
});