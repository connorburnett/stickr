<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <div class="col-xs-10">
                    <h3>Your Sticks</h3>
                    <button class="btn btn-default" type="button" @click="showModal = true"><div class="stylebtn">Create a Stick</div></button>
                </div>
                <div class="col-xs-2">
                    <h3>Your Vaults</h3>
                    <button class="btn btn-default" type="button" @click="showVaultModal = true"><div class="stylebtn">Create a Vault</div></button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10">
                    <keeps></keeps>
                </div>
                <div class="col-xs-2 vaultback">
                    <div class="vaults" v-for="vault in vaults">
                        <span @click="getVaults(vault._id)">
                        <router-link :to="'/vault/' + vault._id"><div class="titlething">{{vault.title}}</div></router-link>
                    </span>
                    </div>
                </div>
            </div>
            <modal-keep-create v-if="showModal" @close="createKeep"></modal-keep-create>
            <modal-vault-create v-if="showVaultModal" @close="createVault"></modal-vault-create>
        </div>
    </div>

</template>

<script>
    import Keeps from './Keeps'
    import ModalKeepCreate from './ModalKeepCreate'
    import ModalVaultCreate from './ModalVaultCreate'

    export default {
        name: 'profile',
        components: {
            Keeps,
            ModalKeepCreate,
            ModalVaultCreate
        },
        data() {
            return {
                showModal: false,
                showVaultModal: false
            }
        },
        // watch: {
        //     userId: function () {
        //         this.$store.dispatch("getUser", this.userId)
        //     }
        // },
        mounted() {
            //this.$store.dispatch("getUser", this.$route.params.userid)
            this.$store.dispatch("getUserKeeps", this.$route.params.userid)
            console.log(this.$route.params.userid)
            this.$store.dispatch("getVaults", this.$route.params.userid)
        },
        methods: {

            createKeep(keep) {
                this.showModal = false;
            },
            createVault(vault) {
                this.showVaultModal = false;
            },
            getVaults(userid) {
                this.$store.dispatch('getVaults', userid)
            }
        },
        computed: {
            userId() {
                return this.$route.params.userid
            },
            userView() {
                return this.$store.state.viewUser
            },
            user() {
                //console.log("Computed:", this.$store.state.user)
                return this.$store.state.credentials
            },
            vaults() {
                return this.$store.state.vaults
            }
        }
    }

</script>

<style scoped>
    .stylebtn {
        font-family: 'Lobster', cursive;
        font-size: 20px;
        color: #2B346B;
    }

    .titlething {
        font-family: 'Francois One', sans-serif;
        color: #2B346B;
        margin-top: 20px;
        font-size: 16px;
    }

    h3 {
        font-family: 'Francois One', sans-serif;
        color: #2B346B;
    }

    .profile {
        background-color: #FFB76A;
        padding-top: 20px;
        padding-bottom: 50px;
    }

    /* .vaults {
        background-color: white;
        border-radius: 3px;
        border: 2px;
        border-color: #42234f;
        padding-bottom: 0px;
        padding-top: 0px;
        margin-top: 10px;
    } */
</style>