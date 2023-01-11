<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      :class="{ filters: slideShow }"
    >
      <div class="container bottom-nav">
        <a class="navbar-brand" href="#"
          ><svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
              fill="#1D2026"
              fill-rule="nonzero"
            /></svg
        ></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Collections</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Women</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div class="d-flex avatar">
            <div class="products">
              <span class="notify" v-if="productsInCart.length > 0">{{
                count
              }}</span>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fill-rule="nonzero"
                  @click="showCart"
                />
              </svg>
              <div class="product" v-if="showInCart">
                <div class="card">
                  <h5 class="card-header">Cart</h5>
                  <h5
                    v-if="count == 0 || productsInCart.length == 0"
                    class="card-title text-black-50 fw-bold d-flex justify-content-center"
                  >
                    Your cart is empty.
                  </h5>
                  <div class="card-body">
                    <div v-if="count > 0">
                      <div
                        class="product-card"
                        v-for="productInCart in productsInCart"
                        :key="productInCart.price"
                      >
                        <div class="product-card-image">
                          <img src="../assets//image-product-1-thumbnail.jpg" />
                        </div>
                        <div>
                          <p class="card-text text-black-50">
                            Fall Limited Edition Sneakers
                          </p>
                          <div class="total">
                            <p class="text-black-50">
                              ${{ price }}.00<span>x</span>
                              <span>{{ count }}</span>
                            </p>
                            <span class="tprice">${{ count * price }}.00</span>
                          </div>
                        </div>
                        <div class="del">
                          <svg
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <defs>
                              <path
                                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                id="a"
                              />
                            </defs>
                            <use
                              fill="#C3CAD9"
                              fill-rule="nonzero"
                              xlink:href="#a"
                              @click="removeProduct"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button
                      v-if="
                        count > 0 && empty == false && productsInCart.length > 0
                      "
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="../assets/image-avatar.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section :class="{ filters: slideShow }">
      <div class="container">
        <div class="card">
          <div class="box">
            <img
              :src="displyedImage"
              alt="product 1"
              @click="slideShowDisplay"
            />
            <div class="showing">
              <div
                v-for="imageProduct in imageProducts"
                :key="imageProduct"
                class="cardImage"
              >
                <img
                  class="images"
                  :class="Clicked"
                  :src="require('../assets/' + imageProduct)"
                  alt="imageProduct"
                  @click="SelectedIndex"
                />
              </div>
            </div>
          </div>
          <!-- Slide For Mobile Screen -->
          <div class="boxSlide">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/image-product-1.jpg"
                    class="d-block w-100"
                    alt="1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/image-product-2.jpg"
                    class="d-block w-100"
                    alt="2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/image-product-3.jpg"
                    class="d-block w-100"
                    alt="3"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/image-product-4.jpg"
                    class="d-block w-100"
                    alt="4"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <!-- Slide For Mobile Screen -->
          <div class="details">
            <h6>Sneaker Company</h6>
            <h2>Fall Limited Edition Sneakers</h2>
            <p class="text-black-50">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <p class="price">${{ price }}.00 <span>50%</span></p>
            <p class="oldPrice">${{ price * 2 }}.00</p>
            <div class="counter">
              <div class="count">
                <span class="dec" @click="decrease">-</span>
                <span>{{ count }}</span>
                <span class="inc" @click="increase">+</span>
              </div>

              <div class="addCart">
                <button @click="addToCart">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="currentColor"
                      fill-rule="nonzero"
                    />
                  </svg>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slideshow">
      <div class="modal" tabindex="-1" v-if="slideShow">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="slideShowDisplay"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../assets/image-product-1.jpg"
                      class="d-block w-100"
                      alt="1"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/image-product-2.jpg"
                      class="d-block w-100"
                      alt="2"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/image-product-3.jpg"
                      class="d-block w-100"
                      alt="3"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/image-product-4.jpg"
                      class="d-block w-100"
                      alt="4"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Lidya</a>.
    </div>
  </div>
