<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <!-- Mobile Display NavBar -->
                <div class="navbar-header">
                    <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button> -->
                    <div>
                        <router-link class="navbar-brand" :to="{name: 'Home'}"><div class="color-thing">Stickr</div></router-link>
                    </div>
                </div>

                <!-- Regular view -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <div class="nav navbar-nav navbar-right align-everything">

                        <ul class="menu" v-if="credentials.email != null">
                            <router-link :to="'/profile/' + credentials._id" class="navbar-brand navbar-brand2"><div class="color-thing">Profile</div></router-link>
                            <div class="navbar-brand navbar-brand2" @click="logout"><a href="#"><div class="color-thing">Logout</div></a></div>
                        </ul>

                        <div class="menu" v-else>
                        </div>

                    </div>

                </div>
                <!-- End Regular View-->
            </div>
            <!-- End container -->
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'navbar',
        components: {
        },
        data() {
            return {
                vault: {
                    title: "",
                }
            }
        },
        methods: {
            logout() {
                this.$store.dispatch("logout")
            }
        },
        computed: {
            credentials() {
                return this.$store.state.credentials
            }
        }
    }

</script>

<style scoped>

    .color-thing {
        color: pink;
    }
    .login {
        margin-top: 8px;
    }

    nav {
        background-color: #42234F;
        border: none;
        border-radius: 0;
    }

    .navbar-default .navbar-nav>li>a {
        color: white;
    }

    .mail-number {
        padding-right: 10px;
    }

    .navbar-brand {
        font-family: 'Lobster', cursive;
        font-size: 30px;
    }
    .navbar-brand2 {
        font-family: 'Francois One', sans-serif;
        font-size: 17px;
    }
</style>