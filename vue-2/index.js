new Vue({
    el: '#app',
data: {
    title: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://git.maxyspark.com">MaxySpark</a>'
},
methods: {
    changeTitle: function() {
        this.title = "Hello";
        return this.title;
    }
}
});