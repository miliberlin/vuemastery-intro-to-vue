app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img
            :src="image"
            :class="[ !inStock ? 'out-of-stock-img' : '' ]"
            alt="">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="onSale">{{saleMessage}}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>{{ description }}</p>
            <p>Shipping: {{ shipping}}</p>
            <product-details :details="details"></product-details>
            <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            :style="{ backgroundColor: variant.color}"
            @mouseover="updateVariant(index)"
            class="color-circle"
            ></div>
            <button
            class="button"
            :class="{disabledButton: !inStock}"
            :disabled="!inStock"
            @click="addToCart"
            >Add to Cart</button>
            <button class="button" @click="removeFromCart">Remove</button>
        </div>
        </div>
    </div>
    `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "These are some awesome socks!",
      selectedVariant: 0,
      inventory: 8,
      details: ["50% cotton", "30% wool", "20% polyester"],
      onSale: true,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    saleMessage() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale";
      }
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
