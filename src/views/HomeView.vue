<script setup>
import TopMenu from "../components/Common/TopMenu.vue";
import Header from "../components/Common/HeaderView.vue";
import HomeBanner from "../components/Common/HomeBanner.vue";
import CuponView from "../components/Home/CuponView.vue";
import NewProduct from "../components/Home/NewProduct.vue";
import FeaturedProduct from "../components/Home/FeaturedProduct.vue";
import BestSelling from "../components/Home/BestSelling.vue";
import BeautyHealth from "../components/Home/BeautyHealth.vue";
import WomenCloth from "../components/Home/WomenCloth.vue";
import ComputerAccessories from "../components/Home/ComputerAccessories.vue";
import CompanyPolicy from "../components/Common/CompanyPolicy.vue";
import Footer from "../components/Common/FooterView.vue";



</script>
<template>
    <div>
        <TopMenu />
        <Header />
        <HomeBanner />
        <CuponView/>
        <NewProduct/>
        <FeaturedProduct />
        <BestSelling />
        <BeautyHealth />
        <WomenCloth />
        <ComputerAccessories />
        <CompanyPolicy />
        <Footer />
    </div>
</template>