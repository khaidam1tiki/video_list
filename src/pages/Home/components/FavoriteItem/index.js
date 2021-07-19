Component({
  props: {
    selected: false,
    itemId: undefined,
    onSelectItemHandler: () => undefined,
    itemImage: undefined
  },
  methods: {
    selectItem() {
      this.props.onSelectItemHandler(this.props.itemId);
    }
  }
});