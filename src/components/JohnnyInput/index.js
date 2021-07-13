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
  type: "text",
  value: "",
  placeholder: "",
  disabled: false,
  maxlength: 255,
  autoFocus: false,
  confirmType: "enter",
  onChange: () => undefined,
  onConfirm: () => undefined,
  onFocus: () => undefined,
  onBlur: () => undefined
});