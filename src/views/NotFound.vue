<script setup>
import TopMenu from "../components/Common/TopMenu.vue";
import Header from "../components/Common/HeaderView.vue";

import CompanyPolicy from "../components/Common/CompanyPolicy.vue";
import Footer from "../components/Common/FooterView.vue";
</script>
<template>
    <div>
        <TopMenu />
        <Header />
        <section class="text-center py-6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <img src="https://wal-marting.com/public/assets/img/404.svg" class="mw-100 mx-auto mb-5"
                            height="300">
                        <h1 class="fw-700">Page Not Found!</h1>
                        <p class="fs-16 opacity-60">The page you are looking for has not been found on our server.</p>
                    </div>
                </div>
            </div>
        </section>
        <CompanyPolicy />
        <Footer />
    </div>
</template>