window.onload = function () {
    const app = new Vue({
        el: '#app',
        data() {
            return {
                mmm: 111,
            }
        },
        methods: {
            add() {
                this.mmm += 1
            },
        },
    })
}
