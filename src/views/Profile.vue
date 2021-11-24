<template>
    <div id="profile">
         <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">
          <!-- <i class="fas fa-search"></i> -->
          </div>
          <div class="navigate">
              
            <span><i class="fas fa-home"></i></span>
           <span><i class="fab fa-youtube"></i></span>
             <span><i class="fas fa-store"></i></span>
             <!-- <span class="material-icons-outlined">storefront</span>  -->
             <span><label class="user"><i class="fas fa-users"></i></label></span>
          </div>
          <div class="extras">
              <span><i class="fas fa-user"></i></span>
             <span><i class="fas fa-plus"></i></span>
              <span><i class="fab fa-facebook-messenger"></i></span>
              <span><i class="fas fa-bell"></i></span>
              <span @click="operate"><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
        <div class="container">
           <div class="back-image">
               <div class="circle">
<img src="https://i.gadgets360cdn.com/large/Bored_ape_NFT_1631274836067.jpg?downsize=950:*">
               </div>        
           </div>
           <div class="information">
               <h1>{{name}}</h1>
           </div>
</div>
<div class="wrapper">
<div class="wrap">
    <div class="friends">
        <div class="all-friends">
            <h1>Friends</h1>
            <!-- <a>See all Friends</a>
            <span>251 friends</span> -->
        </div>
        <div class="persons">
            <div class="images" >
                <img src="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip">
                </div>
                
                            <div class="images">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hashmask_15753.jpg/1200px-Hashmask_15753.jpg">
               <p>{{user}}</p>
                </div>
                            <div class="images">
                                <img src="https://cdn.substack.com/image/fetch/w_1200,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb27d35ff-fab9-423f-a430-7b920fe9b412_640x902.jpeg">
                <p>{{user}}</p>
                </div>
                            <div class="images">
                                <img src="https://media.voguebusiness.com/photos/6111311e4a8a0fcfb2812122/1:1/w_2000,h_2000,c_limit/luxury-nfts-in-games-voguebus-burberry_mythical-games-aug-21-story.jpg">
               <p>{{user}}</p>
                </div>
                            <div class="images">
                                <img src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg">
               <p>{{user}}</p>
                </div>
                            <div class="images">
                                <img src="https://miro.medium.com/max/1400/1*QK11i-7_WUrUHBcwIKh5Qg.jpeg">
               <p>{{user}}</p>
                </div>
                            <div class="images">
                                <img src="https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1618913451/itpro/2021/04/shutterstock_sculpture_art.jpg">
             <p>{{user}}</p>
                </div>
                <div class="images">
                    <img src="https://www.altcoinbuzz.io/wp-content/uploads/2021/01/Enjin-MetaverseMe-Partner-to-Merge-NFTs-and-Augmented-Reality-1.jpg">
                <p>{{user}}</p>
                </div>
                <div class="images">
                    <img src="https://www.denofgeek.com/wp-content/uploads/2020/11/webstory-deadpool-image06-1.jpg?fit=1170%2C780">
               <p>{{user}}</p>
                </div>
                 
        </div>
    </div>
    <div class="posts">
      <div class="post">
  <span><i class="fas fa-user"></i></span>
 <p>Victor Monderu</p>
    </div>
    <div class="sent-image">
        <img src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/04/Rolls-Royce-Phantom-Black-1-e1619613317783.jpg">
    </div>
      <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span @click="like" v-show="present" class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like" v-show="present" class="heart"><i class="fas fa-heart"></i></span>

          <span @click="unlike" v-show="absent " class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike" v-show="absent" class="heart"><i class="fas fa-heart"></i></span>
       <p>
           <!-- <label v-show="unliked">177k</label>
           <label v-show="liked">You and 177k others</label> -->

           <label v-if="number">{{number}}</label>
          </p>
        </div>
        <div class="reviews">

        <p>{{more.length}} comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label @click="like" class="thumbs-up" v-show="present" ><i class="fas fa-thumbs-up"></i>like</label>
          <label @click="unlike" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
    <div class="write-comment">
        <div class="post">
  <span><i class="fas fa-user"></i></span>
 <input type="text" placeholder="write a comment" v-model="comments" >
 <div @click="send" style="cursor:pointer" class="sent">
 <i class="far fa-paper-plane"></i>
 <p>Send</p>
 </div>
    </div> 

<div class="posted-comments" style="padding:16px 28px">
    
  <span @click="showComments" class="more">More comments.....</span>
   <p>{{comments}}</p>
<div v-show="moreComments" v-for="item in more" :key="item" class="item">
   <p>{{item}}</p>
   
    </div>
<!-- v-for="comment in comments" :key="comment" -->
</div>
 
    </div>
    </div>
</div>
</div>
    </div>
</template>
<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getStorage, ref } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyCkWbp12XRoV38kEajV7hBahdxwUxSXiVc",
//   authDomain: "meta-fb.firebaseapp.com",
//   projectId: "meta-fb",
//   storageBucket: "meta-fb.appspot.com",
//   messagingSenderId: "973161692832",
//   appId: "1:973161692832:web:82d9c0d61cd734369493c5",
//   measurementId: "G-76Q2K0FMJ6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
//  const auth = getAuth(app);
// // const analytics = getAnalytics(app);


// //  Create a reference with an initial file path and name
// const storage = getStorage();
// const pathReference = ref(storage, 'meta-fb/Hashmask_15753.jpg');

