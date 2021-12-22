<template>
    <div id="profile">
        <div id="opt">
         <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">
          <!-- <i class="fas fa-search"></i> -->
          </div>
          <div class="navigate">
            <router-link to="/Navigation" style="text-decoration:none; color:#65675b" class="home"><span><i class="fas fa-home" ></i></span></router-link>  
  <span class="tooltiptext">Home</span>

           <span><i class="fab fa-youtube"></i></span>
             <span><i class="fas fa-store"></i></span>
            
             <span><label class="user"><i class="fas fa-users"></i></label></span>
          </div>
          <div class="extras">
  <label @click="run">
   
      <div class="user-pic">
 <img :src="profilePic" v-if="profilePic=this.profilePic ">
              <span v-else><i class="fas fa-user"></i></span>  
 {{name}} 
</div>

         <!-- <span><i class="fas fa-user"></i></span> -->
              
              </label>

              <!-- <router-link to="/Navigation" style="text-decoration:none; color:#65675b" class="home-2"><span><i class="fas fa-home" ></i></span></router-link>  -->
              <span><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i></span>
              <span><i class="fab fa-facebook-messenger"></i></span>
              <span><i class="fas fa-bell"></i></span>
              <span @click="operate"><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
        <div class="container">
           <div class="back-image">
               <div class="circle">
 <img :src="profilePic" v-if="profilePic=this.profilePic ">
              <span v-else><i class="fas fa-user"></i></span> 

              <label class="camera" @click="updateProfile"><i class="fas fa-camera"></i></label>

               <input type="file" style="display:none;" @change="onFileSelected" ref="fileInput" accept="image/*">
               </div>        
           </div>
           <div class="information">
               <h1 >{{name}} {{secondName}}</h1>

           </div>
          
           <a class="add-bio" @click="showDescribe" v-if="bioInfor==null">Add Bio</a>
 <p v-else class="users-bio">{{bioInfor}}</p>

           <div class="description-text" v-if="describe">
        <input type="text" placeholder="Describe who you are" v-model="bio" class="text-description">
        <span>101 characters remaining</span>

        <div class="user-requests">
        <p><i class="fas fa-globe-africa"></i>Public</p>
        <button class="cancel" @click="cancel">Cancel</button>
        <button class="save" v-if="this.bio=='' ">Save</button>
         <button  class="save2" v-else @click="save" >Save</button>
</div>

        </div>
           <div class="togglebar">            
               <span class="bar" >Posts</span>
               <span class="bar">About</span>
               <span class="bar">Friends</span>
               <span class="bar">Photos</span>
               <span class="bar">Videos</span>
               <span>More<i class="fas fa-caret-down"></i></span>
               
               <button @click="addStory" class="story"><i class="fas fa-plus-circle"></i>Add to Story</button>
               <button @click="editProfile" class="edit-btn"><i class="fas fa-pen"></i>Edit Profile</button>
               <span><i class="fas fa-ellipsis-h"></i></span>
           </div>
</div>
<div class="wrapper">
<div class="wrap">
    <div class="friends">
        <div class="all-friends">
            <h1>Friends</h1>

        </div>
        
        <div class="persons">
           <div class="images" v-for="friend in currentFriends" :key="friend" > 
              <img :src="friend.url" @click="pool(friend.id)"> 

                    <p ref="friendName">{{friend.name}} {{friend.secondName}}</p>
                </div>
              
        </div>
    </div>

 
  <div class="right"> 
  <p v-if="postElement=='' " class="no-posts">No Posts</p> 


    <div class="posts" v-for="post in userPosts" :key="post"  v-else>
        
      <div class="post">

<div class="user-pic">
  <img :src="profilePic" v-if="profilePic !=='' ">
   <span v-else><i class="fas fa-user" ></i></span>
