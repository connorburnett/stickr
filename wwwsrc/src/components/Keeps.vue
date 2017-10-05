<template>
    <div class="row">
        <div v-for="keep in keeps">
            <div class="col-xs-3">
                <div class="keep">
                    <div class="box">
                        <img :src="keep.imgurl" style="max-width:200px">
                        <h4 class="keep-description">{{keep.title}}</h4>
                        <div class="add-keep">
                            <button type="button" class="btn btn-default" @click="showModal = true"><div class="stylebtn">Add to Vault</div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal-add-keep v-if="showModal" @close="addKeep"></modal-add-keep>
    </div>
</template>

<script>
    import ModalAddKeep from './ModalAddKeep'
    export default {
        name: 'keeps',
        components: {
            ModalAddKeep
        },
        data() {
            return {
                showModal: false
            }
        },
        mounted() {
            this.$store.dispatch("getUserKeeps", this.$route.params.userid)
        },
        watch: {
            userId: function () {
                this.$store.dispatch("getUserKeeps", this.$route.params.userid)
            }
        },
        methods: {
            // updateSong(song) {
            //     this.showModal = false
            // },
            // save() {
            //     this.$emit('close', this.song)
            // },
            // exit() {
            //     this.$emit('close')
            // },
            // updateSong(song) {
            //     this.$store.dispatch("updateSong", song)
            // },
            // deleteSong(project) {
            //     console.log('deleteSong', project)
            //     this.$store.dispatch("deleteSong", project)
            //     this.$emit('close')
            // }
            addKeep(keep) {
                this.showModal = false
            }
        },
        computed: {
            userId() {
                return this.$route.params.userid
            },
            userView() {
                return this.$store.state.viewUser
            },
            keeps() {
                return this.$store.state.keeps
            },
            keepView() {
                return this.$store.state.keepView
            },
            credentials() {
                //console.log("Computed:", this.$store.state.user)
                return this.$store.state.credentials
            }
        }
    }

</script>

<style scoped>
    h4 {
        font-family: 'Francois One', sans-serif;
        color: #2B346B;
    }

    .box {
        background-color: white;
        border-radius: 5px;
        border: 2px;
        border-color: #2B346B;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-top: 10px;
    }
    .stylebtn {
        font-family: 'Lobster', cursive;
        font-size: 15px;
        color: #2B346B;
    }
</style>