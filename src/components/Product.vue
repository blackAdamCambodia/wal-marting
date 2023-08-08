<script>
import axios from 'axios'

export default {
  data() {
    return {
      bestProducts: [],
      singleProduct:[], 
      products: [],
     
    }
    
  },
  mounted(param) {
    console.log(this.$route.params.id)
     this.getBestProduct()
     this.getSingleProductDetails()
     this.getRecentProducts()
  },
  methods:{
    getBestProduct(){
        axios
      .get(`https://sc2houduan.bitlandweb.com/addons/shopro/goods/lists?category_id=44&page=1`)
      .then((response) => {
        this.bestProducts = response.data.data.data
        console.log(this.bestProducts)
      })
    },
    getRecentProducts(){
        axios
      .get('https://sc2houduan.bitlandweb.com/addons/shopro/goods/lists?category_id=69&page=1')
      .then((response) => {
        this.products = response.data.data.data
        console.log(this.products)
      })
    },
    
    
    getSingleProductDetails(){
        let singleId= this.$route.params.id
        let that = this
        axios.get( `https://sc2houduan.bitlandweb.com/addons/shopro/goods/detail?id=${singleId}`)
        .then((response) => {
            that.singleProduct = response.data.data
            console.log(this.singleProduct) 
        })
    },
    addToCart(){
        axios
      .get('https://sc2houduan.bitlandweb.com/addons/shopro/cart',{"goods_list":[{"goods_id":17,"goods_num":1,"sku_price_id":67,"goods_price":"2999.00"}],"from":"goods"})
      .then((response) => {
        alert(response.data.data.msg)
        console.log(this.products)
      })
    }
    
    
}
}


