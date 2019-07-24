<template>
  <main-layout>
    <span class="b-preloader" id="preloader" v-if="preloader">
        <svg class="lds-spinner" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#fcb711">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
            </g>
        </svg>
    </span>

      <h1 class="text-center" v-if="!preloader">Starships</h1>

      <div class="album py-5 bg-light" v-if="!preloader">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <input v-model="search" type="text" class="form-control" id="search" placeholder="Name or model a starship">
              </div>
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-outline-secondary" @click="searchShip">
                Search
              </button>
            </div>
            <div class="col-md-4">
              <span v-if="count > 0">
                  ships found: <a target="_blank" :href="resultSearch">{{ count }}</a>
              </span>
              <span v-if="count === 0">
                  Nothing found, please try to change your query
              </span>
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-sm btn-outline-secondary" v-if="previous !== null" @click="goTo(previous)">
                <<
              </button>
              <button type="button" @click="goTo(next)" v-if="next !== null" class="btn btn-sm btn-outline-secondary">
                >>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="starship in starships">
              <div class="card mb-4 box-shadow post-cards">
                <div class="card-body">
                  <h5 class="capitalize">{{ starship.name }}</h5>
                  <p class="card-text"><b>{{ starship.model }}</b></p>
                  <p class="card-text">{{ starship.manufacturer }}</p>
                  <p class="card-text">{{ starship.starship_class }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <router-link :to="`/page/${starship.url.split('/')[5]}`">
                          <button type="button" class="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main-layout>
</template>

<script>
  import axios from 'axios'
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
          starships: [],
          baseUrl: 'https://swapi.co/api/starships/',
          previous: null,
          next: null,
          search: '',
          count: null,
          preloader: false,
          resultSearch: ''
      }
    },
    methods: {
      getStarships (url) {
        this.preloader = true

        axios.get(url)
          .then(response => {
            this.starships = response.data.results;
            this.previous = response.data.previous;
            this.next = response.data.next;
            this.count = response.data.count;
            this.preloader = false
          })
          .catch(response => {
            console.log(response);
          });
      },
      goTo (url) {
         this.getStarships(url);
      },
      searchShip () {
        let url = this.baseUrl + '?search=' + this.search
        this.getStarships(url);
      }
    },
    watch: {
      starships () {
        this.resultSearch = window.location.href + '?search=' + this.search
      }
    },
    created () {
      let moreUrl = window.location.search

      if (moreUrl !== '') {
        this.search = moreUrl.split('=')[1]
      }

      this.getStarships(this.baseUrl + moreUrl);
    }
  }
</script>
