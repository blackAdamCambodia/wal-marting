<script>
  export default {
    data() {
      return {
        selectedLanguage: 'English',
        languageNames: [
          {
            language: 'English',
            flag: 'https://wal-marting.com/public/assets/img/flags/en.png' 
          },
          {
            language: 'Bangla',
            flag: 'https://wal-marting.com/public/assets/img/flags/bd.png'
          },
          {
            language: 'India',
            flag: 'https://wal-marting.com/public/assets/img/flags/in.png'
          },
          {
            language: 'Arabic',
            flag: 'https://wal-marting.com/public/assets/img/flags/sa.png'
          },
          {
            language: '中文',
            flag: 'https://wal-marting.com/public/assets/img/flags/cn.png'
          },
          {
            language: '日本語',
            flag: 'https://wal-marting.com/public/assets/img/flags/jp.png'
          },
          {
            language: '한국',
            flag: 'https://wal-marting.com/public/assets/img/flags/kr.png'
          },
          {
            language: 'Turkish',
            flag: 'https://wal-marting.com/public/assets/img/flags/tr.png'
          },
          {
            language: 'Malay',
            flag: 'https://wal-marting.com/public/assets/img/flags/ma.png'
          },
          {
            language: '中文繁体',
            flag: 'https://wal-marting.com/public/assets/img/flags/hk.png'
          },
          {
            language: 'Português',
            flag: 'https://wal-marting.com/public/assets/img/flags/pt.png'
          }
        ]
      };
    },
    methods: {
      changeLanguage(language) {
        this.selectedLanguage = language.language;
      },
      getSelectedLanguage() {
        const selectedLanguage = this.languageNames.find(item => item.language === this.selectedLanguage);
        return selectedLanguage || {
          language: 'English',
          flag: 'https://wal-marting.com/public/assets/img/flags/en.png'
        };
      }
    }
  };
  </script>
<template>
    <div class="top-navbar bg-white border-bottom border-soft-secondary z-1035">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col">
            <ul class="navbar-nav list-inline d-flex flex-row justify-content-between justify-content-lg-start mb-0">
              <li class="nav-item dropdown list-inline-item me-3">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img :src="getSelectedLanguage().flag" data-src="https://wal-marting.com/public/assets/img/flags/en.png" class="me-2" alt="English" height="11">
                  <span class="opacity-60">{{ getSelectedLanguage().language }}</span>
                </a>
                <ul class="dropdown-menu">
                  <li v-for="languageName in languageNames" :key="languageName.language">
                    <a class="dropdown-item" href="#" @click="changeLanguage(languageName)">
                      <img :src="languageName.flag" class="me-2" :alt="languageName.language" height="11">
                      <span class="language">{{ languageName.language }}</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="list-inline-item me-3 border-left-0 pr-3 pl-0">
                <a href="https://tawk.to/chat/64a9040f94cf5d49dc624220/1h4q3fna8" target="_blank" class="text-reset d-inline-block opacity-60 py-2 text-decoration-none">Online service</a>
              </li>
            </ul>
          </div>
          <div class="col-5 text-right d-none d-lg-block">
            <ul class="list-inline mb-0 h-100 d-flex justify-content-end align-items-center">
              <li class="list-inline-item pe-3 border-end border-left-0 pr-3 pl-0">
                <a href="/login" class="text-reset d-inline-block opacity-60 py-2 text-decoration-none">Login</a>
              </li>
              <li class="list-inline-item">
                <a href="/register" class="text-reset d-inline-block opacity-60 py-2 text-decoration-none">Registration</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  
  </style>
  