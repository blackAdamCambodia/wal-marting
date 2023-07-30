<script setup>
import logo from "../assets/image/walmartLogo.png"
const logoImage = {
    src:logo,
    alt:"walmart-logo"
}
const logoWidth= "maxWidth:100%; height:40px"
</script>
<template>
    <header class=" z-1020 bg-white border-bottom shadow-sm">
        <div class="position-relative logo-bar-area z-1">
            <div class="container">
                <div class="d-flex align-items-center">

                    <div class="col-auto col-xl-3 pl-0 pr-3 d-flex align-items-center">
                        <a class="d-block py-4 me-3 ms-0" href="https://wal-marting.com">
                            <img v-bind="logoImage" :style="logoWidth" height="40">
                        </a>

                    </div>
                    <div class="d-lg-none ms-auto me-0">
                        <a class="p-2 d-block text-reset" href="javascript:void(0);" data-toggle="class-toggle"
                            data-target=".front-header-search">
                            <i class="fa fa-search la-flip-horizontal la-2x"></i>
                           
                        </a>
                    </div>

                    <div class="flex-grow-1 front-header-search d-flex align-items-center bg-white">
                        <div class="position-relative flex-grow-1">
                            <form action="https://wal-marting.com/search" method="GET" class="stop-propagation">
                                <div class="d-flex position-relative align-items-center">
                                    <div class="d-lg-none" data-toggle="class-toggle" data-target=".front-header-search">
                                        <button class="btn px-2" type="button"><i
                                                class="la la-2x la-long-arrow-left"></i></button>
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class=" border-lg form-control" id="search"
                                            name="keyword" placeholder="I am shopping for..." autocomplete="off">
                                        <div class="input-group-append d-none d-lg-block">
                                            <button class="btn btn-primary btn-lg " type="submit">
                                                <i class="fa fa-search fs-4"></i>
                                                
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100"
                                style="min-height: 200px">
                                <div class="search-preloader absolute-top-center">
                                    <div class="dot-loader">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div class="search-nothing d-none p-3 text-center fs-16">

                                </div>
                                <div id="search-content" class="text-left">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-none d-lg-none ms-3 me-0">
                        <div class="nav-search-box">
                            <a href="#" class="nav-box-link">
                                <i class="fa fa-search  la-flip-horizontal d-inline-block nav-box-icon"></i>
                            </a>
                        </div>
                    </div>

                    <div class="d-none d-lg-block ms-3 me-0">
                        <div class="" id="compare">
                            <a href="/compare" class="d-flex align-items-center text-reset">
                                <i class="fa fa-refresh la-2x opacity-80"></i>
                                <span class="flex-grow-1 ms-1">
                                    <span class="badge badge-primary badge-inline badge-pill">0</span>
                                    <span class="nav-box-text d-none d-xl-block opacity-70">Compare</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="d-none d-lg-block ms-3 me-0">
                        <div class="" id="wishlist">
                            <a href="https://wal-marting.com/wishlists" class="d-flex align-items-center text-reset">
                                <i class="fa fa-heart-o la-2x opacity-80"></i>
                                <span class="flex-grow-1 ms-1">
                                    <span class="badge badge-primary badge-inline badge-pill">0</span>
                                    <span class="nav-box-text d-none d-xl-block opacity-70">Wishlist</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="d-none d-lg-block  align-self-stretch ms-3 me-0" data-hover="dropdown">
                        <div class="nav-cart-box dropdown h-100" id="cart_items">
                            <a href="javascript:void(0)" class="d-flex align-items-center text-reset h-100"
                                data-toggle="dropdown" data-display="static">
                                <i class="fa fa-shopping-cart la-2x opacity-80"></i>
                                <span class="flex-grow-1 ms-1">
                                    <span class="badge badge-primary badge-inline badge-pill cart-count">0</span>
                                    <span class="nav-box-text d-none d-xl-block opacity-70">Cart</span>
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">

                                <div class="text-center p-3">
                                    <i class="las la-frown la-3x opacity-60 mb-3"></i>
                                    <h3 class="h6 fw-700">Your Cart is empty</h3>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="bg-white border-top border-gray-200 py-1">
            <div class="container">
                <ul class="list-inline mb-0 pl-0 mobile-hor-swipe text-center">
                <li class="list-inline-item me-0">
                    <a href="https://codecanyon.net/item/active-ecommerce-cms/23471405"
                        class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">

                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>
<style scoped>
.input-group .btn {
    position: relative;
    z-index: 2;
    width: 55px;
    height: 43px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border: none;
}
</style>