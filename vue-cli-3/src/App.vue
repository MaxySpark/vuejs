<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-xs-12">
               <!-- <app-quote quote="A Wonderful Quote!"></app-quote> -->

                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
               <!-- <app-quote>
                   <h2 slot="title">The Quote</h2>
                   <div slot="content ">
                        <p>A Wonderful Quote!</p>
                        <p>{{quote}}</p>
                    </div>
               </app-quote> -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Component</p>
                    </component>
                </keep-alive>
                

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './assets/components/Quote.vue';
    import Author from './assets/components/Author.vue';
    import New from './assets/components/New.vue';
    export default {
        data: function() {
            return {
                quote: "A Data Quote",
                selectedComponent: 'appQuote'
            };
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
