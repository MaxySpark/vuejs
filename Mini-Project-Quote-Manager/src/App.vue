<template>
    <div class="container">
        <app-header :qouteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote($event)"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="delQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete It
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Just A Quote'                    
                ],
                maxQuotes: 10
            };
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) { 
                if(this.quotes.length >= this.maxQuotes) {
                    return alert("Please Delete A Quote");
                }
                this.quotes.push(quote);
            },
            delQuote(index) {
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>
</style>
