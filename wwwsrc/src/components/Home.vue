<template>
    <div class="home">
        <h2>Here are some of the Sticks people have been posting.</h2>
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
    import keeps from './Keeps'
    export default {
        name: 'home',
        components: {
            keeps
        },
        // mounted() {
        //     this.$store.dispatch("getKeeps", { type: "any", query: "" })
        // },

    }

</script>

<style>

    h2 {
        font-family: 'Francois One', sans-serif;
        color: #42234f;
    }

    .home {
        background-color: pink;
        padding-top: 20px;
        padding-bottom: 50px;
    }

</style>