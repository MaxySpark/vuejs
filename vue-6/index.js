new Vue({
    el: '#app',
    data: {
        attachRed : false,
        attachGreen : false,
        attachBlue : false,
        color: 'green',
        width: 200
    },
    computed: {
        divClasses : function() {
            return {
                red : this.attachRed,
                blue : !this.attachRed
            }
        },
        myStyle: function() {
            return {
                backgroundColor : this.color,
                width : this.width +'px'
            }
        }    
    }
});