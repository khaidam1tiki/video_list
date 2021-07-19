export function convertToVND(price) {
  return parseInt(price).toLocaleString("it-IT", {style : "currency", currency : "VND"});
}