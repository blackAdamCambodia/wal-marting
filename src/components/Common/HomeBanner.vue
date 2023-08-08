<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';



const baseURL = 'https://sc2houduan.bitlandweb.com/addons/shopro'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            categories: [],
            subCategories: {},
            templateData: {},
            banner: [],
            modules: [Autoplay, Pagination],
            menu:[]
        }
    },
    mounted() {
        this.getCategoryData()
        this.getTemplateData()
        

    },
    methods: {
        getCategoryData() {
            axios
                .get(`${baseURL}/category?id=43`)
                .then((response) => {
                    this.categories = response.data.data.children
                    console.log(this.categories)

                })
        },
        getSubCategories(categoryId) {
            axios
                .get(`${baseURL}/category?${categoryId}`)
                .then((response) => {
                    this.subCategories[categoryId] = response
                    console.log(this.subCategories[categoryId])


                })
        },
        getTemplateData() {
            let that = this
            axios.get(`${baseURL}/index/template`, {
                headers: {
                    Platform: 'H5',
                }
            }).then((response) => {
                that.templateData = response.data.data
                that.templateData.home.forEach(element => {
                    if (element.type == 'banner') {
                        that.banner = element.content.list
                    }
                    console.log(that.banner)
                    if (element.type == 'menu'){
                        that.menu = element.content.list
                    }
                    console.log(that.menu)
                });

            })
        },
        

    }
}

</script>

<template>
    <div class="home-banner-area mb-4 pt-3">
        <div class="container">
            <div class="row gutters-10 position-relative">
                <div class="col-lg-3 position-static d-none d-lg-block">
                    <div class="aiz-category-menu bg-white rounded  shadow-sm">
                        <!-- Category and SubCategory start here -->
                        <div
                            class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
                            <span class="fw-600 fs-16 me-3">Categories</span>
                            <a href="https://wal-marting.com/categories" class="text-reset">
                                <span class="d-none d-lg-inline-block">See All &gt;</span>
                            </a>
                        </div>
                        <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
                            <li class="category-nav-element" v-for="category  in categories " :key="category.name">
                                <a href="" class="text-truncate text-reset py-2 px-3 d-block">
                                    <img class="cat-image me-2 opacity-60 lazyloaded" :src=category.image width="125"
                                        :alt="category.name">
                                    <span class="cat-name">{{ category.name }}</span>
                                </a>
                                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4 loaded">
                                    <div class="card-columns">
                                        <div class="card shadow-none border-0">
                                            <ul class="list-unstyled mb-3">
                                                <li class="fw-600 border-bottom pb-2 mb-3"
                                                    v-for=" subCategory in category.children" :key="subCategory.id">

                                                    <a class="text-reset" href="https://wal-marting.com/category/--toybe">
                                                        {{ subCategory.name }}
                                                    </a>
                                                    <ul class="list-unstyled mb-3 d-flex ">
                                                        <li class="fw-600 me-2 pb-2 mb-3"
                                                            v-for="subCategory in subCategory.children"
                                                            :key="subCategory.name">
                                                            <img width="100" class="bg-light mb-2 mt-4"
                                                                :src="subCategory.image" :alt="subCategory.name">
                                                            <p class="text-center"> {{ subCategory.name }} </p>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <!-- Category and SubCategory End here -->
                <!-- Home banner start Here -->
                <div class=" col-lg-7 ">
                    <div class="aiz-carousel dots-inside-bottom mobile-img-auto-height slick-initialized slick-slider slick-dotted"
                        data-arrows="true" data-dots="true" data-autoplay="true">
                        <div class="slick-list draggable">
                            <div class="slick-track">
                                <div class="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1"
                                    role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                    <div>
                                        <swiper 
                                        :spaceBetween="30" 
                                        :centeredSlides="true" 
                                        :autoplay="{
                                            delay: 2500,
                                            disableOnInteraction: false,}" 
                                        :pagination="{
                                            clickable: true,}" 
                                        :modules="modules" 
                                        class="mySwiper"
                                        >
                                            <swiper-slide v-for="(bannerDetail, index) in banner" :key="index">
                                                <!-- <a href="" tabindex="-1"> -->
                                                    <img class=" img-fit rounded shadow-sm overflow-hidden"
                                                        :src=bannerDetail.image >
                                                <!-- </a> -->
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <ul class="list-unstyled mb-0 row gutters-5">
                        <li class="min-w-0 col-4 col-md mt-3" v-for="category  in categories " :key="category.name">
                            <a href="https://wal-marting.com/category/----txlnh"
                                class="d-block rounded bg-white p-2 text-reset shadow-sm text-center">
                                <img :src=category.image width="80" :alt="category.name" height="40">

                                <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ category.name }}</div>
                            </a>
                        </li>

                    </ul>
                </div>
                <!-- Home banner End Here -->
                <div class="col-lg-2 order-3 mt-3 mt-lg-0">
                    <div class="bg-white rounded shadow-sm">
                        <!-- <div class="bg-soft-primary rounded-top p-3 d-flex align-items-center justify-content-center">
                            <span class="fw-600 fs-16 me-2 text-truncate">
                                Today's top ten
                            </span>
                            <span class="badge badge-primary badge-inline">Hot</span>
                        </div> -->
                        <div class="c-scrollbar-light overflow-auto h-lg-450px p-2 bg-primary rounded-bottom">
                            <div class="gutters-5 lg-no-gutters row row-cols-2 row-cols-lg-1">
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/dream-pairs-womens-boat-shoes-57Lys"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row mb-2 gutters-5 align-items-center"
                                        v-for="(menuItem , index) in menu" :key="index"
                                        >
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        :src=menuItem.image>
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">{{ menuItem.name }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>

</style>