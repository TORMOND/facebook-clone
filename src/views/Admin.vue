<template >
    <div id="admin">
             
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
    <tr v-for="user in users" :key="user">
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
    
    console.log(users)
})

  } else {
   console.log("no user")
   
  }


});
        },
    },

     beforeMount(){
    this.persons()
 },
}
</script>
<style scoped>
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
}
tr{
    border-top: 0.5px solid #ceced1;
}
tr:hover{
    background: #f0f2f5;
}
tr:hover.fa-ellipsis-v{
 visibility: visible;
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