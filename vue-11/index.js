new Vue({
    el: "#app",
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function() {
        console.log('breforeCreate()')
    },
    created: function() {
        console.log('created()')
    },
    beforeMount: function() {
        console.log('breforeMount()')
    },
    beforeUpdate: function() {
        console.log('breforeUpdate()')
    },
    updated: function() {
        console.log('updated()')
    },
    beforeDestroy: function() {
        console.log('beforeDestroy()')
    },
    destroyed: function() {
        console.log('destroyed()')
    },
    methods: {
        destroy: function () {
            this.$destroy();
        }
    }
});