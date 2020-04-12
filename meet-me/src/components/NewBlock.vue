<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 col-md-offset-3 form-group">
                <label>About Me</label>    
                <textarea class="form-control" rows="5" v-model="question" @keydown.enter="newBlock"></textarea>
            </div>

        
        </form>
        
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                question: '',
            };
        },
        methods: {
            newBlock() {
                console.log('New block');
            }
        }
        
    }   
</script>

<style scoped>
    
</style>