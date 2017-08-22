var data = {
    title: 'The Vue Instane',
    showParagraph: false
};

Vue.component('hello',{
    template: '<h1>Hello Temp Component!</h1>'
});

var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function () {
           this.showParagraph = true;
           this.updateTitle('The VueJS Instance (Updates)'); 
        },
        updateTitle: function (title) {
            this.title = title; 
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert("Title Changed, new Value : "+value);
        }
    }
    
});

var vm2 = new Vue({
    // el: '#app2',
    data: {
        title: 'The Vue Second Instane',
        showParagraph: false
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed';
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert("Title Changed, new Value : "+value);
        }
    }
    
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});




console.log(vm1.$data);
vm1.$refs.heading.innerText = "From vm1.$refs.heading.innerText";
vm2.$mount('#app2');

setTimeout(function() {
    vm1.title = "By Timer";
    vm1.show();
}, 3000);

// vm3.$mount('#app3');

vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);
