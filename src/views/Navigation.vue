<template>
    <div id="fb">
        <div id="opt">
      <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">

           <span class="search" @click="toggle"><i class="fas fa-search"></i></span>
          </div>
          
          <div class="navigate">
              
            <span ><i class="fas fa-home"></i></span>
            
           <span><i class="fab fa-youtube"></i></span>
             <span><i class="fas fa-store"></i></span>
             <!-- <span class="material-icons-outlined">storefront</span>  -->
             <span><label class="user" ><i class="fas fa-users"></i></label></span>
          </div>
          <div class="extras">
              <label @click="run">
              <!-- <span><i class="fas fa-user"></i></span> -->
                  <div class="user-pic">
  <img :src="profilePic">
</div>   
              {{name}}
              </label>
             <span @click="open" class="create"><i class="fas fa-plus"></i></span>
             <div class="tooltip">Create Posts</div>
              <span class="messenger"><i class="fab fa-facebook-messenger"></i></span>
              <span class="bells"><i class="fas fa-bell"></i></span>
              <span @click="operate" class="home"><i class="fas fa-caret-down"></i></span>
              <div class="tooltiptext">Account</div>
          </div>
      </nav>
      <div class="container">
<div class="grid">

<div class="part-1">
    <div class="post" @click="run">
    <div class="user-pic">
  <img :src="profilePic">
</div>   
  <!-- <span><i class="fas fa-user"></i></span> -->
  <p>{{name}} {{secondName}}</p>
    </div>
    <label><i class="fas fa-users"></i>Friends</label>
    <label><i class="fas fa-bookmark"></i>Saved</label>
    <label><i class="fas fa-users"></i>Groups</label>
    <label><i class="fad fa-store"></i>Marketplace</label>
    <label><i class="fab fa-youtube"></i>Watch</label>
    <label><i class="fas fa-file"></i>Pages</label>
    <label><i class="fas fa-calendar-alt"></i>Events</label>
</div>


<div class="content">
<div class="wrap">
    <div class="postz">

     <div class="user-pic">
  <img :src="profilePic">
</div>   
  <input type="text" placeholder="Whats on Your mind?" @click="open">
    </div>
  <div class="post-2">
<label  @click="open"><i class="far fa-images"  ></i>Photo/Video</label>
<label  @click="open"><i class="fas fa-user-tag"></i>Tag friends</label>
<label  @click="open"><i class="fas fa-laugh"></i>Feeling/Activity</label>
</div>
</div>


<div v-for="post in createdPosts" :key="post">
<div class="card" >
    <div class="profile">
        <div style="display:flex; align-items:center; gap:10px;">
        <img :src="post.userProfilePic">
       
 <a>{{post.userName}}</a>
 
   </div> 
   <div class="elipsis"><i class="fas fa-ellipsis-h"></i></div>
    </div>
    <div class="description">
      {{post.remarks}}
    </div>
    <div class="image">
      
   <img :src="post.url" class="myimg" v-if="post.type !=='video/mp4' ">
   <iframe :src="post.url" v-else></iframe>
   
    </div>
    <div class="more"></div>
    <div class="engagement">
        <div class="emoji">

          <span @click="unlike(post.id)" v-if="post.likedBy.includes(this.currentUserId)" class="like"><i class="fas fa-thumbs-up"></i></span>
            <span @click="like(post.id)" v-else class="like" ><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike(post.id)" v-if="post.likedBy.includes(this.currentUserId)" class="heart"><i class="fas fa-heart"></i></span>
        <span @click="like(post.id)" v-else class="heart"><i class="fas fa-heart"></i></span>

       <p>
             <label id="post-likes" ref="likeInput">{{post.likes}}</label>
       </p>
        </div>
        <div class="reviews">
        <p @click="comment" style="cursor:pointer;">{{post.comments}} comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
       
        
          <label @click="unlike(post.id)" class="thumbs-up" v-if="post.likedBy.includes(this.currentUserId)"><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
 <label @click="like(post.id)" class="thumbs-up"  v-else><i class="far fa-thumbs-up"></i>like</label>
             <label @click="comment(post.id)" ><i class="far fa-comment-alt"></i>comment</label>
            
                  <label><i class="fas fa-share"></i>share</label>
    </div>
    <div v-if="commented">
    <div class="write-comment" v-if="post.id.includes(this.commentInfor)" >
              <div class="post">
  <!-- <span><i class="fas fa-user"></i></span> -->
  <div class="user-pic">
  <img :src="profilePic">