// // Create a reference from a Google Cloud Storage URI
// const gsReference = ref(storage, 'gs://meta-fb.appspot.com/Hashmask_15753.jpg');

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/meta-fb.appspot.com/o/Hashmask_15753.jpg?alt=media&token=52d02ebf-0015-4129-ad34-71d9aa10e113');  
// console.log(httpsReference)

// const user = auth.currentUser;

 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("current users ID is",uid)
    console.log(user.email)

let currentUser = auth.currentUser
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("email", "==", currentUser.email))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
        console.log(doc.data())
        
    })
    
    console.log(users)
})

  } else {
   console.log("no user")
   
  }
});


 import{ app, db, auth, firebaseConfig, person, user } from '@/firebase.js'



export default {
    data() {
        return{
name:"Victor Monderu",
comments:'',
user:"friends",
unliked:true,
liked:false,
number: 177,
present:true,
absent:false,
more:[],
moreComments:false,
posts:[],

        }
    },
    methods: {

        unlike:function(){
    const thumb = document.querySelector('.thumbs-up');
thumb.style.color = "#65675b"; 
this.number--
this.absent = false
this.present = true

        },
        like:function(){
    const thumb = document.querySelector('.thumbs-up');
thumb.style.color = "#216fd8"; 
this.number++
this.absent = true
this.present = false
        },
send:function(){

    if(this.comments===""){

    }else{
       const docRef = addDoc(collection(db, "Posts"), {
     comments:this.comments,    
     
       }) 
       console.log(user)
       }
},
showComments:function(){

const colRef = collection(db, 'Posts')

onSnapshot(colRef, (snapshot)=>{
    let posts = []
    snapshot.docs.forEach((doc)=>{
        posts.push({...doc.data(), id:doc.id})
        console.log(doc.data().comments)
         this.more.push (doc.data().comments)
    this.moreComments = true
    })
    console.log(person)
    console.log(user.email)
})
},
run:function(){

},

    },
}
</script>
<style scoped>
.friends{
    background: #fff;
    border-radius: 10px;
    padding: 10px;
}
.friends h1{
    font-size: 20px;
}
.persons{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 16px;
}
.images{
   cursor: pointer;
    width: 101.98px;
    height: 120px;
}
.images img{
     width: 101.98px; 
      height:101.98px;
      border-radius: 10px;

}
#profile{
    background: #f0f2f5;
     display: flex;
     flex-direction: column;
}
.container{
  background: #fff;
     display: flex;
     width: 100%;
     flex-direction: column;
}
.back-image{
background-image: url();
background: #ceced1;
margin: 0 auto;
border-radius: 10px;
padding: 248.18px 0 0;
width: calc(100% - 40%);
display: flex;

}
.circle img{
    width:168px;
    height: 168px;
    border-radius: 50%;
    
}
.circle{
     width:178px;
    height: 178px;
    padding: 5px;
    border-radius: 50%;
    background: #fff;
    object-fit: fill;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
h1{
    margin: 0 auto;

}
.information{
    display: flex;
    padding:16px 12px 0 ;
}
.wrapper{
    display: flex;
    justify-content: center;
}
.wrap{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    padding: 20px 40px;
    gap: 30px;
}
.posts{
    background: #fff;
    border-radius: 10px;
   
}
.post span{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e4e6eb;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 30px;
    border: 1px solid #d3d4d4;
    cursor: pointer;
}
.post{
    display: flex;
    gap: 20px;
    padding: 12px 16px 16px;
    align-items: center;
    margin: 0 auto;
}

.post input{
padding: 8px 12px;
font-size: 17px;
color: #65676b;
background: #f0f2f5;
border-radius: 36px;
border: none;
width: 80%;
cursor: pointer;
}
.post input:focus{
    outline: none;
}
.engagement{
 padding: 10px 0;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  color: #65676b;
  padding: 12px 16px 0;
  border-bottom: 1px solid #65676b;
}
.emoji .like{
 background: #216FD8;
 color: #fff;
 border-radius:50%;
 display: flex;
 justify-content: center;
 align-items: center;   
 width: 20px;
 height: 20px;
 font-size: 12px;
 cursor: pointer;
}
.emoji .heart{
 background:crimson;
 color: #fff;
 border-radius:50%;
 display: flex;
 justify-content: center;
 align-items: center;   
 width: 20px;
 height: 20px;
 font-size: 12px;
 cursor: pointer;
}
.emoji{
   display: flex;  
   align-items: center; 
   gap: 10px;
}
.reviews{
      display: flex;
      align-items: center;
      gap: 10px;
}
.action{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 16px 16px;
}
.posts label{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #65676b;
    gap: 5px;
    cursor: pointer; 
    padding: 0 12px;
    height: 44px;
    border-radius: 12px;
}
.posts label:hover{
    background: #f0f2f5;
}

.posted-comments p{
    width: 80%;
}
.posted-comments{
    margin: 0 auto;
    border-top:0.5px solid #bfc0c2 ;
}
.sent{
    display: flex;
     border-radius: 12px;
     gap:10px;
     background: #f0f2f5;
     align-items: center;
     padding:5px 16px;
}
.more{
    font-size: 14px;
    color: #ceced1;
    cursor: pointer;
}
.item p{
   background: #f0f2f5; 
   padding: 10px 16px;
   border-radius: 10px;
}
</style>