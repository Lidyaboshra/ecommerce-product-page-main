const app = Vue.createApp({
  data() {
    return {
      count: 0,
      price: 125,
      thumbnails: [
        "image-product-1-thumbnail.jpg",
        "image-product-2-thumbnail.jpg",
        "image-product-3-thumbnail.jpg",
        "image-product-4-thumbnail.jpg",
      ],
      imageProducts: [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg",
      ],
      displyedImage: "image-product-1.jpg",
      clicked: "",
      empty: true,
      productsInCart: [],
      showInCart: false,
      slideShow: false,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count != 0) {
        this.count--;
      }
    },
    SelectedIndex(event) {
      let allImages = document.querySelectorAll(".images");
      allImages.forEach((element) => {
        element.classList.remove("clickable");
      });
      event.target.classList.toggle("clickable");
      this.clicked = "";
      this.displyedImage = event.target.src.slice(29, 44) + ".jpg";
    },
    addToCart() {
      if (this.count > 0) {
        this.productsInCart.push({
          Photo: this.imageProducts[0],
          price: this.count,
        });
      }
      console.log(this.productsInCart.length);
      this.empty = false;
    },
    showCart() {
      this.showInCart = !this.showInCart;
    },
    removeProduct(event) {
      event.target.parentElement.parentElement.parentElement.remove();
      console.log(this.productsInCart.length--);
    },
    slideShowDisplay() {
      this.slideShow = !this.slideShow;
    },
  },
  mounted() {
    let DefaultImage = document.querySelector(".images");
    DefaultImage.classList.add("clickable");
  },
});
app.mount("#app");