</div>
 <input type="text" placeholder="write a comment" v-model="comments" >
 <div @click="send(post.id)" style="cursor:pointer" class="sent">
 <i class="far fa-paper-plane"></i>
 <p>Send</p>
 </div>

              </div>
 <div  v-for="some in awesome" :key="some"  class="users-comments">
     <div id="shown-comments">

      <img :src="otherUsersPic"  style="width:40px; height:40px; border-radius:50%;" >   
     <p v-if="post.id.includes(this.commentInfor)" class="shown-comments" @click="pool(some.id)">
         
         <a>{{some.userName}}</a>
         {{some.userRemarks}}</p>
        
     <p v-else></p>
      <span class="three-dots"><i class="fas fa-ellipsis-h"></i></span>
      </div>
      <span class="engage-usability">Like</span>
      <span class="engage-usability">Reply</span>
     </div>

    </div>
    </div>

    </div>
</div>

</div>

<div class="part-2">
    <div class="side-element">
<div id="notification" v-if="card">
    <div class="saves">
        <div class="view">
            <div style="display:flex; align-items:center; gap:10px"> <i class="fas fa-bookmark"></i>
            <p>Recently Saved</p>
            </div>
           <span @click="closeCard" class="close-card"><i class="fas fa-times" ></i></span>
          
        </div>
<div class="saved-views">
       <div class="elements">
            <img src="SeaRAM_hero.jpg">
      <div>
        <p>C-Ram Weapon Defence System</p>
        <a>video. Saved to saves</a>
        </div>
    </div>
    <div class="elements">
<img src="7-harry-potter-aaron-sramek.jpg">        
       <div>
        <p>Harry Porter String art | People are awesome</p>
        <a>video. Saved to saves</a>
        </div>
    </div>
     <div class="elements">
         <img src="nikola-pr.jpg">
     
     <div>
        <p>Distance Alert Safety function helps drivers to keep Distance</p>
        <a>video. Saved to saves</a>
        </div>
    </div>
</div>
    </div>

</div>
<div id="sponsored">
    <h3>Sponsored</h3>
    <div class="companies">
    <img src="street.jpg">
    <div class="words">
   <p>crypto.com</p>
<a href="https://crypto.com/nft/register?utm_source=facebook&utm_medium=fb&utm_campaign=NEW-Facebook%3AWW-en%3Aall%3ANFT-Conversion_DailyDrop_Registration&utm_content=20210601%20-%20Sean%20Foley&fbclid=IwAR3RZxLX-DczbTZypgAnSffd-N2xKvEmP2ubm9QmzHSuuIIxenLE1oS8jtE">crypto.com</a>
    </div>
 
</div>

   <div class="companies">
    <img src="street.jpg">
    <div class="words">
   <p>crypto.com</p>
<a href="https://crypto.com/nft/register?utm_source=facebook&utm_medium=fb&utm_campaign=NEW-Facebook%3AWW-en%3Aall%3ANFT-Conversion_DailyDrop_Registration&utm_content=20210601%20-%20Sean%20Foley&fbclid=IwAR3RZxLX-DczbTZypgAnSffd-N2xKvEmP2ubm9QmzHSuuIIxenLE1oS8jtE">crypto.com</a>
    </div>
 
</div>


</div>
<div id="contacts">
    <h3>Contacts</h3>
  <div class="post" @click="run">
          <div class="user-pic">
  <img :src="profilePic">
</div>   
  <!-- <span><i class="fas fa-user"></i></span> -->
  <p>{{name}} {{secondName}}</p>
    </div>
      <div class="post" @click="run">
  <span><i class="fas fa-user"></i></span>
  <p>{{name}} {{secondName}}</p>
    </div>
      <div class="post" @click="run">
  <span><i class="fas fa-user"></i></span>
  <p>{{name}} {{secondName}}</p>
    </div>
      <div class="post" @click="run">
  <span><i class="fas fa-user"></i></span>
  <p>{{name}} {{secondName}}</p>
    </div>
</div>
</div>
</div>
</div>
      </div>
</div>
<div id="emerge" @click="emerge">
<i class="fas fa-arrow-alt-left"></i>
<input type="text" placeholder="search facebook">
</div>

