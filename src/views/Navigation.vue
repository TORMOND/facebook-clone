<template>
    <div id="fb">
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
<div class="grid">
<div class="part-1">
    <div class="post">
  <span><i class="fas fa-user"></i></span>
  <p>Victor Monderu</p>
    </div>
</div>
<div class="content">

<div class="wrap">
    <div class="post">
  <span><i class="fas fa-user"></i></span>
  <input type="text" placeholder="Whats on Your mind, Victor?" @click="open">
    </div>
  <div class="post-2">
<label  @click="open"><i class="far fa-images"  ></i>Photo/Video</label>
<label  @click="open"><i class="fas fa-user-tag"></i>Tag friends</label>
<label  @click="open"><i class="fas fa-laugh"></i>Feeling/Activity</label>
</div>
</div>


<div class="card">
    <div class="profile">
        <div>
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/72952939_2497393310353084_2684978412589678592_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J8WEpcIH96QAX8nGTK0&_nc_ht=scontent.fnbo8-1.fna&oh=08b336607eb86dc1c0e47bac51c298a4&oe=61B96121">
        <a href="https://crypto.com/nft/register?utm_source=facebook&utm_medium=fb&utm_campaign=NEW-Facebook%3AWW-en%3Aall%3ANFT-Conversion_DailyDrop_Registration&utm_content=20210601%20-%20Sean%20Foley&fbclid=IwAR3RZxLX-DczbTZypgAnSffd-N2xKvEmP2ubm9QmzHSuuIIxenLE1oS8jtE">crypto.com</a>
   </div> 
   <div class="elipsis"><i class="fas fa-ellipsis-h"></i></div>
    </div>
    <div class="description">
        Hong Kong's neon signs are disappearing, and street photographer Sean Foley has made it his mission to capture them before it's too late."Fading Memories" is now live, exclusively on 
    </div>
    <div class="image">
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/194484182_23848002198700391_4322638678952833879_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=68ce8d&_nc_ohc=OZxphRCudjUAX8UGyXf&_nc_ht=scontent.fnbo8-1.fna&oh=15ce24028cf1565c3efc01f0470ef16a&oe=6199D6F8">
    </div>
    <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span @click="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like"><i class="fas fa-heart"></i></span>
       <p>
              <label v-show="unliked">177k</label>
           <label v-show="liked">You and 177k others</label>
       </p>
        </div>
        <div class="reviews">
        <p>5.3k comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label @click="like"><i class="fas fa-thumbs-up"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
</div>
<!-- 

 -->

<div class="card">
    <div class="profile">
        <div>
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/72952939_2497393310353084_2684978412589678592_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J8WEpcIH96QAX8nGTK0&_nc_ht=scontent.fnbo8-1.fna&oh=08b336607eb86dc1c0e47bac51c298a4&oe=61B96121">
        <a href="https://crypto.com/nft/register?utm_source=facebook&utm_medium=fb&utm_campaign=NEW-Facebook%3AWW-en%3Aall%3ANFT-Conversion_DailyDrop_Registration&utm_content=20210601%20-%20Sean%20Foley&fbclid=IwAR3RZxLX-DczbTZypgAnSffd-N2xKvEmP2ubm9QmzHSuuIIxenLE1oS8jtE">crypto.com</a>
   </div> 
   <div class="elipsis"><i class="fas fa-ellipsis-h"></i></div>
    </div>
    <div class="description">
        Hong Kong's neon signs are disappearing, and street photographer Sean Foley has made it his mission to capture them before it's too late."Fading Memories" is now live, exclusively on 
    </div>
    <div class="image">
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/194484182_23848002198700391_4322638678952833879_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=68ce8d&_nc_ohc=OZxphRCudjUAX8UGyXf&_nc_ht=scontent.fnbo8-1.fna&oh=15ce24028cf1565c3efc01f0470ef16a&oe=6199D6F8">
    </div>
    <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span @click="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like"><i class="fas fa-heart"></i></span>
       <p>
             <label v-show="unliked">177k</label>
           <label v-show="liked">You and 177k others</label>
       </p>
        </div>
        <div class="reviews">
        <p>5.3k comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label @click="like"><i class="fas fa-thumbs-up"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
