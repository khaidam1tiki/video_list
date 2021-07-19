import {convertToVND} from "../../../../services/format";

Component({
  props: {
    itemImage: undefined,
    myPrice: convertToVND(100000)
  }
});