<div id="modal" v-if="modal" >
    <div class="create">
        <h2>Create post</h2>
      <!-- <button @click="open" v-if="closed">X</button> -->
      <button @click="close">X</button> 
    </div>
      <div class="post" @click="run">
  <!-- <span><i class="fas fa-user"></i></span> -->
     <div class="user-pic">
  <img :src="profilePic">
</div>   
  <p>View Profile</p>
 </div>
 <div class="text">
 <textarea placeholder="what's on your mind, Victor" v-model="remarks"></textarea>
 
  </div>
  <div class="include">

      <div class="outline" style="overflow-y:auto" @click="pickFile">
          <!-- <div class="btn">
<button>X</button>
</div> -->
<i class="fas fa-plus-square"></i>

<input type="file" style="display:none;" @change="onFileSelected" ref="fileInput" >
<img :src="imageUrl" v-if="picture">
<iframe :src="videoUrl" class="video" v-if="video"></iframe>

<h3>Add photos/videos</h3>
<h6>or drag and drop</h6>
</div>


<div class="mobile">
    <span><i class="fas fa-mobile-alt"></i></span>

    <p>Add photos from your mobile device.</p>
    <button>Add</button>
</div>
  </div>
  <div class="segment-2">
   <div class="add-emoji">
<p>Add to your post</p>
<label><i class="far fa-images"></i></label>
<label><i class="fas fa-user-tag"></i></label>
<label><i class="fas fa-laugh"></i></label>
<label><i class="fas fa-map-marker-alt"></i></label>
<label><i class="fas fa-ellipsis-h"></i></label>
  </div>
  <div class="enter">
      <button @click="upload">Post</button>
  </div>
</div>
</div>

<div id="popup" v-if="popup">
  
 <div class="post">
   <label @click="operate">
     <!--    <span><i class="fas fa-user"></i></span> -->
   <div class="user-pic" style="margin-right:5px">
  <img :src="profilePic">
</div>   
  <p><router-link to="/profile" class="view">View Profile</router-link></p></label>
 </div>
<div @click="operate">
    <label @click="signOut"><i class="fas fa-sign-out-alt"></i>Log Out</label>
</div>
</div>

    </div>
</template>
<script>
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, setDoc,  onSnapshot, query, where, updateDoc, Firestore, serverTimestamp, orderBy} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

import{ app, db, auth, firebaseConfig, user } from '@/firebase.js'

export default {
    data() {
       return{
      modal:false,
      popup:false,
      remarks:'',
      selectedFile:null,
      expression:"",
      name:"",
      secondName:"",
      imageUrl:"",
      likes:"",
      createdPosts:{},
      present:true,
      absent:false,
      number:"",
      image:null,
      card:true,
      profilePic:"",
      emerge:false,
      commented:false,
      comments:"",
      postId:"XBVzaoAnQaTYZLli6P0y7rLJidD2",
      currentUserId:"",
      commentInfor:"",
      userComments:"",
      awesome:{},
      videoUrl:"",
      picture:false,
      video:false,
      otherUsersPic:{},
      somethingId:"",
       } 
    },
    methods: {
comment:function(id){
this.commentInfor=id
    this.commented=!this.commented
    onAuthStateChanged(auth, (user) => {

 const userComments = collection(db, 'created-post', this.commentInfor, "comments")
// const t = query(userComments, where("user", "==", this.commentInfor)) 
onSnapshot(userComments, (snapshot)=>{
snapshot.docs.forEach((doc)=>{
let m = []
m.push({...doc.data(), id:doc.id})

this.awesome[doc.id] = {...doc.data(), id:doc.id}


// console.log(m)
// console.log(this.awesome)
})

});

const userPic = collection(db, 'user-Details')
const n = query(userPic, where("id", "==", this.somethingId  ))
onSnapshot(n, (snapshot)=>{
    let pics = []
    snapshot.docs.forEach((doc)=>{
        pics.push({...doc.data(), id:doc.id})
        // console.log(doc.data().name)
        //  console.log(doc.data().secondName)
        this.otherUsersPic.push(doc.data())
    })
    console.log(pics)
    // console.log(users)

})

this.userComments=user.uid
updateDoc(doc(db, "created-post", id ), { 
  commentDetails:[user.uid]
       });
    })  
   
        },
toggle:function(){
 this.emerge=!this.emerge
        },
closeCard:function(){
this.card=false
        },
unlike:function(id){

onAuthStateChanged(auth, (user) => {
  if (user) {
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("likedOn", "==", [id]))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})

 console.log(doc.data().likedOn)
     
    })    
    console.log(users)
})
const b = this.createdPosts[id]
b.likes-= 1
// console.log(b)
 updateDoc(doc(db, "created-post", id ), { 
   likes:b.likes, 
   likedBy:[]
       });

  updateDoc(doc(db, "user-Details", user.uid), {
    likedOn:[]
    });
  }
 })

       
        },
 like:function(id){
             this.postId=id
console.log(this.postId)

 onAuthStateChanged(auth, (user) => {
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("likedOn", "==", [id]))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
 console.log(doc.data().likedOn)

    })
    console.log(users)
})

