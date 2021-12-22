<template>
<div id="reports">
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

<div class="contents">
<div id="users-reports">
    <tabel class="use" >
   
    <tr v-for="report in reports" :key="report">
        <td>{{report.Reporter}}</td>
       <td>{{report.message}}</td>
       <td>{{report.createdPostsId}}</td>
     
        <td></td>
        <i class="fas fa-ellipsis-v"></i>
    </tr>    
</tabel>

</div>
</div>


</div>
</template>
<script>
import{ app, db, auth, firebaseConfig, person, user } from '@/firebase.js'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"


export default {
    data() {
        return{ 
       reports:{}     
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

loadReports(){
const userRef = collection(db, 'reports')

onSnapshot(userRef, (snapshot)=>{
    let user = []
    snapshot.docs.forEach((doc)=>{
        user.push({...doc.data(), id:doc.id})
    this.reports[doc.id] = {...doc.data()}   
       
        console.log(this.reports)
         console.log(doc.data().Reporter)
    })
    })
},

    },
    beforeMount(){
    this.loadReports()

 },

}
</script>
<style scoped>
nav p{
    cursor: pointer;
    color: #65676B;
}
#reports{
    background: #f0f2f5;
    display: flex;
    flex-direction: column;
}
.users-reports{
    margin: auto;
}
.contents{
    
     background: #f0f2f5;
    display: flex;
    flex-direction: column;
}

</style>