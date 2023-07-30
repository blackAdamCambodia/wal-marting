
<script>
import axios from 'axios'

export default {
  data() {
    return {
        categories: [] ,
        subCategories: [
            {
                
                name: '',
            }
        ],
        templateData:{},
        banner:[]      
    }
  },
  mounted() {
    this.getCategoryData()
    this.getTemplateData()

  },
  methods:{
    getCategoryData(){
        axios
      .get('https://sc2houduan.bitlandweb.com/addons/shopro/category?id=43')
      .then((response) => {
        this.categories = response.data.data.children
        this.subCategories = response.data.data.children      
        console.log(this.categories)
        console.log(this.subCategories)
        
      })
    },
    getTemplateData(){
        let that = this
        axios.get('https://sc2houduan.bitlandweb.com/addons/shopro/index/template',{headers:{
                Platform: 'H5',
        }}).then((response) => {
            that.templateData = response.data.data
            that.templateData.home.forEach(element => {
            if(element.type == 'banner'){
                that.banner = element.content
            }
            console.log(that.banner.list)
        });
        
      })
    }
  }
}

</script>

<template>
    <div class="home-banner-area mb-4 pt-3">
        <div class="container">
            <div class="row gutters-10 position-relative">
                <div class="col-lg-3 position-static d-none d-lg-block">
                    <div class="aiz-category-menu bg-white rounded  shadow-sm">
                        <div
                            class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
                            <span class="fw-600 fs-16 mr-3">Categories</span>
                            <a href="https://wal-marting.com/categories" class="text-reset">
                                <span class="d-none d-lg-inline-block">See All &gt;</span>
                            </a>
                        </div>
                        <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
                            <li class="category-nav-element" v-for="category  in categories " :key="category.name">
                                <a href="" class="text-truncate text-reset py-2 px-3 d-block">
                                    <img class="cat-image me-2 opacity-60 lazyloaded"
                                        :src=category.image
                                        
                                        width="125" :alt="category.name"
                                        >
                                    <span class="cat-name">{{ category.name }}</span>
                                </a>
                                <div class="sub-cat-menu c-scrollbar-light rounded shadow-lg p-4 loaded">
                                    <div class="card-columns">
                                        <div class="card shadow-none border-0">
                                            <ul class="list-unstyled mb-3">
                                                <li class="fw-600 border-bottom pb-2 mb-3"
                                                v-for="subCategory in subCategories" :key="subCategory.name">
                                                    
                                                    <a class="text-reset" href="https://wal-marting.com/category/--toybe">
                                                        {{ subCategory.name }}
                                                    </a>

                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>


                <div class=" col-lg-7 ">
                    <div class="aiz-carousel dots-inside-bottom mobile-img-auto-height slick-initialized slick-slider slick-dotted"
                        data-arrows="true" data-dots="true" data-autoplay="true">
                        <!-- <button type="button"
                            class="slick-prev slick-arrow" aria-disabled="false" style=""><i
                                class="las la-angle-left"></i></button> -->
                        <div class="slick-list draggable">
                            <div class="slick-track">
                                <div class="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1"
                                    role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                    <div>
                                        <div class="carousel-box"
                                       >
                                        
                                            <a href="" tabindex="-1">
                                                <img class="d-block mw-100 img-fit rounded shadow-sm overflow-hidden"
                                                    src="http://file.shopro.top/uploads/20230107/35b41f3b20ac46dc48414c9c04de79af.jpg"
                                                     height="350"
                                                   >
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <!-- <button type="button" class="slick-next slick-arrow slick-disabled" style=""
                            aria-disabled="true"><i class="las la-angle-right"></i></button> -->
                        <ul class="slick-dots" style="" role="tablist">
                            <li class="" role="presentation"><button type="button" role="tab" id="slick-slide-control00"
                                    aria-controls="slick-slide00" aria-label="1 of 2" tabindex="-1">1</button></li>
                            <li class="slick-active" role="presentation"><button type="button" role="tab"
                                    id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2"
                                    tabindex="0" aria-selected="true">2</button></li>
                        </ul>
                    </div>
                    <ul class="list-unstyled mb-0 row gutters-5">
                        <li class="minw-0 col-4 col-md mt-3"
                        v-for="category  in categories " :key="category.name"
                        >
                            <a href="https://wal-marting.com/category/----txlnh"
                                class="d-block rounded bg-white p-2 text-reset shadow-sm text-center">
                                <img :src=category.image width="80" :alt="category.name" height="40">
                                    
                                <div class="text-truncate fs-12 fw-600 mt-2 opacity-70">{{ category.name }}</div>
                            </a>
                        </li>
                      
                    </ul>
                </div>

                <div class="col-lg-2 order-3 mt-3 mt-lg-0">
                    <div class="bg-white rounded shadow-sm">
                        <div class="bg-soft-primary rounded-top p-3 d-flex align-items-center justify-content-center">
                            <span class="fw-600 fs-16 mr-2 text-truncate">
                                Today's top ten
                            </span>
                            <span class="badge badge-primary badge-inline">Hot</span>
                        </div>
                        <div class="c-scrollbar-light overflow-auto h-lg-400px p-2 bg-primary rounded-bottom">
                            <div class="gutters-5 lg-no-gutters row row-cols-2 row-cols-lg-1">
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/dream-pairs-womens-boat-shoes-57Lys"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/J471UGrt6ZhcXqdvhPVqwiPPB323AbbJDSDNXQDi.png"
                                                        data-src="https://wal-marting.com/public/uploads/all/J471UGrt6ZhcXqdvhPVqwiPPB323AbbJDSDNXQDi.png"
                                                        alt="Dream pairs women's boat shoes"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$90.15</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/belco-sports-5-mLWP1"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/8elwAziXkCn912LSOasLTMWgGifG9Utl2ZWx7T3a.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/8elwAziXkCn912LSOasLTMWgGifG9Utl2ZWx7T3a.jpg"
                                                        alt="Belco sports secretly destroyed the 5 FIFA World Cup"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$39.43</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/apple-macbook-air-133-inch-m1-chip-with-8-core-cpu-7-core-gpu-8gb-memory-256gb-ssd-5-JQnta"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/Y0ZzRFL2AzyDFsxDuHdxbpcE0Or4VU1XrKAhMPGI.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/Y0ZzRFL2AzyDFsxDuHdxbpcE0Or4VU1XrKAhMPGI.jpg"
                                                        alt="Apple Macbook Air 13.3-inch M1 Chip with 8-core CPU, 7-core GPU, 8GB Memory, 256GB SSD"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$1,678.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/nvidia-graphics-i5-samsung-intel-core-i5-2th-155inch-hd-screen-4gb-ram-128gb-ssd-320gb-hdd-business-laptop-light-gaming-laptop-5-c2aX6"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/2fbkUUW2N4zkhIXaDjyY7Q5kGOGYwtw4MZuYAQXq.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/2fbkUUW2N4zkhIXaDjyY7Q5kGOGYwtw4MZuYAQXq.jpg"
                                                        alt="Nvidia Graphics i5 Samsung Intel Core i5-2th , 15.5inch HD Screen ,4GB Ram , 128GB SSD , 320GB HDD ,Business laptop ,Light Gaming Laptop"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$720.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/huawei-matebook-d16-intel-core-i5-12450h-processor16gb512gb-12th-gen-free-backpack-microsoft-office-huawei-backpackwireless-mouse32gb-pendrive-5-8Rgge"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/jWRuPsyMmsXBtDYPrelQ1jJ7vfcJPdj8zR2TRunN.png"
                                                        data-src="https://wal-marting.com/public/uploads/all/jWRuPsyMmsXBtDYPrelQ1jJ7vfcJPdj8zR2TRunN.png"
                                                        alt="HUAWEI MateBook D16 Intel Core i5-12450H Processor/16GB/512GB 12th Gen | FREE Backpack &amp; Microsoft Office / Huawei Backpack/wireless mouse/32GB Pendrive"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$1,078.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/wedge-sandals-for-women-on-sale-strap-shoes-thick-soled-platform-sandals-slippers-for-women-korean-sandals-rubber-slippers-for-women-10-201-m4mnC"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/ynxekYJWSoFiSNwXiXZJEYNBWFVLmz98Vtk4Q2L0.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/ynxekYJWSoFiSNwXiXZJEYNBWFVLmz98Vtk4Q2L0.jpg"
                                                        alt="Wedge Sandals For Women On Sale Strap Shoes Thick-soled Platform Sandals Slippers For Women Korean Sandals Rubber Slippers For Women"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$14.40</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/mykutsu-aubrey-women-sneakers-LuObt"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/GV9jIOTC9UKM1RcmZ86ePNOR15PTZ4mXZW5cIaDX.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/GV9jIOTC9UKM1RcmZ86ePNOR15PTZ4mXZW5cIaDX.jpg"
                                                        alt="MYKUTSU Aubrey Women Sneakers"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$83.88</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/jty-ready-stock-new-bobo-vr-z6-white-3d-vr-headset-virtual-reality-genuine-glasses-2ob0L"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/C8gRGmTgYAP3SgqaejFmft6puxhg12RGkO1peQ5v.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/C8gRGmTgYAP3SgqaejFmft6puxhg12RGkO1peQ5v.jpg"
                                                        alt="JTY ❤Ready Stock❤ New BOBO VR Z6 White 3D VR Headset Virtual Reality Genuine Glasses"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$152.40</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/kospet-prime-4g-android-watch3gb-32gb-dual-camera-1260mah-battery-16-cXPMW"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/9OUPMIcg1EjDvNSg8rc23JqlG8T2GcWyFX3TYf3x.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/9OUPMIcg1EjDvNSg8rc23JqlG8T2GcWyFX3TYf3x.jpg"
                                                        alt="KOSPET Prime 4G Android Watch(3GB + 32GB, Dual Camera, 1260mAh Battery, 1.6 )"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$1,620.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col mb-2">
                                    <a href="https://wal-marting.com/product/56789-1-IndLg"
                                        class="d-block p-2 text-reset bg-white h-100 rounded">
                                        <div class="row gutters-5 align-items-center">
                                            <div class="col-xxl">
                                                <div class="img">
                                                    <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                                                        src="https://wal-marting.com/public/uploads/all/ubCSeil4e8kHA2fFsEb3Ju1QxU4xeUfhkyWxi5ig.jpg"
                                                        data-src="https://wal-marting.com/public/uploads/all/ubCSeil4e8kHA2fFsEb3Ju1QxU4xeUfhkyWxi5ig.jpg"
                                                        alt="56789"
                                                        onerror="this.onerror=null;this.src='https://wal-marting.com/public/assets/img/placeholder.jpg';">
                                                </div>
                                            </div>
                                            <div class="col-xxl">
                                                <div class="fs-16">
                                                    <span class="d-block text-primary fw-600">$132.00</span>
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