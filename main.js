const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      description: "These are some awesome socks!",
      image: "./assets/images/socks_green.jpg",
      url: "http://test.de",
      inventory: 8,
      inStock: false,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["36-38", "39-41", "42-44"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateImage(variantImg) {
      this.image = variantImg;
    },
  },
});
