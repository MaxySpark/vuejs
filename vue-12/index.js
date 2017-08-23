// var data = {
//     status: 'Critical'
// };

// Vue.component('my-cmp',{
//     data: function () {
//         return {
//             status: 'Critical'
//         };
//     },
//     template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
//     methods: {
//         changeStatus: function () {
//             this.status = 'Changed';
//         }
//     }
// });

var cmp = {
    data: function () {
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function () {
            this.status = 'Changed';
        }
    }
}

new Vue({
    el: '#app1',
    components: {
        'my-cmp': cmp
    }
});
new Vue({
    el: '#app2'
});