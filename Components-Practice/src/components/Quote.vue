<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quotes">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['quotes']
}
</script>

<style scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .quotes {
        cursor: pointer;
    }
    
    .quotes:hover {
        background-color: skyblue;
    }


</style>