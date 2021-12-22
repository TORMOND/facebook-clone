<template >
    <div id="admin">
 <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">

           <!-- <span class="search" @click="toggle"><i class="fas fa-search"></i></span> -->
          </div>
          
          <div class="navigate" >
          <p>Users</p>
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

             
<div class="users">
 <div class="controls"><input type="text" v-model="findUser" placeholder="Search by email address or USER UID">
 <div class="btn"><button>Add Users</button></div>
<div class="functions"><i class="fas fa-ellipsis-v"></i></div>
 
 </div>
   
<tabel class="use" >
    <tr>
        <th>Identifier</th>
        <th>Provider</th>
        <th>Created In </th>
        <th>Status</th>
        <th>user UID</th>
    </tr>
    <tr v-for="user in users" :key="user" @click="pool(user.id)">
        <td>{{user.email}}</td>
        <td><i class="fas fa-envelope"></i></td>
        <td>Nov 25, 2021</td>
        <td>Active</td>
        <td>{{user.id}}</td>
        <i class="fas fa-ellipsis-v"></i>
    </tr>    
</tabel>

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
            findUser:'',
            users:[],
            // hide:false,
            navigator:[
                {name:"Users"},
                {name:"Reports"},
                 {name:"Advertisements"},
                 {name:"Analytics"}
            ]
        }
    },
    methods: {
        persons:function(){
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("current users ID is",uid)
    console.log(user.email)


const userRef = collection(db, 'user-Details')

onSnapshot(userRef, (snapshot)=>{
    let user = []
    snapshot.docs.forEach((doc)=>{
        user.push({...doc.data(), id:doc.id})
         this.users.push (doc.data())
       

        console.log(doc.id)
         console.log(doc.data().email)
        
    })
    
  
})

  } else {
   console.log("no user")
   
  }


});
        },
pool:function(id){
//   console.log(id)
  this.$router.push({ name: 'AdminUsers', params: { id: id }})
// const useRef = collection(db, 'user-Details')

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

     beforeMount(){
    this.persons()
 },
}
</script>
<style scoped>
nav p{
    cursor: pointer;
    color: #65676B;
}

#admin{
    background: #f0f2f5;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
}
.users{
    display: flex;
    margin: auto;
    flex-direction: column;
    border-radius: 10px; 
    background: #fff;
    padding: 8px 24px;
    box-shadow: 2px 2px 4px #ceced1;
    
}
.controls{
    display: flex;
    gap:10px;
   align-items: center;
}
.btn{
    padding: 0 24px;
}
.controls button{
    height: 36px;
    background: #1a73e8;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.functions{
    padding: 0 24px;
    cursor: pointer;
}
 .fa-ellipsis-v{
    color: #65676B;
}
.use .fa-ellipsis-v{
    color: #65676B;
    visibility: hidden;
   
}
.use{
    padding: 12px 16px;
}
.use td{
    margin: 10px; 
     color: #65676B;
     font-size: 14px;
     padding: 14px 24px;
     cursor: pointer;
}
tr{
    border-top: 0.5px solid #ceced1;
}
tr:hover{
    background: #f0f2f5;
}
td:hover+.fa-ellipsis-v{
 visibility: visible;
}
.fa-ellipsis-v:hover{
    cursor: pointer;
}
.users input{
    background: #f0f2f5;
    border: none;
    padding: 8px 12px;
    width: 65%;
    border-radius: 10px;
}
.users input:focus{
    outline-color: #1877f2;
    background: #fff;
}

.fa-envelope{
    color: #65676B;
}
</style>