</div>
 
 <p>{{name}} {{secondName}}</p>
    </div>
    <div class="sent-image">
        <!-- <img :src="post.url" id="myimg"> -->
        <img :src="post.url" id="myimg" v-if="post.type !=='video/mp4' ">
   <iframe :src="post.url" v-else width="100%" height="400px"></iframe>

    </div>
      <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
  <span @click="unlike(post.id)" v-if="post.likedBy.includes(this.currentUserId)" class="like"><i class="fas fa-thumbs-up"></i></span>
            <span @click="like(post.id)" v-else class="like" ><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike(post.id)" v-if="post.likedBy.includes(this.currentUserId)" class="heart"><i class="fas fa-heart"></i></span>
        <span @click="like(post.id)" v-else class="heart"><i class="fas fa-heart"></i></span>


        <!-- <span @click="like(post.id)" v-show="present" class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like(post.id)" v-show="present" class="heart"><i class="fas fa-heart"></i></span>

          <span @click="unlike(post.id)" v-show="absent " class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike(post.id)" v-show="absent" class="heart"><i class="fas fa-heart"></i></span> -->
       <p>
        
           <label v-if="post.likes>0">{{post.likes}}</label>
          </p>
        </div>
        <div class="reviews">
       <p v-if="post.comments>0">{{post.comments}} comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">

 <label @click="unlike(post.id)" class="thumbs-up" v-if="post.likedBy.includes(this.currentUserId)"><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
 <label @click="like(post.id)" class="thumbs-up"  v-else><i class="far fa-thumbs-up"></i>like</label>

      <!-- <label @click="like(post.id)" class="thumbs-up" v-show="present" ><i class="far fa-thumbs-up"></i>like</label>
          <label @click="unlike(post.id)" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label> -->
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
    <div class="write-comment">
        <div class="post">
  

  <div class="user-pic">


   <img :src="profilePic" v-if="profilePic=this.profilePic ">
              <span v-else><i class="fas fa-user"></i></span>  
</div>
 <input type="text" placeholder="write a comment" v-model="comments" >
 <div @click="send(post.id)" style="cursor:pointer" class="sent">
 <i class="far fa-paper-plane"></i>
 <p>Send</p>
 </div>
    </div> 

<div class="posted-comments" style="padding:16px 28px">
  <span @click="showComments" class="more">More comments.....</span>
   <p>{{comments}}</p>
<!-- <div v-show="moreComments" v-for="item in more" :key="item" class="item" >
   <p><span style="color:#ceced1">{{item.user}}</span> :{{item.comments}}</p>
    </div> -->
</div>
 
    </div> 
    </div>
 

</div>
</div>



</div>

<div id="message-tag" @click="openMessenger">
<i class="fas fa-edit"></i>
</div>

<div class="message-platform" v-if="message">
<div class="top">
    <p>New Message</p>
     <button @click="closeMessenger" class="times-btn" ><i class="fas fa-times"></i></button>
</div>
<div class="to-textarea">
    <p>To:</p>
    <input  type="text" >
</div>
<div>
  <p>Suggested</p>  
</div>



</div>
<div id="popup" v-if="popup">
     <!-- <div class="post">
   <label @click="operate"> <span><i class="fas fa-user"></i></span>
  <p><router-link to="/profile" class="view">View Profile</router-link></p></label>
 </div> -->
<div @click="operate" >
    <label @click="signOut"><i class="fas fa-sign-out-alt" style="margin-top:20px; "></i>Log Out</label>
</div>
</div>


</div>
<div id="profile-edit" v-if="profileEdit">
    <div class="top">
        <h2>Edit Profile</h2>
        <span @click="closeProfileEdit">X</span>
    </div>
    <div class="profilepic">
        <div class="filepic">
        <h2>Profile Picture</h2>
        <label  @click="pickFile">Add</label> 
        <input type="file" style="display:none;" @change="onFileSelected" ref="fileInput" accept="image/*">
        </div>
       <span><i class="fas fa-user"></i></span> 
        </div>
                 
   
    <div class="cover-pic">