const o = this.createdPosts[id]
o.likes+= 1

 updateDoc(doc(db, "created-post", id ), { 
   likes:o.likes,
      likedBy:[user.uid]
       });

  updateDoc(doc(db, "user-Details", user.uid), {
    likedOn:[id]
    });
 

 })

        },
open:function(){
          this.modal=true
           const app = document.querySelector('#opt')
         app.classList="active"   
      },
close:function(){
          this.modal= false
   const app = document.querySelector('#opt')
         app.classList=""   
         this.videoUrl=null
         this.imageUrl= null
      },
run:function(){
this.$router.push('/profile')
      },
pickFile:function(){
    this.$refs.fileInput.click()
      },
send:function(id){
    if(this.comments===""){

    }else{
        let user = auth.currentUser

const r = this.createdPosts[id]
r.comments+= 1

    setDoc(doc(db, "created-post", id, "comments", user.uid), { 
postedAt:serverTimestamp(),
 userRemarks:this.comments,
 user:user.uid,
 userEmail:user.email,
 userName: this.name + this.secondName,
 comments:r.comments,
       });

updateDoc(doc(db, "created-post", id ), { 
 comments:r.comments,
       });
       }
},
signOut:function(){
 signOut(auth).then(() => {
    // Sign-out successful.
    alert("user Signed out");
    this.$router.push('/')
  }).catch((error) => {
    // An error happened.
  });
},
operate:function(){
    this.popup =!this.popup;
    this.modal=false;
},
create:function(){

 onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // console.log("current users ID is",uid)
    // console.log(user.email)

let currentUser = auth.currentUser
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("email", "==", currentUser.email))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
        // console.log(doc.data().name)
        //  console.log(doc.data().secondName)
         this.name = doc.data().name
         this.secondName = doc.data().secondName
          this.profilePic = doc.data().url      
          this.currentUserId = doc.data().id   
    })
    
    // console.log(users)

})

const infor = collection(db, 'created-post')
const i = query(infor, orderBy('createdAt', 'desc') )
onSnapshot(i, (snapshot)=>{
    let lik = []
    snapshot.docs.forEach((doc)=>{
        lik.push({...doc.data(), id:doc.id})
    
    let j ={}
    j[doc.id] = {...doc.data(), id:doc.id}
 this.createdPosts[doc.id] = {...doc.data(), id:doc.id}

// console.log(doc.id)

    })
// console.log(this.createdPosts)
})

 } else {
   console.log("no user")
  }
});



},
onFileSelected:function(event){
const files = event.target.files
let filename = files[0].name
const fileReader = new FileReader()
fileReader.addEventListener('load', () =>{
  
if(this.image.type== "image/jpeg"){
  this.imageUrl = fileReader.result
  this.videoUrl = ""
this.picture= true,
this.video = false
// console.log(this.imageUrl)
}else{
      this.videoUrl = fileReader.result
      this.imageUrl = ""
      this.picture= false
      this.video= true
// console.log(this.videoUrl)

}
    // console.log(filename)  
 
})
fileReader.readAsDataURL(files[0])
this.image = files[0]
// console.log(this.image.type)

// if(this.image.type== "video/mp4"){
// this.videoUrl = fileReader.result
// console.log(this.videoUrl)
// }
      },
