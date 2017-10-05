<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <div class="header">
                            <button class="exit btn btn-default glyphicon glyphicon-remove" @click="exit"></button>
                            <div>
                                <h4>New Stick</h4>
                            </div>
                        </div>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            <!-- <div class="align-everything">
                                <label>Upload Photo: </label>
                                <input class="align-right" type="file" v-on:change="showSuccess">
                                <i v-if="uploading" class="fa fa-spinner fa-spin"></i>
                            </div> -->
                            <div class="align-everything">
                                <label>Image URL: </label><input class="form-control" type="text" placeholder="" v-model="keep.imgurl">
                            </div>
                            <div class="align-everything">
                                <label>Caption: </label><input class="form-control" type="text" placeholder="" v-model="keep.title">
                            </div>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="text-center">
                                <form @submit="createKeep()">
                                    <button type="submit" class="btn btn-default create-button" @click="exit"><div class="stylebtn">Create</div></button>
                                </form>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>
    export default {
        props: [],
        data() {
            return {
                keep: {
                    title: "",
                    imgurl: ""
                },
                //uploading: false,
                showModal: true
            }
        },
        methods: {
            save() {
                this.$emit('close', this.keep)
            },
            exit() {
                this.$emit('close')
            },
            createKeep() {
                var keep = {
                    title: this.keep.title,
                    imgurl: this.keep.imgurl,
                    UserId: this.credentials._id,
                    ownername: this.credentials.email
                }
                this.$store.dispatch("createKeep", keep)
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
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }
    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .create-button {
        margin: auto;
    }

    .exit {
        margin-left: 200px;
        margin-top: -30px;
    }

    .glyphicon-remove {
        float: right;
        margin-left: 10000px;
        /* display: block; */
    }

    h4 {
        font-family: 'Francois One', sans-serif;
        color: #2B346B;
    }

    .create-button {
        text-align: center;
    }

    .align-everything {
        margin-bottom: 10px;
    }

    .align-right {
        padding-left: 65px;
    }

    label {
        color: orange;
    }

    .stylebtn {
        font-family: 'Lobster', cursive;
        font-size: 20px;
        color: #2B346B;
    }
</style>