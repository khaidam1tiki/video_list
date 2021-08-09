/*
  type value:
  - text
  - email
  - number
  - decimal
  - tel: numpad
  - search: has search icon
  - url

  confirmType value:
  - enter
  - done
  - go
  - next
  - previous
  - search
  - send
*/

Component({
  props: {
    type: "text",
    value: "",
    placeholder: "",
    disabled: false,
    maxlength: 255,
    autoFocus: false,
    confirmType: "enter",
    animation: undefined,
    onChange: () => undefined,
    onConfirm: () => undefined,
    onFocus: () => undefined,
    onBlur: () => undefined
  },
  onInit() {
    console.log("input animation", this.props.animation);
  },
  deriveDataFromProps() {
    console.log("deriveDataFromProps", this.props.animation);
  },
  didUpdate() {
    console.log("updated input animation", this.props.animation);
  }
});