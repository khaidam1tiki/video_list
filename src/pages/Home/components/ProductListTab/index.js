Component({
  props: {
    active: false,
    itemId: undefined,
    onSelectItemHandler: () => undefined
  },
  methods: {
    selectItem() {
      this.props.onSelectItemHandler(this.props.itemId);
    }
  }
});