upload:function(){
  
const storage = getStorage();
const storageRef = ref(storage, 'images/' + this.image.name);

const metadata = {
  contentType: this.image.type,
  size:this.image.size,
  name:this.image.name,
  type:this.image.type,
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef,this.image, metadata).then(()=>{
 getDownloadURL(storageRef).then((url)=>{
    //  console.log(url)
     const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send(); 
  
const user = auth.currentUser;
    setDoc(doc(db, "created-post", user.uid), {  
      remarks:this.remarks,
      id:user.uid,
      user:user.email,
      likes:null,
      comments:null,
     url:url,
    createdAt:serverTimestamp(),
    userName:this.name + this.secondName,
    type:this.image.type,
    userProfilePic:this.profilePic,
    });
      
  })

})
this.modal=false
           const app = document.querySelector('#opt')
         app.classList=""   
},
pool:function(id){
//   console.log(id)
  this.$router.push({ name: 'Users', params: { id: id }})
const useRef = collection(db, 'user-Details')

}, 
    },  
 beforeMount(){
    this.create()

 },
     
}
</script>
<style scoped>

#popup{
    position:fixed;
    background: #fff;
    top: 5%;
    left: 87%;
    border-radius: 10px;
    padding: 16px;
    font-weight: 700;
     box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1, 3px 3px 5px #ceced1 ;
}
#opt{
    font-family: 'Segoe UI';
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
}
#opt.active{
  opacity: 0.15;
    pointer-events: none;
    user-select: none;
    transition: 1s;
    
}
.field:focus{
    outline: none;
}
nav{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 110px;
    padding: 5px 10px;
    box-shadow: 3px 3px 3px #ceced1;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #fff;
}

