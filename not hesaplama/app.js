const app = Vue.createApp({
    data(){
        return{
            vize:0,
            final:0,
            totalExam:0,
            message:"",
            showMessage:false
            
        }
    },
    methods:{
        calculate(e){
            this.totalExam = this.vize*0.4 + this.final*0.6;
            if(this.totalExam<45){
                this.message = "kaldı"
            }
            else{
                this.message = "geçti"
            }
            this.showMessage=true;
            this.vize=0;
            this.final=0;
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
            
            }

        
    },
    computed:{
       checkColor(){
        return {
            "green": this.totalExam>45,
            "red": this.totalExam<45,
            
        }
       }
       
    }
}).mount("#app")