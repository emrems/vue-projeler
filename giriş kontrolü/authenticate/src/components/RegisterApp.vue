<template>
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h2>Register Sayfası</h2>
      <form>
        <div class="mb-3">
          <input v-model="fullName" type="text" class="form-control" id="fullName" placeholder="ismini gir">
        </div>
        <div class="mb-3">
          <input v-model="email"  type="email" class="form-control" id="email" placeholder="email gir">
        </div>
        <div class="mb-3">
          <input v-model="password"  type="password" class="form-control" id="password" placeholder="şifreni gir">
        </div>
        <button @click="onSave" type="submit" class="btn btn-primary w-100">Register</button>
      </form>
    </div>
  </div>
</div>

</template>

<script>
export default{
    data(){
        return{
            fullName:null,
            email:null,
            password:null
        }
    },
    methods : {
        onSave(){
            this.$router.push({name:'LoginPage'})
            const data ={
                fullName:this.fullName,
                email:this.email,
                password:this.password
            }
            this.$appAxios.post("users/",data).then(response => {
                console.log(response)
            }).catch(err =>{console.log(err)})
          
        }
    }
}
</script>