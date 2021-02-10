    const app = {
        data() {
            return {
                tasks: [
                    {title: 'COOKIERUN KINGDOM',done: false,
                    img: '/images/cookiekingdom.png',done: false},
                    {title: 'GENSHIN IMPACT', done: false,
                    img: '/images/Genshin_Impact.png',done: false},
                    {title: 'DOTA2', done: false,
                    img: '/images/DOTA2.jpg',done: false},
                ], 
            }
        },
        methods: {
            toggleDone(index){
                this.tasks[index].done = !this.tasks[index].done
            }
        },
        computed: {
            countUndone(){
                return this.tasks.filter( t => !t.done ).length
            }
        }
    }
    Vue.createApp(app).mount('#app')