</template>
<script>
export default {
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
      displyedImage:
        "https://lidyaboshra.github.io/ecommerce-product-page-main/img/image-product-1.c95272fd.jpg",
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
      console.log(event.target.src);
      this.displyedImage = event.target.src;
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
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kumbh+Sans:wght@400;700&display=swap");
body {
  font-family: "Kumbh Sans", sans-serif;
}
svg {
  vertical-align: unset;
}
.avatar img {
  width: 40px;
}
.avatar svg {
  margin: 10px;
  margin-right: 30px;
}
p {
  font-size: 16px;
}
nav {
  margin: 20px;
}
.bottom-nav {
  padding-bottom: 25px;
  border-bottom: 2px solid #ddd;
}
.nav-item {
  position: relative;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
}
.nav-link {
  margin-right: 0.5em;
}
.nav-link::after {
  position: absolute;
  content: "";
  border: 2px solid hsl(26, 100%, 55%);
  bottom: -30px;
  width: -webkit-fill-available;
  left: 0;
  display: none;
}
.nav-link:hover::after {
  display: block;
}
/* Body Of Product */
section {
  display: flex;
}
.card {
  flex-direction: row;
  padding: 30px;
  border: none;
  gap: 100px;
}

.card img {
  width: 460px;
  margin-right: 20px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  margin-bottom: 20px;
}
.box img {
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  cursor: pointer;
}
.showing {
  display: flex;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}

.showing img {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 460px;
  gap: 15px;
}
.details h6 {
  color: hsl(26, 100%, 55%);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.details h2 {
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: left;
}
.details p {
  text-align: left;
}
.price {
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.price span {
  color: hsl(26, 100%, 55%);
  padding: 1px 10px;
  font-size: 14px;
  margin-left: 15px;
  background-color: hsl(25, 100%, 94%);
  border-radius: 5px;
}
.oldPrice {
  font-weight: 700;
  position: relative;
  color: #d1d1d1;
  width: 63px;
}
.oldPrice::after {
  position: absolute;
  content: "";
  bottom: 9px;
  left: 0;
  border: 1px solid #d1d1d1;
  width: 61px;
}
.counter {
  display: flex;
  align-items: center;
}

.counter .count {
  background: #f5f5f5;
  padding: 8px 10px;
  margin-right: 18px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}
.counter .count span {
  margin: 10px;
  font-weight: 700;
  font-size: 20px;
}
.dec,
.inc {
  cursor: pointer;
  padding: 3px 7px;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  user-select: none;
}

.dec:hover,
.inc:hover {
  background-color: hsl(25, 100%, 94%);
}
.addCart svg {
  color: white;
}
.addCart button {
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  color: white;
  background-color: hsl(26, 100%, 55%);
  font-weight: 700;
}
.clickable {
  filter: opacity(0.5);
  -webkit-filter: opacity(0.5);
  position: relative;
  outline: 3px solid hsl(26, 100%, 55%);
}

.products {
  position: relative;
}
.product {
  position: absolute;
  z-index: 999;
  right: -53px;
  width: max-content;
}
.notify {
  position: absolute;
  right: 16px;
  top: -6px;
  width: 30px;
  background: hsl(26, 100%, 55%);
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}
.product .card {
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0;
  width: 400px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  gap: 0;
}
.card-header {
  background-color: transparent;
  padding: 20px 30px;
  font-weight: 700;
  font-size: 16px;
}
.product-card {
  display: flex;
  margin-bottom: 10px;
}
.product-card p {
  margin-bottom: 0;
}
.product-card-image {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}
.product-card-image img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}
.card-body button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  background-color: hsl(26, 100%, 55%);
  padding: 14px;
  border-radius: 10px;
  font-weight: 700;
  width: 100%;
  border: none;
  color: white;
}
.total {
  display: flex;
  gap: 10px;
}
.total span {
  margin-left: 3px;
}
.tprice {
  font-weight: 700;
}
.del {
  display: flex;
  margin-left: 7px;
}
.products svg {
  cursor: pointer;
}
.modal {
  display: block;
}
.modal-content {
  background-color: transparent;
  border: none;
}
.modal-header {
  border: none;
}
.carousel,
.modal-header .btn-close {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.modal-footer {
  justify-content: center;
  border: none;
}
.modal-footer .showing img {
  margin: 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.filters {
  filter: opacity(0.5);
}
.card .carousel {
  display: none;
}
@media (max-width: 992px) {
  .card {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
  .navbar-collapse {
    flex-direction: column;
    display: flex;
  }
  .nav-link::after {
    bottom: 4px;
  }
}
@media (max-width: 550px) {
  .box {
    display: none;
  }
  .card .carousel {
    box-shadow: none;
    display: flex;
  }
  .card .carousel-inner {
    width: 332px;
  }
  .product {
    right: -180px;
  }
  .product .card {
    width: 370px;
  }
  .details {
    width: auto;
  }
}
@media (max-width: 480px) {
  .card .carousel-inner {
    width: 270px;
  }
  .product .card {
    width: 270px;
  }
  .product-card {
    flex-wrap: wrap;
  }
  .product {
    right: -122px;
  }
}
</style>
