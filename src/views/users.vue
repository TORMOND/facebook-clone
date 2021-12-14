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
              <!-- <span><i class="fas fa-user"></i></span> -->
                 <div class="user-pic">
  <img :src="pic">
  {{currentUserName}}
</div>   
              
              </label>
              <span><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i></span>
              <span><i class="fab fa-facebook-messenger"></i></span>
              <span><i class="fas fa-bell"></i></span>
              <span @click="operate"><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
        <div class="container">
           <div class="back-image">
               <div class="circle">
<img :src="profilePic" id="profileimg">
               </div>        
           </div>
           <div class="information">
               <h1 >{{name}} {{secondName}}</h1>
           </div>

     <a class="add-bio" @click="showDescribe">Add Bio</a>

           <div class="description-text" v-if="describe">
        <input type="text" placeholder="Describe who you are" v-model="bio">
        <span>101 characters remaining</span>

        <div class="user-requests">
        <p><i class="fas fa-globe-africa"></i>Public</p>
        <button class="cancel" @click="showDescribe">Cancel</button>
        <button class="save" @click="save">Save</button>
</div>

        </div>
           <div class="togglebar">
               <span>Posts</span>
               <span>About</span>
               <span>Friends</span>
               <span>Photos</span>
               <span>Videos</span>
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
            <!-- <a>See all Friends</a>
            <span>251 friends</span> -->
        </div>
        
        <div class="persons">
           <div class="images" v-for="friend in currentFriends" :key="friend" > 
              <img :src="friend.url" @click="pool(friend.id)"> 
                    <p ref="friendName">{{friend.name}} {{friend.secondName}}</p>
                    
                </div>
            
        </div>
    </div>

    
  <div class="right"> 

      

    <div class="posts" v-for="post in userPosts" :key="post">

       <p v-if="post.id==null" class="no-posts">No Posts</p>  
      <div class="post" v-else>

<div class="user-pic">
  <img :src="profilePic">
</div>
  <!-- <span><i class="fas fa-user"></i></span> -->
   <p>{{name}} {{secondName}}</p>
   <br>
   <div class="elipsis"><i class="fas fa-ellipsis-h"></i></div>
    </div> 
     <div class="paragraph">
 <p>{{post.remarks}}</p>
 </div>
    <div class="sent-image">
        <img :src="post.url" id="myimg">
    </div>
      <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span @click="like(post.id)" v-show="present" class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like(post.id)" v-show="present" class="heart"><i class="fas fa-heart"></i></span>

          <span @click="unlike(post.id)" v-show="absent " class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike(post.id)" v-show="absent" class="heart"><i class="fas fa-heart"></i></span>
       <p>
        
           <label v-if="number">{{post.likes}}</label>
          </p>
        </div>
        <div class="reviews">
        <p>{{post.comments}} comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label @click="like(post.id)" class="thumbs-up" v-show="present" ><i class="far fa-thumbs-up"></i>like</label>
          <label @click="unlike(post.id)" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
    <div class="write-comment">
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
        <button class="save">Save</button>
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
    </div>



</template>
<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where, setDoc, updateDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getStorage, ref, getDownloadURL } from "firebase/storage";

 
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
userId:this.$route.params.id,
describe:false,
bio:"",
profileEdit:false,
pic:"",
currentUserName:"",
        }
    },
    methods: {
         run:function(){
this.$router.push('/profile')
      },
     showDescribe:function(){
this.describe=!this.describe
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

 if(id==doc.data().likedOn){
   console.log(id)
           this.absent =false
          this.present = true      
console.log("unliked")
 }else{
   this.absent = true
          this.present = false
 }
       
    })    
    console.log(users)
})
const b = this.userPosts[id]
b.likes-= 1
// console.log(b)
 updateDoc(doc(db, "created-post", id ), { 
   likes:b.likes 
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
 if(id!==doc.data().likedOn){
this.absent = true
this.present = false  
console.log("liked")
 }else{
   this.absent =false
   this.present = true   
        
 }      
    })
    console.log(users)
})

const o = this.userPosts[id]
o.likes+= 1

 updateDoc(doc(db, "created-post", id ), { 
   likes:o.likes,
      likedBy:[user.uid, user.email]
       });

  updateDoc(doc(db, "user-Details", user.uid), {
    likedOn:[id]
    });
 

 })

        },
  
send:function(id){
    
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
  console.log(id)
  this.$router.push({ name: 'Users', params: { id: id }})

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
// let currentUser = auth.currentUser
const aq = collection(db, 'user-Details')
const c = query(aq, where("email", "==", user.email))
onSnapshot(c, (snapshot)=>{
    let us = []
    snapshot.docs.forEach((doc)=>{
        us.push({...doc.data(), id:doc.id})
      this.pic = doc.data().url
    this.currentUserName = doc.data().name
    })
 
})





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

    
    const uid = user.uid;
    // console.log("current users ID is",uid)
    // console.log(user.email)

let currentUser = auth.currentUser
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("id", "==", this.userId))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
        // console.log(doc.data().name)
        //  console.log(doc.data().secondName)
         this.name = doc.data().name
         this.secondName = doc.data().secondName
         this.profilePic = doc.data().url
    })
    
    // console.log(users)
})

const infor = collection(db, 'created-post')
const x = query(infor, where("id", "==", this.userId))
onSnapshot(x, (snapshot)=>{
    let lik = []
    snapshot.docs.forEach((doc)=>{
        lik.push({...doc.data(), id:doc.id})
        //  this.userPosts.push(doc.data())
         this.userPosts[doc.id] = {...doc.data(), id:doc.id}
        //  console.log(doc.data())
        // console.log(doc.data().likes)
        // console.log(lik[0])
        // console.log(lik[1])
        // console.log(lik[0].likes)
        // console.log(lik)

    })
// console.log(this.createdPosts)
})

  } else {
      const right = document.querySelector('.right')
      right.innerHTML = "No Posts"

   console.log("no user")
   
  }

});

const colRef = collection(db, 'Posts')
onSnapshot(colRef, (snapshot)=>{
    let posts = []
    snapshot.docs.forEach((doc)=>{
        posts.push({...doc.data(), id:doc.id})
        // console.log(doc.data())
         this.more.push (doc.data())
         this.person.push(doc.data().user)
         
    this.moreComments = true
    })
//     console.log(person)
//    console.log(this.more)
//    console.log(this.person)
})
},

    },

     beforeMount(){
    this.names()
 },
}


</script>
<style scoped>
.extras label{
    display: flex;
}
.sent-img{
    width: 100%;
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
    margin: 0 auto;
}
.wrap{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    padding: 20px 40px;
    gap: 30px;
}
.right{
    grid-column: 2/2;
    grid-row: 1;
    display: flex;
}

.right-2{
    grid-column: 2/2;
    grid-row: 2;
    display: flex;
}

.posts{
    background: #fff;
    border-radius: 10px;
   margin: 0 auto;
   width: 600px;
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
.paragraph{
    margin-top:-15px;
    padding:0px 16px;
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
    left: 80%;
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
}
.user-requests{
    display: flex;
    gap: 10px;
    margin: 0 auto;
}
.no-posts{
    margin: auto;
    color: #65676b;
    font-weight: 700;
  
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
}
</style>
