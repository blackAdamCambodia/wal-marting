<script >
   import axios from 'axios'; 
   const baseURL = 'https://sc2houduan.bitlandweb.com/addons/shopro'
   export default {
   
    data() {
        return {
            FrequentlyAskedQuestions: [],
        }
    },
    mounted() {
        this.getFrequentlyAskedData()      

    },
    methods: {
        getFrequentlyAskedData() {
            axios
                .get(`${baseURL}/faq?page=1`)
                .then((response) => {
                    this.FrequentlyAskedQuestions = response.data.data.data
                    console.log(this.FrequentlyAskedQuestions)

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
                        <h1 class="fw-600 h4">Frequently Asked Questions</h1>
                    </div>
                    <div class="col-lg-6">
                        <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item opacity-50">
                                <a class="text-reset" href="https://wal-marting.com">Home</a>
                            </li>
                            <li class="text-dark fw-600 breadcrumb-item">
                                <a class="text-reset" href="/terms">"FAQ"</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-4">
            <div class="container">
                <div class="p-4 bg-white rounded shadow-sm overflow-hidden mw-100 text-left">
                   <ul class="list-unstyled mt-4 p-4 ">
                    <li
                    class="mb-5"
                     v-for="(FrequentlyAskedQuestion , index ) in FrequentlyAskedQuestions" 
                     :key="index"
                    >
                        <h3 class="fw-bold mb-3 ">{{ FrequentlyAskedQuestion.title }}</h3>
                        <p>{{ FrequentlyAskedQuestion.content }}</p>
                    </li>                    
                   </ul>
                </div>
            </div>
        </section>
    </div>
</template>