    const app = {
        data() {
            return {
                tasks: [
                    {title: 'COOKIERUN KINGDOM',done: false,
                    img: '/images/cookiekingdom.png',done: false,
                    url:'https://www.cookierun-kingdom.com/th/',done: false,
                    description: 'เกมใหม่จาก คุกกี้รัน ที่มียอดดาวน์โหลดกว่าร้อยล้านครั้ง! พบกับเรื่องราวหลากรสชาติของเหล่าคุกกี้ที่ปะทุขึ้น ณ อาณาจักรแสนหวานได้แล้วตอนนี้!'},
                    {title: 'GENSHIN IMPACT', done: false,
                    img: '/images/Genshin_Impact.png',done: false,
                    url:'https://genshin.mihoyo.com/th/home',
                    description:'"Genshin Impact" คือเกมผจญภัยแนว RPG แบบโอเพ่นเวิลด์ใหม่ ซึ่งผลิตโดยบริษัท miHoYo คุณจะได้สัมผัสการผจญภัยบนโลกแห่งจิตนาการที่มีนามว่า "โลกแห่ง Teyvat" ในโลกโอเพ่นเวิลด์แสนกว้างใหญ่นี้ คุณจะได้เดินทางไปยังประเทศทั้งเจ็ด พบปะผู้คนหลากหลายรูปแบบ ได้รับพลังที่หลากหลาย ร่วมมือกับเพื่อนต่อสู้กับศัตรูที่ร้ายกาจ และตามหาพี่น้องที่หายไป'},
                    {title: 'DOTA2', done: false,
                    img: '/images/DOTA2.jpg',done: false,
                    url:'https://www.dota2.com/play/',
                    description:'DOTA 2 เป็นเกมแนว Action-RTS หรือ MOBA ที่เป็นการพัฒนาต่อยอดมาจากเกม DOTA ซึ่งรู้จักกันมานานในวงการเกมออนไลน์ ในภาคนี้เป็นการพัฒนาโดยทีมผู้สร้างเดิมอย่าง Iceforg ภายใต้สังกัด Valve ซึ่งมีชื่อเสียงการันตีถึงคุณภาพเป็นที่รู้จักมานาน และวันนี้ DOTA 2 พร้อมแล้วให้เกมเมอร์มืออาชีพได้หวนคืนสู่เกมระดับตำนานบันลือโลกตัวจริง รวมทั้งเกมเมอร์ใหม่ก็ไม่น้อยหน้าเพราะจะได้สัมผัสในรูปแบบการเล่นเข้าใจง่าย พร้อมทั้งมีเวอร์ชั่นภาษาไทยอีกด้วย'},
                    
                ],
                heart: '/images/like.png',
                
            }
        },
        methods: {
            toggleDone(index){
                this.tasks[index].done = !this.tasks[index].done
            }
        },
        computed: {
            countDone(){
                return this.tasks.filter( t => t.done ).length
            },
            countItem(){
                return this.tasks.length
            }
            
        }
    }
    Vue.createApp(app).mount('#app')

    