<div class="filephoto">
    <h2>Cover Photo</h2>  
       <label @click="selectFile">Add</label> 
      <input type="file" style="display:none;" @change="onSelected" ref="fileInput" accept="image/*">   
</div>
     
      <div class="cover-photo"></div>
   
    </div>
    <div class="bio">
        <div class="filebio">
          <h2>Bio</h2>
        <label @click="showDescribe">Add</label>   
        </div>
       
        <p class="self-description">Describe Yourself...</p>
<div class="description-text" v-if="describe">
        <input type="text" placeholder="Describe who you are" v-model="bio">
        <span>101 characters remaining</span>

        <div class="user-requests">
        <p><i class="fas fa-globe-africa"></i>Public</p>
        <button class="cancel" @click="showDescribe">Cancel</button>
        <button class="save" @click="save">Save</button>
</div>

        </div>
    </div>
    <div class="intro">
        <div class="fileintro">
            <h2>Customize Your Intro</h2>
            <label>Edit</label> 
        </div>
        
        <p><i class="fas fa-home-lg"></i>Lives in
         <a> Nairobi,Kenya</a>
       </p>
    </div>
    <div class="hobbies">
        <div class="filehobbies">
             <h2>Hobbies</h2>
        <label>Add</label>
        </div>
       
    </div>
    <div class="featured">
<div class="filefeatured">
    <h2>Featured</h2>
        <label>Add</label>
</div>
    <p>Feature your favourite photos and stories here for all of your friends to see.</p>    
    </div>
</div>

<div id="profile-pic-update" v-if="profileUpdate">

<div class="top-element">
    <h3 class="top-heading">Update Profile Picture</h3>
    <button @click="closeUpdate" class="times-btn"><i class="fas fa-times"></i></button>

</div>
<div v-if="imageUrl=='' ">
    <div class="btns">
        <button @click="pickFile"><i class="fas fa-plus"></i>Upload Photo</button>
        <button>Add Frame</button>
    </div>
</div>
<div class="onPicLoad" v-else>

    <input type="text" placeholder="Description">
    <img :src="imageUrl">

<div class="adjust-btns">
  <button><i class="fas fa-crop-alt"></i>Crop Photo</button>
<button><i class="fas fa-clock"></i>Make Temporary</button>  
</div>


<p><i class="fas fa-globe-africa"></i>Your Profile Picture is Public.</p>

<div class="manouver-btns">
<button @click="cancelPhoto">Cancel</button>
<button @click="savePhoto">Save</button>    
</div>


</div>

</div>


    </div>
</template>
<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where, setDoc, updateDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

 
// onAuthStateChanged(auth, (user) => {
//   if (user) {
// const storage = getStorage();
// getDownloadURL(ref(storage, 'Rolls-Royce-Phantom-Black.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     // Or inserted into an <img> element
//     const img = document.getElementById('postimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });
//   }
//  })


 import{ app, db, auth, firebaseConfig, user } from '@/firebase.js'

export default {
    data() {
        return{
popup:false,
name:"",
secondName:"",
comments:'',
user:"friends",
unliked:true,
liked:false,
number: "",
present:true,
absent:false,
more:[],
person:[],
moreComments:false,
posts:[],
profilePic:[],
userPosts:{},
currentFriends:{},
profileEdit:false,
describe:false,
bio:"",
profileUpdate:false,
imageUrl:"",
postElement:"",
bioInfor:"",
 message:false,
 currentUserId:"",
        }
    },
    methods: {
openMessenger(){
this.message=!this.message
},
closeMessenger(){
this.message=false
},
save(){
const user = auth.currentUser;
   updateDoc(doc(db, "user-Details", user.uid ), { 
  bio:this.bio,
  
       });
       this.describe=false
},
cancelPhoto(){
    this.imageUrl = ""
    const picUpdate = document.querySelector('#profile-pic-update')
 picUpdate.classList=""
},
savePhoto:function(){

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
    // setDoc(doc(db, "created-post", user.uid)
   updateDoc(doc(db, "user-Details", user.uid ), { 
  url:url,
       });
      
  })

})
       this.profileUpdate= false
