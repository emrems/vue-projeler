const app = Vue.createApp({
    data() {
        return {
            item: {
                name: '',
                price: 0,
                piece: 0,
                totalPrice: 0
            },
            isPriceDisabled: false,
            itemList: []
        };
    },
    methods: {
        addItem() {
            this.itemList.push({
                name: this.item.name,
                price: this.item.price,
                piece: this.item.piece,
                totalPrice: this.item.price * this.item.piece
            });
            this.cleanForm();
        },

        check() {
            if (this.item.name === "" || this.item.piece <= 0) {
                alert("Lütfen gerekli yerleri doldurun");
                return;
            }
            const repeatItem = this.itemList.find(value => value.name === this.item.name);
            if (repeatItem) {
                repeatItem.piece += this.item.piece;
                repeatItem.totalPrice = repeatItem.price * repeatItem.piece;
            } else {
                this.addItem();
            }
            this.cleanForm(); 
        },

        incrPrice(item) {
            item.piece++;
            item.totalPrice = item.price * item.piece;
        },

        decrPrice(item) {
            if (item.piece > 0) {
                item.piece--;
                item.totalPrice = item.price * item.piece;
            }
        },
        removeİtem(item){
            this.itemList = this.itemList.filter(t=>t.name!==item.name)
            // const index = this.itemList.indexOf(item);
            // for(let i=0; i<this.itemList.length; i++){
            //     if(this.itemList[i].name === item.name){
            //         this.itemList.pop(item);
            //     }
            // }

        },

        cleanForm() {
            this.item = {
                name: '',
                price: 0,
                piece: 0,
                totalPrice: 0
            };
        }
    },
    watch: {
        //item.name izle ve aynı ise fiyat inputunu devre dışı bırak
        'item.name': function (newName) {
            found=false;
            for(let i=0; i<this.itemList.length; i++){
                if(this.itemList[i].name===newName){
                    found=true;
                    break;
                }
            }
            this.isPriceDisabled=found;
        }
    },
    computed: {
        grandTotal() {
            let totalSum = 0;
            for (let i = 0; i < this.itemList.length; i++) {
                totalSum += this.itemList[i].totalPrice;
            }
            return totalSum;
        }
    }
}).mount("#app");
