<template>
    <div class="totalvault">
        <!-- <div v-for="vault in vaults"> -->
            <h3>{{vault.title}}</h3>
        <!-- </div> -->

        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <keeps></keeps>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Profile from './Profile'
    import keeps from './Keeps'
    export default {
        props: [''],
        name: 'vault',
        components: {
            Profile,
            keeps
        },
        data() {
            return {
                credentials: {
                    title: ''
                }
            }
        },
        mounted() {
            this.$root.$store.dispatch('getKeepsByVault', this.$route.params.vaultId)
        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            },
            vaults() {
                return this.$store.state.vaults
            },
            keeps() {
                return this.$store.state.keeps
            }
        },
        methods: {
            // getVaults(userid) {
            //     this.$store.dispatch('getVaults', userid)
            // }
        }

    }

</script>

<style scoped>
    .totalvault {
        background-color: #FFB76A;
        padding-top: 20px;
        padding-bottom: 50px;
    }

    .stylebtn {
        font-family: 'Lobster', cursive;
        font-size: 20px;
        color: #2B346B;
    }

    h3 {
        font-family: 'Francois One', sans-serif;
        color: #2B346B;
    }
</style>