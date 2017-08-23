<template>
    <div>
        <p>Server Satus : {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Satus</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>