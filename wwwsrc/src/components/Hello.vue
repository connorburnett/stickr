<template>
  <div class="hello">
    <h1 class="titlefont">Welcome to Stickr</h1>

    <div class="heading">
      <p>Get Started Today!</p>
      <button class="btn btn-default b" @click="showLogin"><div class="stylebtn">Login</div></button>
      <button class="btn btn-default b" @click="showSignup"><div class="stylebtn">Sign Up</div></button>


      <div id="stuff">

        <form v-show="seen" @submit.prevent="createUser()">
          <input class="formcss" type="text" v-model="credentials.email" placeholder="email">
          <input class="formcss" type="password" v-model="credentials.password" placeholder="password">
          <button class="btn btn-default c" type="submit"><div class="stylebtn">Create</div></button>
        </form>
        <form v-show="unameSeen" @submit.prevent="loginUser()">
          <input class="formcss" type="text" v-model="credentials.email" placeholder="email">
          <input class="formcss" type="password" v-model="credentials.password" placeholder="password">
          <button class="btn btn-default c" type="submit"><div class="stylebtn">Go</div></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'hello',
    components: {
    },
    data() {
      return {
        credentials: {
          password: '',
          email: ''
        },
        name: '',
        description: '',
        see: true,
        seen: false,
        unameSeen: false
      }
    },
    mounted() {
    },
    methods: {
      showSignup() {
        if (this.unameSeen) {
          this.showLogin()
        }
        this.seen = !this.seen
      },
      showLogin() {
        if (this.seen) {
          this.showSignup()
        }
        this.unameSeen = !this.unameSeen
      },

      createUser() {
        console.log(this.credentials)
        this.$store.dispatch('register', JSON.parse(JSON.stringify(this.credentials)))
        this.credentials = {
          email: '',
          password: ''
        }
      },
      loginUser() {
        this.$store.dispatch('login', JSON.parse(JSON.stringify(this.credentials)))
        this.credentials = {
          email: '',
          password: ''
        }
      },
    },
    computed: {
      credentials() {
        return this.$store.state.credentials
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .titlefont {
    font-family: 'Lobster', cursive;
    font-size: 50px;
    color: #42234F;
  }

  .hello {
    background-color: pink;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  p {
    font-size: 25px;
    font-family: 'Francois One', sans-serif;
    color: #42234f
  }

  .stylebtn{
    font-family: 'Lobster', cursive;
    font-size: 20px;
    color: #42234F;
  }
</style>