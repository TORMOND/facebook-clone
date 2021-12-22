<template>
   <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">

           <!-- <span class="search" @click="toggle"><i class="fas fa-search"></i></span> -->
          </div>
          
          <div class="navigate" >
          <p @click="adminPage">Users</p>
          <p @click="reportsPage">Reports</p>
          <p @click="advertisementsPage">Advertisements</p>
          <p @click="analyticsPage">Analytics</p>
            
         
          </div>
          <div class="extras">
              <label @click="run">
            
                  <div class="user-pic">        
  <img :src="profilePic" v-if="profilePic=this.profilePic ">
              <span v-else><i class="fas fa-user-cog"></i></span>  
</div>   
              <p>{{name}}</p>
              </label>
             <!-- <span @click="open" class="create"><i class="fas fa-plus"></i></span> -->
             <!-- <div class="tooltip">Create Posts</div> -->
          <!-- <span><label class="user" ><i class="fas fa-users"></i></label></span>   -->
           <span><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i></span>
              <span @click="operate" class="home"><i class="fas fa-caret-down"></i></span>
              <!-- <div class="tooltiptext">Account</div> -->
          </div>
      </nav>

</template>
<script>
import{ app, db, auth, firebaseConfig, person, user } from '@/firebase.js'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"


export default {
    data() {
        return{

          
            
        }
    },
    methods: {
           adminPage(){
this.$router.push('/Admin')
},
     reportsPage(){
this.$router.push('/Reports')
},
advertisementsPage(){
this.$router.push('/Adverts')
},
analyticsPage(){
this.$router.push('/Analytics')
},

    },

}
</script>
<style scoped>
nav p{
    cursor: pointer;
    color: #65676B;
}

</style>