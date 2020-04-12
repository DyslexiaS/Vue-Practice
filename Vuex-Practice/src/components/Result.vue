<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters({
            counter: 'doubleCounter',
            stringCounter: 'stringCounter'
        })
    }
</script>