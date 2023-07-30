<script setup>
const adsOne = [
    {
        image:'https://wal-marting.com/public/uploads/all/yVgybxNxFbiNMK5KR82jDjCi610t2msemjxdtA29.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
       
    },
    {
        image:'https://wal-marting.com/public/uploads/all/ZcC24M9cIoyNCep89NYTniwDH8kmYDNI4XRZgE3H.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
    },
    {
        image:'https://wal-marting.com/public/uploads/all/T54X3oHeL3HZCR93yhcHjvWbgrlJmjjvCP5ZZlZu.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
    }
]
</script>
<template>
    <div class="mb-4">
        <div class="container">
            <div class="row gutters-10">
                <div class="col-xl col-md-6" v-for="adOne in adsOne" :key="adOne.image" >
                    <div class="mb-3 mb-lg-0">
                        <a href="" class="d-block text-reset">
                            <img :src="adOne.image" :title="adOne.Title" :alt="adOne.alt" class="img-fluid w-100 ls-is-cached lazyloaded">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>