const app = document.querySelector('#opt')
         app.classList="" 
         this.imageUrl=""

        },
updateProfile:function(){
this.profileUpdate= true
const app = document.querySelector('#opt')
         app.classList="active" 
},
closeUpdate:function(){
    this.profileUpdate= false
const app = document.querySelector('#opt')
         app.classList="" 
         this.imageUrl=""
},
 run:function(){
this.$router.push('/profile')
},
showDescribe:function(){
this.describe=!this.describe
},
cancel:function(){
this.describe=false
this.bio = ""
},
pickFile:function(){
    this.$refs.fileInput.click()
},
selectFile:function(){
    this.$refs.fileInput.click()
},
closeProfileEdit:function(){
 this.profileEdit=false
 const app = document.querySelector('#opt')
         app.classList="" 
},
editProfile:function(){
 this.profileEdit=true
 const app = document.querySelector('#opt')
         app.classList="active" 
},
showComments:function(){
const moreInfor = document.querySelector('#posted-comments')
moreInfor.style.overflow ="scroll"
},
operate:function(){
    this.popup =!this.popup;
    
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

//  if(id==doc.data().likedOn){
//    console.log(id)
//            this.absent =false
//           this.present = true      
// console.log("unliked")
//  }else{
//    this.absent = true
//           this.present = false
//  }
       
    })    
    console.log(users)
})
const b = this.userPosts[id]
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

 onAuthStateChanged(auth, (user) => {
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("likedOn", "==", [id]))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
 console.log(doc.data().likedOn)
//  if(id!==doc.data().likedOn){
// this.absent = true
// this.present = false  
// console.log("liked")
//  }else{
//    this.absent =false
//    this.present = true   
        
//  }      
    })
    console.log(users)
})

const o = this.userPosts[id]
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
 onFileSelected:function(event){
const files = event.target.files
let filename = files[0].name
const fileReader = new FileReader()
fileReader.addEventListener('load', () =>{
    this.imageUrl = fileReader.result
    console.log(filename)  
 console.log(this.imageUrl)
 const picUpdate = document.querySelector('#profile-pic-update')
 picUpdate.classList="on"

})
fileReader.readAsDataURL(files[0])
this.image = files[0]
console.log(this.image)
},
onSelected:function(event){
const files = event.target.files
let filename = files[0].name
const fileReader = new FileReader()
fileReader.addEventListener('load', () =>{
    this.imageUrl = fileReader.result
//     console.log(filename)  
//  console.log(this.imageUrl)

})
fileReader.readAsDataURL(files[0])
this.image = files[0]
// console.log(this.image)
},
send:function(){
    
   if(this.comments===""){

    }else{
        const r = this.userPosts[id]
r.comments+= 1
updateDoc(doc(db, "created-post", id ), { 
 comments:r.comments,
       });

        let user = auth.currentUser
       updateDoc(doc(db, "created-post", id ), { 
postedAt:serverTimestamp(),
 userRemarks:[this.comments, user.email]
       });
       }
},
pool:function(id){
//   console.log(id)
  this.$router.push({ name: 'Users', params: { id: id }})
const useRef = collection(db, 'user-Details')

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
names:function(){
const like = collection(db, 'information')

onSnapshot(like, (snapshot)=>{
    let likes = []
    snapshot.docs.forEach((doc)=>{
        likes.push({...doc.data(), id:doc.id})       
        this.number = doc.data().likes        
    })
})

  onAuthStateChanged(auth, (user) => {
  if (user) {
    const friends = collection(db, 'user-Details')

onSnapshot(friends, (snapshot)=>{
    let y = []
    snapshot.docs.forEach((doc)=>{
        y.push({...doc.data(), id:doc.id})
        //  this.createdPosts.push(doc.data())
        // console.log(doc.data())
      // this.currentFriends.push({...doc.data()})

      this.currentFriends[doc.id] = {...doc.data(), id:doc.id}
    })

// console.log(this.createdPosts)
})

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
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
         this.bioInfor = doc.data().bio
         this.currentUserId = doc.data().id   
    })
    
    // console.log(users)
})

const infor = collection(db, 'created-post')
const x = query(infor, where("user", "==", currentUser.email))
onSnapshot(x, (snapshot)=>{
    let lik = []
    snapshot.docs.forEach((doc)=>{
        lik.push({...doc.data(), id:doc.id})
        //  this.userPosts.push(doc.data())

this.userPosts[doc.id] = {...doc.data(), id:doc.id}
this.postElement = doc.id


        //  console.log(doc.data())
        // console.log(doc.data().likes)
        
        // console.log(lik)

    })
// console.log(this.createdPosts)
})

  } else {
   console.log("no user")
   
  }

});