.fa-facebook{
    font-size: 38px;
    color: #216FD8;
}
.fb-point{
    display: flex;
    gap: 10px;
    align-items: center;
}
 nav input{
    border: none;
    border-radius: 36px;
    background: #f0f2f5;
    padding: 7px 16px 9px 36px;
    font-size: 16px;
}
.search{
    font-size: 14px;
    background: #e4e6eb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    visibility: hidden;
}
.fa-search{
 font-size: 16px;
 color: #65676b;
}
#emerge{
    position: fixed;
    background: #fff;
    margin-top: 0px;
    margin-left:10px;
    z-index: 10;
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1;
    padding: 8px 16px;
}
.navigate{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.navigate span{
 display: flex;
justify-content: center;   
border-radius:10px ;
cursor: pointer;
padding: 10px ;
}
.navigate span:hover{
background: #f0f2f5;

}
.navigate i{
    font-size: 28px;  
}
.fa-youtube{
    color: #65676b;
    font-weight: lighter;
}
.fa-store{
    color: #65676b;
    font-weight: lighter;
}

.fa-home{
  font-size: 28px;
    color: #216FD8;
}
.user{
  width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #65676b;
    display: flex;
    justify-content: center;
    align-items: center;  
    padding: 0; 
}
.user i{
    color: #65676b;
    font-size: 20px;
}
.extras{
 display: flex;
 gap: 10px;
 justify-content: flex-end;
 padding: 0 24px;
}
.extras span{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e4e6eb;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.extras span:hover{
    background: #d1d2d4;
}
.fa-user{
    color: #fff;
}
.container{
    background: #f0f2f5;   
}
.grid{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
   gap: 20px;
  
}
.part-1{
   grid-column: 1/4; 
   grid-row: 1;
 position: fixed;
}
.part-1 .post{
    width: 344px;
}
.content{
   grid-column: 4/9; 
   grid-row: 1;
   padding: 0 32px;
}
.part-2{
    grid-column: 10/13;
    grid-row: 1;
    margin-left:80%;
    position: fixed;
}
/* .part-2:hover{
    position:absolute;
    overflow-y:auto;
} */
.card{
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius:10px ;
    margin-top: 80px;
    box-shadow: 1px 1px 1px #ceced1;
    padding-bottom: 10px;
}
.profile img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.profile{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 0;
    margin-bottom: 12px;
}
.elipsis{
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.elipsis:hover{
   background: #f0f2f5; 
}
.elipsis i{
    color: #65676b;
}
.profile a{
    text-decoration: none;
    color: black;
}
.image{
    width: 100%;
    display: flex;
}
#myimg{
    width: 100%;
}
.image img{
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
}
iframe{
   width: 100%;
    margin: 0 auto;
    object-fit: cover;   
    height: 100%;
    border: none;
}
.description{
    padding: 4px 16px 16px;
    border-bottom: 1px solid #65676b;
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
label{
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
label:hover{
    background: #f0f2f5;
}
.wrap{
    background: #fff;
    border-radius: 10px;
    margin-top: 80px;
    padding: 12px 16px 10px;
    box-shadow: 1px 1px 1px #ceced1, 1px 1px 1px #ceced1 ;
   width: calc(100% - 40px);
   display: flex;
   flex-direction: column;
   margin-left: auto;
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
    gap: 15px;
    padding: 12px 16px;
}
.postz{
    display: flex;
    gap: 15px;
    padding: 12px 0;
    
}
/* .part-1{
    position: fixed;
} */
.part-1 .post{
    margin-top: 80px;
    font-weight: bold;
  
}
.part-1 .post:hover{
    background: #e4e6eb;
}
.part-1 label{
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    font-weight: bold;
}
.part-1 label i{
    font-size: 20px;
    margin: 0 10px;
}
.part-1 label:hover{
background: #e4e6eb;
}
.postz input{
padding: 8px 12px;
font-size: 17px;
color: #65676b;
background: #f0f2f5;
border-radius: 36px;
border: none;
width:calc(100% - 50px);
cursor: pointer;
}
.post input{
padding: 8px 12px;
font-size: 17px;
color: #65676b;
background: #f0f2f5;
border-radius: 36px;
border: none;
width:calc(100% - 30%);
cursor: pointer;
}
.postz input:focus{
    outline: none;
}
.post input:focus{
    outline: none;
}
.post-2{
    border-top: 0.5px solid #65676b;
    display: flex;
    padding: 12px 0;  
  justify-content: space-around;
  width: calc(100% - 30px); 
}
.fa-images{
    color: rgb(8, 250, 8);
}
.fa-user-tag{
    color: #216FD8;
}
.fa-laugh{
    color: orange;
}
textarea{
    border: none;  
}
button{
    cursor: pointer;
}
#modal{
    position:fixed;
    background: #fff;
    top: 5%;
    left:35%;
    border-radius: 10px;
    padding: 16px;
    z-index: 1;
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1 ;
    width: 29vw;
}
.create{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}
.create button{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border:none;
}

.add-emoji{
    display: flex;
    padding: 8px;
    border: 0.5px solid #ceced1;
    border-radius: 10px;
    gap: 10px;
}
.enter button{
   background: #216FD8; 
   color: #fff;
   border-radius: 10px;
   width:calc(100% - 16px);
   display: flex;
   align-items: center;
   padding: 0 12px;
   justify-content: center;
   border: none;
   height: 36px;
}
.include{
    border: 1px solid #65676b;
    border-radius: 10px;
    padding: 8px ;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.outline{
    background: #f0f2f5;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-height: 300px;
    min-height: 200px;
    padding: 10px;
    cursor: pointer;
}
.outline:hover{
    background: #e4e6eb;
}
.fa-plus-square{
    margin:  auto;
}
h3, h6{
 margin: auto;

}
h6{
    color: #65676b;
}
.btn{
    display: flex;
    justify-content: flex-end;
}
.outline button{
    width: 36px;
    height: 36px;
    background: #fff;
    border:0.5px solid #ceced1;
    border-radius: 50%; 
}
.mobile{
   background: #f0f2f5; 
   border-radius: 10px;
   display: flex;
   padding: 8px;
   gap: 10px;
   align-items: center;
}
.mobile button{
    border: none;
    padding: 0 12px;
    background: #e4e6eb;
    height: 36px;
    border-radius:5px ;
}
.enter{
    padding: 16px 16px 0;
}
.segment-2{
    padding: 16px 0;
}
textarea{
    width: 90%;
}
textarea:focus{
    outline: none;
}
.text{
    padding: 12px 16px 0;
}
.file:focus{
    outline-color: none;
}
.file{
    border: none;
    background: #f0f2f5;
   
}
.view{
    text-decoration: none;
    color: #65676b;
}
#image-preview{
    width: 200px;
    height: 200px;
}

.part-2{
    padding-top: 80px;
  
}
.side-element{
   overflow-y: scroll; 
}
#sponsored{
   border-bottom: 0.5px solid #ceced1; 
   padding: 8px;
}
.companies{
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border-radius: 5px;
    padding: 8px;    
}
.companies:hover{
    background: #e4e6eb;
}
.companies img{
    width: 130px;
    height: 130px;
    border-radius: 5px;
}
.words{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;      
}
.words a{
    color:#65676b;
    text-decoration: none;
    margin-top: -20px;
    font-size: 14px;
}
.words p{
    font-weight: 700;
    font-size: 20px;
}
.view{
     display: flex;
    align-items: center;
    justify-content: space-between;
}

#notification{
     background: #fff;
     border-radius: 5px;
     padding: 16px;
}
.close-card{
    width: 30px;
    height: 30px;
    border-radius: 50%;
     cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.close-card:hover{
    background: #e4e6eb;
}
.fa-bookmark{
   background: linear-gradient(-135deg, #c512b9, #4158d0); 
   -webkit-background-clip: text;
   -webkit-text-fill-color:transparent ;
}

.elements a{
    color:#65676b;
    text-decoration: none;
    margin-top: -80px;
    font-size: 13px; 
}
.elements p{
    font-weight: 600;
    font-size: 15px; 
    margin: 0px;
}
.elements img{
    width: 48px;
    height: 48px;
    border-radius: 5px;
}
.elements{
    display:flex;
    gap:10px;
    align-items: center;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
}
.elements:hover{
    background: #e4e6eb;
}
.tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: rgb(54, 54, 54);
  opacity: 0.8;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-right: -10px;
  margin-top: 50px;
  position: absolute;
  z-index: 1;
}

.home:hover+.tooltiptext {
  visibility: visible;
}

.tooltip {
  visibility: hidden;
  width: 100px;
  background-color: rgb(54, 54, 54);
  opacity: 0.8;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-right:100px;
  margin-top: 50px;
  position: absolute;
  z-index: 1;
}

.create:hover+.tooltip {
  visibility: visible;
}
.write-comment input{
  padding: 2px 10px;
  height: 32px;
}
.write-comment{
    border-top: 0.5px solid #65676b;
}
.sent{
    display: flex;
     border-radius: 12px;
     gap:10px;
     background: #f0f2f5;
     align-items: center;
     padding:0px 16px;
}
#shown-comments{
    display: flex;
    padding: 0 16px;
    align-items: center;
    gap: 10px;
}
#shown-comments i{
 color: #65676b;
 
}
.three-dots{
    
 border-radius: 50%;
 width:20px;
 height: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 visibility: hidden;
 cursor: pointer;
}
.shown-comments{
    background: #e4e6eb;
    padding: 8px;
    border-radius: 16px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}
