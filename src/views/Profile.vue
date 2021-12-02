<template>
    <div id="profile">
         <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook" class="field">
          <!-- <i class="fas fa-search"></i> -->
          </div>
          <div class="navigate">
            <router-link to="/Navigation" style="text-decoration:none; color:#65675b" class="home"><span><i class="fas fa-home"></i></span></router-link>  
  <span class="tooltiptext">Home</span>

           <span><i class="fab fa-youtube"></i></span>
             <span><i class="fas fa-store"></i></span>
            
             <span><label class="user"><i class="fas fa-users"></i></label></span>
          </div>
          <div class="extras">
  <!-- <label @click="run">
              <span><i class="fas fa-user"></i></span>
              {{name}}
              </label> -->
              <span><i class="fab fa-facebook-messenger"></i></span>
              <span><i class="fas fa-bell"></i></span>
              <span @click="operate"><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
        <div class="container">
           <div class="back-image">
               <div class="circle">
<img src="" id="profileimg">
               </div>        
           </div>
           <div class="information">
               <h1 >{{name}} {{secondName}}</h1>
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
                                <img src="street.jpg">
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

               <router-link :to="{name:'Users', params: {name:name}}" style="text-decoration:none; color:#65675b">
                <div class="images" @click="pool">                    
                    <img src="https://www.denofgeek.com/wp-content/uploads/2020/11/webstory-deadpool-image06-1.jpg?fit=1170%2C780">
               <p>DeadPool</p>
                </div>
                </router-link>

                <div class="images">
                    <img  src=""  id="myimg">
                </div>
                 
        </div>
    </div>

    
  <div class="right">
    <div class="posts">
      <div class="post">
  <span><i class="fas fa-user"></i></span>
 <p>{{name}} {{secondName}}</p>
    </div>
    <div class="sent-image">
        <img src="" id="postimg">
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
        <label @click="like" class="thumbs-up" v-show="present" ><i class="far fa-thumbs-up"></i>like</label>
          <label @click="unlike" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
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

  <!-- <span @click="showComments" class="more">More comments.....</span> -->
   <p>{{comments}}</p>
<div v-show="moreComments" v-for="item in more" :key="item" class="item">
   <p><span style="color:#ceced1">{{item.user}}</span> :{{item.comments}}</p>
    </div>

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
</template>
<script>

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, onSnapshot, query, where, setDoc, updateDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

import { getStorage, ref, getDownloadURL } from "firebase/storage";

 onAuthStateChanged(auth, (user) => {
  if (user) {
const storage = getStorage();
getDownloadURL(ref(storage, 'images/deadpool-image.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }
 })

onAuthStateChanged(auth, (user) => {
  if (user) {
const storage = getStorage();
getDownloadURL(ref(storage, 'Rolls-Royce-Phantom-Black.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('postimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }
 })

 onAuthStateChanged(auth, (user) => {
  if (user) {
const storage = getStorage();
getDownloadURL(ref(storage, 'images/cool-Benjamin.jpeg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('profileimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }
 })

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

        }
    },
    methods: {
//          run:function(){
// this.$router.push('/profile')
//       },
operate:function(){
    this.popup =!this.popup;
    
},
        unlike:function(){
//     const thumb = document.querySelector('.thumbs-up');
// thumb.style.color = "#65675b"; 
this.number--
this.absent = false
this.present = true
updateDoc(doc(db, "information", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ), {
    // const b = query(docRef, where("id", "==", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ));

   likes:this.number
     
       });
//    console.log(this.number)
     

        },
        like:function(){
// const thumb = document.querySelector('.thumbs-up');
// thumb.style.color = "#216fd8"; 
this.number++
this.absent = true
this.present = false
 updateDoc(doc(db, "information", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ), {
    // const b = query(docRef, where("id", "==", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ));

   likes:this.number
     
       });
   console.log(this.number)
     
   
        },

   
send:function(){
    
    if(this.comments===""){

    }else{
        let user = auth.currentUser
       const docRef = addDoc(collection(db, "Posts"), {
     comments:this.comments,    
     user:user.email,

    
       });
        // this.more.push (this.comments)
        //  this.person.push(user.email)
    //    console.log(user)
       }
},
pool:function(){
const useRef = collection(db, 'user-Details')
const m = query(useRef, where("email", "==", "deadpool@gmail.com"))
onSnapshot(m, (snapshot)=>{
    let use = []
    snapshot.docs.forEach((doc)=>{
        use.push({...doc.data(), id:doc.id})
        console.log(doc.data().name)
         console.log(doc.data().secondName)
         this.name = doc.data().name
         this.secondName = doc.data().secondName
    })
    // console.log(use)
})

onAuthStateChanged(auth, (user) => {
  if (user) {
const storage = getStorage();
getDownloadURL(ref(storage, 'images/deadpool-image.jpg'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('profileimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  }
 })
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
// const like = query(infor, where("id", "==", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ))
onSnapshot(like, (snapshot)=>{
    let likes = []
    snapshot.docs.forEach((doc)=>{
        likes.push({...doc.data(), id:doc.id})
       
        this.number = doc.data().likes
        
    })
})

  onAuthStateChanged(auth, (user) => {
  if (user) {
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
    })
    
    console.log(users)
})

  } else {
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
.postimg{
    width:50%;
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
.posts{
    background: #fff;
    border-radius: 10px;
   margin: 0 auto;
   width: 600px;
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
.item{
  max-height: 150px;
  overflow: hidden;
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
@media all and(max-width:900px){
    .wrap{
        grid-template-columns: repeat(1, 1fr);
    }
    .friends{
        grid-column: 1/1;
        grid-row: 1;
    }
    .posts{
          grid-column: 1/1;
        grid-row: 2;
    }
}
</style>