// const colRef = collection(db, 'Posts')

// onSnapshot(colRef, (snapshot)=>{
//     let posts = []
//     snapshot.docs.forEach((doc)=>{
//         posts.push({...doc.data(), id:doc.id})
//         // console.log(doc.data())
//          this.more.push (doc.data())
//          this.person.push(doc.data().user)
         
//     this.moreComments = true
//     })
// //     console.log(person)
// //    console.log(this.more)
// //    console.log(this.person)
// })

const saved = document.querySelector('.save')
if(this.bio!==""){
    saved.style.cursor = "pointer"
}
},

    },

     beforeMount(){
    this.names()
 },
}
</script>
<style scoped>
#profile-pic-update{
    background: #fff;
    border-radius: 5px;
    position: fixed;
    z-index: 1;
    top: 45%;
    left: 30%;
    box-shadow: 3px 3px 5px #9d9ea0, 3px 3px 5px #9d9ea0 ;
    width: 40vw;
}
#profile-pic-update.on{
    top: 5%;
}

.btns{
    display: flex;
    gap: 20px;
    padding: 10px 20px ;
     font-size: 15px;
     justify-content: center;
}
.btns button:first-child{
    border: none;
    color:#1b74E4;
    background: #d7e4f5;
    border-radius: 5px;
    cursor: pointer;
   padding: 10px 20px;
   width: calc(100% - 40%);
   font-weight: 600;
}
.btns button:first-child:hover{
   background: #cfdff3; 
}
.btns button:last-child{
    border: none;
    border-radius: 5px;
    cursor: pointer;
     width: calc(100% - 40%);
     font-weight: 600;
}

.camera{
    position: absolute;
    z-index: 1;
    margin-left: 170px;
    margin-top: 50px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px #c4c5c5,2px 2px #eeeff0;
    cursor: pointer;
}
.times-btn{
    cursor: pointer;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    
}
.top-element{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 0.5px solid #e1e1e2;
}
.top-heading{
    margin: 0 auto;
}
.onPicLoad{
    display: flex;
    flex-direction: column;
    padding: 10px 20px ;
}
.onPicLoad input{
   padding: 10px 20px;
   width: calc(100% - 10%);
 margin: 0 auto;
 border-radius: 5px;
border: 0.5px solid #bfc0c2;
}
.onPicLoad input:focus{
outline-color: #1b74E4;
}
.onPicLoad img{
    width: 300px ;
    height: 300px;
    border-radius: 50%;
    margin: auto;
    margin-top: 20px;
}
.adjust-btns{
 display: flex;
 gap: 10px;
 justify-content: center;
 padding: 20px 10px;
}
.adjust-btns button{
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    padding: 10px 20px;
    font-weight: 600;
}
.onPicLoad p{
    color:#65676b;
}
.manouver-btns{
    display: flex;
    gap: 10px;
    padding: 10px 20px;
    justify-content: flex-end;
    border-top:0.5px solid #e5e6e7 ;
}
.manouver-btns button:first-child{
    border: none;
    background: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    padding: 10px 30px;
}
.manouver-btns button:first-child:hover{
    background: #f6f8fa;
}
.manouver-btns button:last-child{
    border: none;
   color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    background: #1b74E4;
    border-radius: 5px;
    padding: 10px 30px;
}







