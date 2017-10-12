Vue.component('dialog', {
    template: '#dialog-template',
    data: function() {
        return {
            active: false
        }
    }
});

new Vue({
    el: "#content",
    data: {
        active: false
    },
    methods: {
        open: function() {
            this.active = true
        },
        close: function() {
            this.active = false
        },
        onConfirm: function() {
            this.close();
        },
        onClose: function() {
            this.close();
        }
    }
});
