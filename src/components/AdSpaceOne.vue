<script setup>
const adsOne = [
    {
        image:'https://wal-marting.com/public/uploads/all/G5Px9LZIYSTTIn8bCI2yQbi1OO9Zd2SOoo2DKKiu.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
       
    },
    {
        image:'https://wal-marting.com/public/uploads/all/N5t0cvDBrqYtNDvx067SK9lau2JQokvUCRv3KeBk.jpg',
        Title: 'wal-marting promo',
        alt: 'wal-marting promo',
    },
    {
        image:'https://wal-marting.com/public/uploads/all/E9L9IXwg65c7tB3OaCSK6SvO0QBgH9NcDRS6jnGZ.jpg',
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