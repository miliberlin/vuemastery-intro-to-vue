const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "These are some awesome socks!",
      image: "./assets/images/socks_green.jpg",
      url: "http://test.de",
      inventory: 8,
      onSale: true,
    };
  },
});
