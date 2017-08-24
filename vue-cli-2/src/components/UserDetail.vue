<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age : {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props : {
            myName: String,
            resetNameFn : Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
             },
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset',this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEditedDirect', (data)=>{
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
