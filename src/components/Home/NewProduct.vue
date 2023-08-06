
<script>
import axios from 'axios'
export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios
            .get('https://sc2houduan.bitlandweb.com/addons/shopro/goods/lists?category_id=69')
            .then((response) => {
                this.products = response.data.data.data
                console.log(this.products)
            })
    }
}

</script>


<template>
    <div id="section_newest">
        <section class="mb-4">
            <div class="container">
                <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                    <div class="d-flex mb-3 align-items-baseline border-bottom">
                        <h3 class="h5 fw-700 mb-0">
                            <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">
                                New Products
                            </span>
                        </h3>
                    </div>
                    <div class=" aiz-carousel gutters-10 half-outside-arrow slick-initialized slick-slider position-relative "
                        data-items="6" data-xl-items="5" data-lg-items="4" data-md-items="3" data-sm-items="2"
                        data-xs-items="2" data-arrows="true">
                        
                        <div class="slick-list draggable overflow-x-scroll">
                            <div class="slick-track d-flex "
                                style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
                                <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                                    v-for="product in products" :key="product.id" style="width: 224px;">
                                    <div>
                                        <div class="carousel-box">
                                            <div
                                                class="aiz-card-box border border-light rounded hov-shadow-md mt-1 mb-2 has-transition bg-white">
                                                <div class="position-relative">

                                                    <a href="#" class="d-block" tabindex="0">
                                                        <img class="img-fit mx-auto h-140px h-md-210px ls-is-cached lazyloaded"
                                                            :src="product.image" :alt="product.title">
                                                    </a>
                                                    <div class="absolute-top-right aiz-p-hov-icon">
                                                        <a href="javascript:void(0)" data-toggle="tooltip"
                                                            data-title="Add to wishlist" data-placement="left" tabindex="0">
                                                            <i class="fa fa-heart-o"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" data-toggle="tooltip"
                                                            data-title="Add to compare" data-placement="left" tabindex="0">
                                                            <i class="fa fa-refresh"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" data-toggle="tooltip"
                                                            data-title="Add to cart" data-placement="left" tabindex="0">
                                                            <i class="fa fa-shopping-cart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="p-md-3 p-2 text-left">
                                                    <div class="fs-15">
                                                        <span class="fw-700 text-primary">{{ product.price }}</span>
                                                    </div>
                                                    <div class="rating rating-sm mt-1">

                                                    </div>
                                                    <h3 class="fw-600 fs-13 text-truncate-2 lh-1-4 mb-0 h-35px">
                                                        <a :href="`/products/${product.id}`"
                                                            class="d-block text-reset" tabindex="0">{{ product.title }}</a>
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
        </section>
    </div>
</template>
<style scoped></style>