</div>


</div>
<div class="part-2"></div>
</div>
      </div>


<div id="modal" v-if="modal">
    <div class="create">
        <h2>Create post</h2>
      <button @click="open">X</button> 
    </div>
      <div class="post" @click="run">
  <span><i class="fas fa-user"></i></span>
  <p>View Profile</p>
 </div>
 <div class="text">
 <textarea placeholder="what's on your mind, Victor"></textarea>
 
  </div>
  <div class="include">
      <div class="outline">
          <div class="btn">
<button>X</button>
</div>
<i class="fas fa-plus-square"></i>
<input type="file" class="file">
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
   <label @click="operate"> <span><i class="fas fa-user"></i></span>
  <p><router-link to="/profile" class="view">View Profile</router-link></p></label>
 </div>
<div @click="operate">
    <label @click="signOut"><i class="fas fa-sign-out-alt"></i>Log Out</label>
</div>
</div>

    </div>
</template>
<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkWbp12XRoV38kEajV7hBahdxwUxSXiVc",
  authDomain: "meta-fb.firebaseapp.com",
  projectId: "meta-fb",
  storageBucket: "meta-fb.appspot.com",
  messagingSenderId: "973161692832",
  appId: "1:973161692832:web:82d9c0d61cd734369493c5",
  measurementId: "G-76Q2K0FMJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const querySnapshot = getDocs(collection(db, "user-Details"), {
});
 querySnapshot.then((collection) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(querySnapshot);
  console.log(collection);

}).catch((error) => {
  console.log("Error getting document:", error);


}); 
// const auth = getAuth();
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
//   console.log(email)
// }

export default {
    data() {
       return{
      modal:false,
      popup:false,
      unliked:true,
      liked:false,
       } 
    },
    methods: {
         like:function(){
this.unliked =!this.unliked
this.liked =!this.liked
        },
      open:function(){
          this.modal=!this.modal
      },
      run:function(){
this.$router.push('/profile')
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
upload:function(){
const storage = getStorage();
const storageRef = ref(storage, 'street.jpg');

// Create file metadata including the content type
/** @type {image} */
const metadata = {
  contentType: 'image/jpg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, metadata);
},

    }  
     
}
</script>
<style scoped>
#popup{
    position:fixed;
    background: #fff;
    top: 5%;
    left: 80%;
    border-radius: 10px;
    padding: 16px;
    font-weight: 700;
}

#fb{
    font-family: 'Segoe UI';
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
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
.fb-point i{
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
   overflow-y: scroll;
   grid-row: 1;
}
.content{
   grid-column: 4/9; 
   grid-row: 1;
   overflow-y: scroll;
   padding: 0 32px;
}
.part-2{
    grid-column: 9/12;
    overflow-y: scroll;
    grid-row: 1;
}
.card{
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius:10px ;
    margin-top: 80px;
    box-shadow: 1px 1px 1px #ceced1;
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
.image img{
    margin: 0 auto;
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
.emoji span:first-child{
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
.emoji span:nth-child(2){
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
.post-2{
    border-top: 1px solid #65676b;
   display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 16px 16px;   
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
    top: 15%;
    left: 70%;
    border-radius: 10px;
    padding: 16px;
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
    height: 228px;
    padding: 10px;
}
.fa-plus-square{
    margin:  auto;
}
h3, h6{
 margin:  auto;

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
    outline: none;
}
.file{
    border: none;
    background: #f0f2f5;
}
.view{
    text-decoration: none;
    color: #65676b;
}
@media all and (max-width: 850px){
    .part-1{
        display: none;
    }
    .part-2{
        display: none;
    }
}
</style>