#myimg{
   width: 100%; 
}
.post{
    display: flex;
    gap: 20px;
    padding: 12px 16px 16px;
}
.friends{
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    grid-column: 1/2;
    grid-row: 1;
   height: 600px;
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
    width: 100%;
    position: relative;  
}
#opt{
    background: #f0f2f5;
     display: flex;
     flex-direction: column;
    width: 100%;
    position: relative;
}
#opt.active{
  opacity: 0.15;
    pointer-events: none;
    user-select: none;
    transition: 1s;
    position: fixed;
}
.container{
  background: #fff;
     display: flex;
     width: 100%;
     flex-direction: column;
}
.back-image{
background:linear-gradient( to top, #929394 20%, #f6f8fa 80%);
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
    margin: 0 auto;
}
.wrap{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    padding: 20px 40px;
    gap: 30px;
    width: 60%;
}
.right{
    grid-column: 2/2;
    grid-row: 1;
    display: flex;
}

.posts{
    background: #fff;
    border-radius: 10px;
   margin: 0 auto;
  
}
.sent-img{
    margin: 0 auto;
     display: flex;
}
#postimg{   
    margin: 0 auto;
    width: 100%;
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
.posted-comments{
max-height: 280px;
  overflow-y:auto;
}
.item p{
   background: #f0f2f5; 
   padding: 10px 16px;
   border-radius: 10px;
}
#popup{
    position:fixed;
    background: #fff;
    top: 5%;
    left: 90%;
    border-radius: 10px;
    padding: 16px;
    font-weight: 700;
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1, 3px 3px 5px #ceced1 ;
}
#popup label{
    cursor: pointer;
    padding: 10px 24px;
    border-radius: 5px;
}
#popup label:hover{
    background: #f0f2f5;
}
.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgb(54, 54, 54);
  opacity: 0.8;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-top: 50px;
  position: absolute;
  z-index: 1;
}

.home:hover+.tooltiptext {
  visibility: visible;
}
.home-2{
visibility: hidden;
}
.posts-xoxo{
    display: flex;
}
.add-bio{
    margin: 0 auto;
    color: #0f70e7;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}
.add-bio:hover{
    text-decoration: underline;

}
#profile-edit{
    background:#fff;
    border-radius: 10px;
    position:absolute;
    margin-top:3%;
    margin-left: 30%;
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1;
    border-top: 0.5px solid #9d9ea0;
    /* padding: 0 16px; */
    width: 700px;
}
.top{
    display: flex;
    align-items: center;
    padding:0 16px;
    height: 58px;
    border-bottom: 0.5px solid #8a8d91;
}
.top h2{
    margin: 0 auto;
}
.top span{
    width: 40px;
    height: 40px;
    border-radius:50%;
    background: #e4e6eb;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.filepic{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
}
.profilepic, .coverpic, .bio, .featured, .intro, .hobbies{
    display: flex;
    flex-direction: column;
    padding: 0 0 20px;
}
.profilepic span{
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background: #e4e6eb;
    margin: 0 auto;
     display: flex;
    justify-content: center;
    align-items: center;
}
.profilepic .fa-user{
    font-size: 120px;
}
.filephoto, .filebio, .fileintro, .filehobbies, .filefeatured{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
}
.cover-photo{
    margin:0 auto;
    background: #e4e6eb;
    width: 500px;
    height: 185px;
    border-radius: 5px;
}
.self-description{
    margin: 0 auto;
    color: #8a8d91;
}
#profile-edit label{
    color: #216FD8;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
}
#profile-edit label:hover{
    background: #e4e6eb;
  
}
.togglebar{
    margin: 0 auto;
    display:flex;
    gap:10px;
    align-items: center;
    height: 60px;
}
.togglebar span{
    color: #65676b;
   padding: 16px;
      border-radius: 5px;
      cursor: pointer;
 display: flex;
 gap: 5px;
}
.togglebar span:hover{
    background: #eff0f3;
}
.story{
    border: none;
    color: #fff;
    background: #1b74E4;
    border-radius: 5px;
    padding:  12px;
    cursor: pointer;
    display: flex;
    gap: 5px;
}
.edit-btn{
    border: none;
    background: #e4e6eb;
    border-radius: 5px;
    padding:  12px;
    cursor: pointer;
    display: flex;
    gap: 5px;
}
.description-text{
    display: flex;
    flex-direction: column;
}
.description-text input{
    background: #e4e6eb;
    height: 78px;
    padding:8px 12px;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
}
.description-text input:focus{
    outline-color: #1b74E4;
    background: #fff;
}
.description-text span{
    color: #8a8d91;
    font-size: 14px;
    margin: 0 auto;
}
.cancel{
    background: #e4e6eb;
    border: none;
    cursor: pointer;
    padding: 0 12px;
    border-radius: 5px;
}
.save{
   background: #e4e6eb;
    border: none;
    cursor: not-allowed;
    padding: 0 12px;
    border-radius: 5px;
    color: #ceced1;
    font-weight: 700;
}
.save2{
   background: #e4e6eb;
    border: none;
    cursor: pointer;
    padding: 0 12px;
    border-radius: 5px;
    font-weight: 700;
}

