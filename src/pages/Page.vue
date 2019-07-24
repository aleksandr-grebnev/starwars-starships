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

      <h1 class="text-center" v-if="!preloader">{{ starship.name }}</h1>
      <div class="album py-5 bg-light" v-if="!preloader">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-12 box-shadow post-cards">
                <div class="card-body">
                  <h5 class="capitalize">Model: {{ starship.model }}</h5>
                  <p class="card-text"><b>Class: {{ starship.starship_class }}</b></p>
                  <p class="card-text">Manufacturer: {{ starship.manufacturer }}</p>
                  <p class="card-text">Cost: {{ starship.cost_in_credits }}</p>
                  <p class="card-text">Length: {{ starship.length }}</p>
                  <p class="card-text">Speed: {{ starship.max_atmosphering_speed }}</p>
                  <p class="card-text">Crew: {{ starship.crew }}</p>
                  <p class="card-text">Passengers: {{ starship.passengers }}</p>
                  <p class="card-text">Cargo: {{ starship.cargo_capacity }}</p>
                  <p class="card-text">Consumables: {{ starship.consumables }}</p>
                  <p class="card-text">MGLT: {{ starship.MGLT }}</p>
                  <div v-if="starship.pilots.length > 0">
                   <b>Pilots:</b>
                    <ul>
                      <li v-for="pilot in starship.pilots">
                          {{ pilot }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="starship.films.length > 0">
                    <b>Films:</b>
                    <ul>
                       <li v-for="film in starship.films">
                         {{ film }}
                       </li>
                    </ul>
                  </div>
                  <p class="card-text">{{ starship.created }}</p>
                  <p class="card-text">{{starship.edited }}</p>
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
  import moment from 'moment'

  export default {
    components: {
      MainLayout
    },
    data () {
      return {
          starship: {},
          baseUrl: 'https://swapi.co/api/starships/',
          preloader: false,
      }
    },
    methods: {
      getStarships (url) {
        this.preloader = true

        axios.get(url)
          .then(response => {
            console.log(response)
            this.starship = response.data;
            this.preloader = false
            this.starship.edited = moment(String(this.starship.edited)).format('MM DD YYYY hh:mm')
            this.starship.created = moment(String(this.starship.created)).format('MM DD YYYY hh:mm')
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
      let moreUrl = window.location.pathname.split('/')[2]

      console.log(this.baseUrl + moreUrl)
      this.getStarships(this.baseUrl + moreUrl);
    }
  }
</script>