.shown-comments:hover+.three-dots{
    visibility: visible;
}
.three-dots:hover{
background: #e4e6eb;
}
.shown-comments a{
    font-size: 14px;
    cursor: pointer;
    font-weight:500;
}
.shown-comments a:hover{
    text-decoration: underline;
}
.engage-usability{
    font-size: 14px;
    color: #65676b;
    font-weight: 500;
    cursor: pointer;
    padding: 0 10px;
    margin-top: -10px;
}

.engage-usability:hover{
    text-decoration: underline;
}
.users-comments{
    padding: 5px 0;
}
@media all and (max-width: 850px){
    .part-1{
        display: none;
    }
    .part-2{
        display: none;
    }
    .content{
        grid-column: 2/10;
    }
    .navigate{
        display: none;
    }
    #modal{
        top:50px;
        left: 20%;
        width: 45vw;
    }
}
@media all and (max-width:600px){
.content{
        grid-column: 1/12;
    }
.navigate{
    display: none;
}
    #modal{
        top:50px;
        left:15%;
        width: 60vw;
    }
nav input{
    display: none;
}
nav{
    gap: 40px;
}
.search{
    visibility: visible;
}
.messenger{
    visibility: hidden;
}
.bells{
    display: none;
}
}
@media all and (max-width:425px){
  .content{
        grid-column: 1/12;
    }  
      #modal{
        top:50px;
        left:5%;
        width: 80vw;
    }
    .post-2 label:last-child{
        display: none;
    }
   .messenger{
    display: none;
}
.bells{
    display: none;
}
}
@media all and (max-width:320px){
   .reviews{
        font-size: 14px;
    }
    .content{
        width: calc(100% - 20px);
    }
}

</style>