</script>
<template>
    
    <div>
        <section class="mb-4 pt-3">
            <div class="container">
                <div class="bg-white shadow-sm rounded p-3">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 mb-4">
                            <div class="sticky-top z-3  gutters-10 d-flex">
                                <div class="col order-1 order-md-2">
                                    <div class="aiz-carousel product-gallery slick-initialized slick-slider"
                                        data-nav-for=".product-gallery-thumb" data-fade="true" data-auto-height="true">
                                        <div class="slick-list draggable" style="height: 463.062px;">
                                            <div class="slick-track" >
                                                <div class="slick-slide slick-current slick-active" data-slick-index="0"
                                                    aria-hidden="false"
                                                    style="width: 460px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;">
                                                    <div>
                                                        <div class="carousel-box img-zoom rounded "
                                                            style="width: 100%; display: inline-block; position: relative; overflow: hidden;"
                                                           >    
                                                            <img class="img-fluid ls-is-cached lazyloaded"
                                                                :src="singleProduct.image">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0">
                                    <div class="aiz-carousel product-gallery-thumb slick-initialized slick-slider slick-vertical"
                                        data-items="5" data-nav-for=".product-gallery" data-vertical="true"
                                        data-vertical-sm="false" data-focus-select="true" data-arrows="true">
                                        <div class="slick-list draggable" style="height: 347.5px;">
                                            <div class="slick-track"
                                                style="opacity: 1; height: 348px; transform: translate3d(0px, 0px, 0px);">
                                                <div class="slick-slide slick-current slick-active" data-slick-index="0"
                                                    aria-hidden="false" style="width: 60px;">
                                                    <div>
                                                        <div class="carousel-box c-pointer border p-1 rounded mb-2 "
                                                            style="width: 100%; height:100%; display: inline-block;"
                                                            v-for="(singleProducts, index) in singleProduct.images" :key="index"
                                                            >
                                                            <img class="mw-100 size-50px mx-auto ls-is-cached lazyloaded"
                                                                :src="singleProducts">
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-7 col-lg-6">
                            <div class="text-left">
                                <h1 class="mb-2 fs-20 fw-600">
                                    {{singleProduct.title}}
                                </h1>

                                <div class="row align-items-center">
                                    <div class="col-12">
                                        
                                    </div>
                                </div>

                                <hr>

                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <small class="me-2 opacity-50">Sold by: </small><br>
                                        <a href="https://wal-marting.com/shop/Nikusha" class="text-reset">{{ singleProduct.subtitle  }}</a>
                                    </div>

                                </div>

                                <hr>

                                <div class="row no-gutters mt-3">
                                    <div class="col-sm-2">
                                        <div class="opacity-50 my-2">Price:</div>
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="">
                                            <strong class="h2 fw-600 text-primary">
                                                {{ singleProduct.price }}
                                            </strong>
                                            <span class="opacity-70">/PC</span>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <form id="option-choice-form">
                                    <input type="hidden" name="_token" value="IKB4ymxF3bWYMY80IzrGJ2vQqwvbfdJQMZpH1tT9">
                                    <input type="hidden" name="id" value="233728">

                                    <!-- Quantity + Add to cart -->
                                    <div class="row no-gutters">
                                        <div class="col-sm-2">
                                            <div class="opacity-50 my-2">Quantity:</div>
                                        </div>
                                        <div class="col-sm-10">
                                            <div class="product-quantity d-flex align-items-center">
                                                <div class="row no-gutters align-items-center aiz-plus-minus me-3"
                                                    style="width: 130px;">
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                                                        type="button" data-type="minus" data-field="quantity"
                                                        disabled="disabled">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input type="number" name="quantity"
                                                        class="col border-0 text-center flex-grow-1 fs-16 input-number"
                                                        placeholder="1" value="1" min="1" max="1000" lang="en">
                                                    <button class="btn  col-auto btn-icon btn-sm btn-circle btn-light"
                                                        type="button" data-type="plus" data-field="quantity">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div class="available-amount opacity-60">
                                                    (<span id="available-quantity">1000</span> available)
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>

                                    <div class="row no-gutters pb-3" id="chosen_price_div">
                                        <div class="col-sm-2">
                                            <div class="opacity-50 my-2">Total Price:</div>
                                        </div>
                                        <div class="col-sm-10">
                                            <div class="product-price">
                                                <strong id="chosen_price" class="h4 fw-600 text-primary">$56.40</strong>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                                <div class="mt-3">
                                    <button type="button" class="btn btn-soft-primary  add-to-cart fw-600 me-3 "
                                    @click="addToCart(product)">
                                        <i class="fa fa-shopping-bag"></i>
                                        <span class="d-none d-md-inline-block ms-2"> Add to cart</span>
                                    </button>
                                    <button type="button" class="btn btn-primary buy-now fw-600" onclick="buyNow()">
                                        <i class="fa fa-shopping-cart"></i> Buy Now
                                    </button>
                                    <button type="button" class="btn btn-secondary out-of-stock fw-600 d-none" disabled="">
                                        <i class="fa fa-cart-arrow-down"></i> Out of Stock
                                    </button>
                                </div>
                                <div class="d-table width-100 mt-3">
                                    <div class="d-table-cell">
                                        <!-- Add to wishlist button -->
                                        <button type="button" class="btn pl-0 btn-link fw-600"
                                            onclick="addToWishList(233728)">
                                            Add to wishlist
                                        </button>
                                        <!-- Add to compare button -->
                                        <button type="button" class="btn btn-link btn-icon-left fw-600"
                                            onclick="addToCompare(233728)">
                                            Add to compare
                                        </button>
                                    </div>
                                </div>
                                <div class="row no-gutters mt-3">
                                    <div class="col-2">
                                        <div class="opacity-50 mt-2">Refund:</div>
                                    </div>
                                    <div class="col-10">
                                        <a href="https://wal-marting.com/return-policy" target="_blank">

                                            <img src="https://wal-marting.com/public/assets/img/refund-sticker.jpg"
                                                height="36">
                                        </a>
                                        <a href="https://wal-marting.com/return-policy" class="ms-2" target="_blank">View
                                            Policy</a>
                                    </div>
                                </div>
                                <div class="row no-gutters mt-4">
                                    <div class="col-sm-2">
                                        <div class="opacity-50 my-2">Share:</div>
                                    </div>
                                    <div class="col-sm-10">
                                        <div class="aiz-share jssocials">
                                            <div class="jssocials-shares d-flex align-items-center ">
                                                <div class="jssocials-share jssocials-share-email bg-soft-primary p-2 me-1 w[10px] ">
                                                    <a target="_self" href="#" class="jssocials-share-link">
                                                        <i class="fa fa-envelope fa-2x jssocials-share-logo"></i>
                                                    </a>
                                                </div>
                                                <div class="jssocials-share jssocials-share-twitter bg-soft-primary p-2 me-1 w[10px] ">
                                                    <a target="_blank" href="#" class="jssocials-share-link">
                                                        <i class="fa fa-twitter fa-2x jssocials-share-logo"></i>
                                                    </a>
                                                </div>
                                                <div class="jssocials-share jssocials-share-facebook bg-soft-primary p-2 me-1 w[10px] ">
                                                    <a target="_blank" href="#" class="jssocials-share-link">
                                                        <i class="fa fa-facebook-f fa-2x jssocials-share-logo"></i>
                                                    </a>
                                                </div>
                                                <div class="jssocials-share jssocials-share-linkedin bg-soft-primary p-2 me-1 w[10px] ">
                                                    <a target="_blank" href="#" class="jssocials-share-link">
                                                        <i class="fa fa-linkedin fa-2x jssocials-share-logo"></i>
                                                    </a>
                                                </div>
                                                <div class="jssocials-share jssocials-share-whatsapp bg-soft-primary p-2 me-1 w[10px] ">
                                                    <a target="_self" href="#" class="jssocials-share-link">
                                                        <i class="fa fa-whatsapp fa-2x jssocials-share-logo"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-4">
            <div class="container">
                <div class="row gutters-10">
                    <div class="col-xl-3 order-1 order-xl-0">
                        <div class="bg-white shadow-sm mb-3">
                            <div class="position-relative p-3 text-left">
                                <div class="absolute-top-right p-2 bg-white z-1">
                                    <svg version="1.1" xmsns="http://www.w3.org/2000/svg"
                                        xmsns:xlink="http://www.w3.org/1999/xlink" xms:space="preserve"
                                        viewBox="0 0 287.5 442.2" width="22" height="34">
                                        <polygon style="fill:#F8B517;"
                                            points="223.4,442.2 143.8,376.7 64.1,442.2 64.1,215.3 223.4,215.3 "></polygon>
                                        <circle style="fill:#FBD303;" cx="143.8" cy="143.8" r="143.8"></circle>
                                        <circle style="fill:#F8B517;" cx="143.8" cy="143.8" r="93.6"></circle>
                                        <polygon style="fill:#FCFCFD;" points="143.8,55.9 163.4,116.6 227.5,116.6 175.6,154.3 195.6,215.3 143.8,177.7 91.9,215.3 111.9,154.3
                                            60,116.6 124.1,116.6 "></polygon>
                                    </svg>
                                </div>
                                <div class="opacity-50 fs-12 border-bottom">Sold by</div>
                                <a href="https://wal-marting.com/shop/Nikusha" class="text-reset d-block fw-600">
                                    Nikusha
                                    <span class="ms-2"><i class="fa fa-check-circle" style="color:green"></i></span>
                                </a>
                                <div class="location opacity-70"></div>
                                <div class="text-center border rounded p-2 mt-3">
                                    <div class="rating">

                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                        <i class="fa fa-star active"></i>
                                    </div>
                                    <div class="opacity-60 fs-12">(0 customer reviews)</div>
                                </div>
                            </div>
                            <div class="row no-gutters align-items-center border-top">
                                <div class="col">
                                    <a href="https://wal-marting.com/shop/Nikusha"
                                        class="d-block btn btn-soft-primary rounded-0">Visit Store</a>
                                </div>
                                <div class="col">
                                    <ul class="social list-inline mb-0">
                                        <li class="list-inline-item me-0">
                                            <a href="https://www.facebook.com/nika.nugzarishvili.5?mibextid=ZbWKwL"
                                                class="facebook" target="_blank">
                                                <i class="lab la-facebook-f opacity-60"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item me-0">
                                            <a href="" class="google" target="_blank">
                                                <i class="lab la-google opacity-60"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item me-0">
                                            <a href="" class="twitter" target="_blank">
                                                <i class="lab la-twitter opacity-60"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="" class="youtube" target="_blank">
                                                <i class="lab la-youtube opacity-60"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- Top Selling Products Start -->
                        <div class="bg-white rounded shadow-sm mb-3">
                            <div class="p-3 border-bottom fs-16 fw-600">
                                Top Selling Products
                            </div>

                            <div class="p-3">
                                <ul class="list-group list-group-flush">
                                    <li class="py-3 px-0 list-group-item border-light" v-for="bestProduct in bestProducts"
                                        :key="bestProduct.id">
                                        <div class="row gutters-10 align-items-center">
                                            <div class="col-5">
                                                <a href="https://wal-marting.com/product/lasko-u12104-high-speed-professional-rotating-utility-fan-for-cooling-ventilating-exhausting-and-drying-in-the-home-job-site-and-job-shop-black-12104-122-x-96-x-123-inches-Eowxw"
                                                    class="d-block text-reset">
                                                    <img class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                                                        :src="bestProduct.image" :alt="bestProduct.title">
                                                </a>
                                            </div>
                                            <div class="col-7 text-left">
                                                <h4 class="fs-13 text-truncate-2">
                                                    <a :href="`/products/${bestProduct.id}`" class="d-block text-reset">{{ bestProduct.title }}</a>
                                                </h4>
                                                <div class="rating rating-sm mt-1">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                                <div class="mt-2">
                                                    <span class="fs-17 fw-600 text-primary">{{ bestProduct.price }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                         <!-- Top Selling Products End -->
                    </div>
                    <div class="col-xl-9 order-0 order-xl-1">
                        <!-- Product Description Start -->
                        <div class="bg-white mb-3 shadow-sm rounded">
                            <div class="nav border-bottom aiz-nav-tabs">
                                <a href="#tab_default_1" data-toggle="tab"
                                    class="p-3 fs-16 fw-600 text-reset active show">Description</a>
                                <a href="#tab_default_4" data-toggle="tab" class="p-3 fs-16 fw-600 text-reset">reviews</a>
                            </div>

                            <div class="tab-content pt-0">
                                <div class="tab-pane fade active show" id="tab_default_1">
                                    <div class="p-4">
                                        <div class="mw-100 overflow-hidden text-left aiz-editor-data">
                                                <div class="carousel-box c-pointer border p-1 rounded me-4 "
                                                    style="width: 300px; max-height:300px ; display: inline-block;"
                                                    v-for="(singleProducts, index) in singleProduct.images" :key="index"
                                                        >
                                                    <img class="w-100 size-50px mx-auto ls-is-cached lazyloaded"
                                                        :src="singleProducts">
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="tab_default_2">
                                    <div class="p-4">
                                        <div class="embed-responsive embed-responsive-16by9">
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab_default_3">
                                    <div class="p-4 text-center ">
                                        <a href="" class="btn btn-primary">Download</a>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab_default_4">
                                    <div class="p-4">
                                        <ul class="list-group list-group-flush">
                                        </ul>

                                        <div class="text-center fs-18 opacity-70">
                                            There have been no reviews for this product yet.
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- Product Description End -->
                        <!-- Related products start -->
                        <div class="bg-white rounded shadow-sm">
                            <div class="border-bottom p-3">
                                <h3 class="fs-16 fw-600 mb-0">
                                    <span class="me-4">Related products</span>
                                </h3>
                            </div>
                            <div class="p-3">
                                <div class="aiz-carousel gutters-5 half-outside-arrow slick-initialized slick-slider"
                                    data-items="5" data-xl-items="3" data-lg-items="4" data-md-items="3" data-sm-items="2"
                                    data-xs-items="2" data-arrows="true" data-infinite="true">
                                    <div class="slick-list draggable">
                                        <div class="slick-track">
                                            <div class="slick-slide slick-cloned text-center" data-slick-index="-5" id=""
                                                aria-hidden="true"  tabindex="-1">
                                                <div>
                                                    <div class="carousel-box me-2 " style="width: 300px; display: inline-block;"
                                                    v-for="product in products" :key="product.id"
                                                    >
                                                        <div
                                                            class="aiz-card-box border border-light rounded hov-shadow-md my-2 has-transition">
                                                            <div class="">
                                                                <a href="#"
                                                                    class="d-block" tabindex="-1">
                                                                    <img class="img-fit mx-auto h-140px h-md-210px ls-is-cached lazyloaded"
                                                                    :src="product.image" :alt="product.title"
                                                                    >
                                                                </a>
                                                            </div>
                                                            <div class="p-md-3 p-2 text-left">
                                                                <div class="fs-15">
                                                                    <span class="fw-700 text-primary">{{ product.price }}</span>
                                                                </div>
                                                                <div class="rating rating-sm mt-1">
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                </div>
                                                                <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                                                    <a :href="`/products/${product.id}`"
                                                                        class="d-block text-reset" tabindex="-1">{{ product.title }}</a>
                                                                </h3>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <!-- Related products End -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.jssocials-share-logo {
    width: 1em;
    vertical-align: middle;
    font-size: 1.5em;
}
</style>