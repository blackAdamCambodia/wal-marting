<script>
   import axios from 'axios'; 
   const baseURL = 'https://sc2houduan.bitlandweb.com/addons/shopro'
   export default {
   
    data() {
        return {
            AboutUs: [],
        }
    },
    mounted() {
        this.getAboutUsData()      

    },
    methods: {
        getAboutUsData() {
            axios
                .get(`${baseURL}/index/richtext?id=3`)
                .then((response) => {
                    this.AboutUs = response.data.data
                    console.log(this.AboutUs)

                })
        },
    }
}
</script>
<template>
    <div>
        <section class="pt-4 mb-4">
            <div class="container ">
                <div class="row">
                    <div class="col-lg-6 text-sm-left">
                        <h1 class="fw-600 h4">About US</h1>
                    </div>
                    <div class="col-lg-6">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item opacity-50">
                                <a class="text-reset" href="/">Home</a>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <a class="text-reset" href="/about-company">"About US"</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-4">
            <div class="container">
                <div class="p-4 bg-white rounded shadow-sm overflow-hidden mw-100 text-left">
                    <h2 class="text-center fw-bold ">{{ AboutUs.title }}</h2>
                    <p v-html="AboutUs.content"></p>
                </div>
            </div>
        </section>
    </div>
</template>