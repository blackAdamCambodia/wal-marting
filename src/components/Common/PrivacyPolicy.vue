<script >
   import axios from 'axios'; 
   const baseURL = 'https://sc2houduan.bitlandweb.com/addons/shopro'
   export default {
   
    data() {
        return {
            privacyPolicy: [],
        }
    },
    mounted() {
        this.getPrivacyPolicyData()      

    },
    methods: {
        getPrivacyPolicyData() {
            axios
                .get(`${baseURL}/index/richtext?id=2`)
                .then((response) => {
                    this.privacyPolicy = response.data.data
                    console.log(this.privacyPolicy)

                })
        },
    }
}
</script>

<template>
    <div>
        <section class="pt-4 mb-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-left">
                        <h1 class="fw-600 h4">Privacy Policy Page</h1>
                    </div>
                    <div class="col-lg-6">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item opacity-50">
                                <a class="text-reset" href="/">Home</a>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <a class="text-reset" href="/privacy-policy">"privacy policy"</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-4">
            <div class="container">
                <div class="p-4 bg-white rounded shadow-sm overflow-hidden mw-100 text-left">
                <h2 class="text-center fw-bold ">{{ privacyPolicy.title }}</h2>
                <p v-html="privacyPolicy.content"></p>
            </div>
        </div>
    </section>
</div></template>