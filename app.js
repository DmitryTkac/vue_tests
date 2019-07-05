Vue.component("saggan", {
    template: "<p>This is the paragraph which is generated from template</p>"
});

new Vue({
    el: '#vue-app',
    data: {
        name: "SaGGaN",
        job: "Miner",
        website: "http://new.nedius.com/lite",
        websiteTag: "<a v-bind:href='website'> nedius</a>",
        //EVENTS LESSON VARS
        year: 2000,
        x: 0,
        y: 0,
        //Dynamic Class
        red: true,

        //refs

        output: "banana"
    },
    methods: {
        greet: function (which) {
            return which + " Mining! " + this.name;
        },
        add: function() {
            this.year++;
        },
        subtract: function() {
            this.year--;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        clickMe: function() {
            alert("AAAAAAAAAAAAAAAAAAAaaaaaaaaaaaa! You click me ^.^!");
        },

        log: function() {
            console.log("AAAAAAAAAAAAAaaaaaaaaaaaa your press some combo!");
        },

        changeColor: function() {
            this.red = !this.red;
        },

        //Refs

        readRefs: function() {
            console.log(this.$refs.input.value);
            console.log(this.$refs.input);
            console.log(this.$refs);
            this.output = this.$refs.input.value;
            this.$refs.saggan.innerText = "Nedius";
        }
    },

    computed: {
        showNow: function() {
            return Date.apply(Date.now());
        }
    }

});