<script setup>
const adsOne = [
    {
        image:'https://wal-marting.com/public/uploads/all/0L42owfx2QFA1wlumvTidVg19xGS9uwTfEhWmbKK.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
       
    },
    {
        image:'https://wal-marting.com/public/uploads/all/WIG0LwaL8IKPuwCTEB6qbB3bai9A0F2OlOlFD5X2.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
    },
    {
        image:'https://wal-marting.com/public/uploads/all/A9JqYg9daGZlR5Sp2yTFaWr8X0xwpoQYQQlmfSEL.jpg',
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