var app = new Vue({
    el: '#app',
    data: {
        shoping_list: [
            {
                name: "Apples",
                complated: false,
            },
            {
                name: "Bred",
                complated: false,
            },
            {
                name: "Banaaanaazzzzzz",
                complated: false,
            },
        ],
        new_item_title: '',
    },
    methods: {
        addNemItem: function(){
            var newItem = {
                name : this.new_item_title,
                complated: false,
            };
            this.shoping_list
        }
    }
})