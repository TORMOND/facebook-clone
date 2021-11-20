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
            <div class="images">
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
        <label @click="like" class="thumbs-up"><i class="fas fa-thumbs-up"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
    <div class="write-comment">
        <div class="post">
  <span><i class="fas fa-user"></i></span>
 <input type="text" placeholder="write a comment" v-model="comments" >
    </div> 

<div class="posted-comments">
    <p v-bind="comments">{{comments}}</p>
</div>


    </div>
    </div>
</div>
</div>
    </div>
</template>
<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

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
const db = getFirestore(app);
// const auth = getAuth(app);
// const analytics = getAnalytics(app);
// const querySnapshot = getDocs(collection(db, "user-Details"), {
// });
//  querySnapshot.then((collection) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(querySnapshot);
//   console.log(collection);

// }).catch((error) => {
//   console.log("Error getting document:", error);


// }); 
const docRef = doc(db, 'user-Details', 'g5eRQt4jK6BsSOZP0Ee0')
getDoc(docRef).then((doc)=>{
    console.log(doc.data());
   
})

export default {
    data() {
        return{
name: doc.name,
comments:'',
user:"friends",
unliked:true,
liked:false,

        }
    },
    methods: {
        like:function(){
this.unliked =!this.unliked
this.liked =!this.liked
 
    const thumb = document.querySelector('.thumbs-up');
thumb.style.color = "#216fd8"; 

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
</style>