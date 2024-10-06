<template>
    
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h2>Login Sayfası</h2>
      <form>
        <div class="mb-3">
          
          <input v-model="userData.email" type="email" class="form-control" id="email" placeholder="e-mail gir">
        </div>
        <div class="mb-3">
          
          <input v-model="userData.password" type="password" class="form-control" id="password" placeholder="şifreni gir">
        </div>
        <button @click="login" type="button" class="btn btn-primary w-100">Giriş yap</button>
      </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            userData:{
                email : null,
                password : null
            }
        }
    },
    methods : {
        login(){
            this.$appAxios.get(`users?email=${this.userData.email}&password=${this.userData.password}`).then(response=>{
                if(response.data.length===0){
                   alert("giriş başarısız")
                   this.$router.push({name:'LoginPage'})
                }
                else{
                    this.$store.commit('setUser',response.data[0])
                    this.$router.push({name:'HomePage'})
                }
            })
            
        }
    }
}

</script>