.user-requests{
    display: flex;
    gap: 10px;
    margin: 0 auto;
}
.no-posts{
    margin:  auto;
    font-weight: 600;
    color: #8a8d91;
}
#message-tag{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    position: fixed;
    top: 92%;
    left: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 5px 5px 8px #ceced1, 3px 3px 5px #f0f2f5;
}

.message-platform{
   background: #fff;
   box-shadow: 5px 5px 8px #ceced1, 3px 3px 5px #f0f2f5;   
   position: fixed;
   top: 50%;
   left: 75%;
    display: flex;
    border-radius: 5px;
    flex-direction: column; 
    min-height: 455px; 
    width: 18vw;                                                                                     
}
.message-platform input{
    border: none;
}
.message-platform input:focus{
    outline: none;
}
.top{
    display: flex;
    align-items: center;
    padding: 5px 20px;
    justify-content: space-between;
}

.fa-times{
    color: #216FD8;
    font-size: 20px;
}
.times-btn{
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;

}
.to-textarea{
    display: flex;
    gap: 10px;
    border-bottom: 0.5px solid #d3d4d4;
}
.users-bio{
    margin: 0 auto;
}
@media all and (max-width:1024px){
    .profile-pic-update{
        width: 60vw;
        left: 25%;
    }  
}

@media all and (max-width:900px){
    .wrap{
        grid-template-columns: repeat(1, 1fr);
    }
    .friends{
        grid-column: 1/1;
        grid-row: 1;
    }
    .right{
          grid-column: 1/1;
        grid-row: 2;
    }
    .navigate{
      display: none;
    }
    .home-2{
        visibility: visible;
    }
    .profile-pic-update{
        width: 55vw;
        left: 30%;
    }
}
@media all and (max-width:600px){
   .togglebar .bar{
        display: none;  
    }
   nav .user-pic{
        display: none;
    }
    .post{
        width: calc(100% - 20px);
    }
    nav{
        gap: 20px;
    }
    .fb-point input{
        display: none;
    }
    
    .wrap{
        width: 100%;
        padding: 20px 10px;
    }
     .profile-pic-update{
        width: 90vw;
        left: 5%;
    }

  
}

@media all and (max-width:400px){
    .wrap{
        padding: 20px 0;
    }
 .profile-pic-update{
        width: 90vw;
        left: 5%;
    }
}


</style>