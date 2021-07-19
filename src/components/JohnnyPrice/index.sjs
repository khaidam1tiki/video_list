const displayPrice = price => parseInt(price).toLocaleString("it-IT", {style : "currency", currency : "VND"});

export default {
  displayPrice
};