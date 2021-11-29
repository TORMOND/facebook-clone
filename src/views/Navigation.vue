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
             <span><label class="user" ><i class="fas fa-users"></i></label></span>
          </div>
          <div class="extras">
              <label @click="run">
              <span><i class="fas fa-user"></i></span>
              {{name}}
              </label>
             <span @click="open"><i class="fas fa-plus"></i></span>
              <!-- <span><i class="fab fa-facebook-messenger"></i></span> -->
              <!-- <span><i class="fas fa-bell"></i></span> -->
              <span @click="operate"><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
      <div class="container">
<div class="grid">

<div class="part-1">
    <div class="post" @click="run">
  <span><i class="fas fa-user"></i></span>
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
    <div class="post">
  <span><i class="fas fa-user"></i></span>
  <input type="text" placeholder="Whats on Your mind?" @click="open">
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
                <span @click="like" v-show="present" class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like" v-show="present" class="heart"><i class="fas fa-heart"></i></span>

          <span @click="unlike" v-show="absent " class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike" v-show="absent" class="heart"><i class="fas fa-heart"></i></span>
       <p>
              <label >177000</label>
          
       </p>
        </div>
        <div class="reviews">
        <p>5.3k comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
  <label @click="like" class="thumbs-up" v-show="present" ><i class="far fa-thumbs-up"></i>like</label>
          <label @click="unlike" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
</div>
<!-- 

 -->
<div v-for="post in createdPosts" :key="post">
<div class="card">
    <div class="profile">
        <div>
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t1.6435-9/72952939_2497393310353084_2684978412589678592_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=J8WEpcIH96QAX8nGTK0&_nc_ht=scontent.fnbo8-1.fna&oh=08b336607eb86dc1c0e47bac51c298a4&oe=61B96121">
        <!-- <a href="https://crypto.com/nft/register?utm_source=facebook&utm_medium=fb&utm_campaign=NEW-Facebook%3AWW-en%3Aall%3ANFT-Conversion_DailyDrop_Registration&utm_content=20210601%20-%20Sean%20Foley&fbclid=IwAR3RZxLX-DczbTZypgAnSffd-N2xKvEmP2ubm9QmzHSuuIIxenLE1oS8jtE">crypto.com</a> -->
 <a>{{post.email}}</a>
 
 
   </div> 
   <div class="elipsis"><i class="fas fa-ellipsis-h"></i></div>
    </div>
    <div class="description">
      {{post.remarks}}
    </div>
    <div class="image">
        <!-- <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/194484182_23848002198700391_4322638678952833879_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=68ce8d&_nc_ohc=OZxphRCudjUAX8UGyXf&_nc_ht=scontent.fnbo8-1.fna&oh=15ce24028cf1565c3efc01f0470ef16a&oe=6199D6F8"> -->
   
   <img src="" id="myimg">
   
    </div>
    <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span @click="like" v-show="present" class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="like" v-show="present" class="heart"><i class="fas fa-heart"></i></span>

          <span @click="unlike" v-show="absent " class="like"><i class="fas fa-thumbs-up"></i></span>
        <span @click="unlike" v-show="absent" class="heart"><i class="fas fa-heart"></i></span>
       <p>
             <label>{{post.likes}}</label>
       </p>
        </div>
        <div class="reviews">
        <p>5.3k comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label @click="like" class="thumbs-up" v-show="present" ><i class="far fa-thumbs-up"></i>like</label>
          <label @click="unlike" class="thumbs-up" v-show="absent" ><i class="fas fa-thumbs-up" style="color:#1a73e8"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
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
 <textarea placeholder="what's on your mind, Victor" v-model="remarks"></textarea>
 
  </div>
  <div class="include">
      <input type="file" class="file" placeholder="select file"  @change="onFileSelected" accept="image/*">
      <div class="outline">
          <div class="btn">
<button>X</button>
</div>
<i class="fas fa-plus-square"></i>
<!-- <button @click="pickFile">Upload Image</button>
<input type="file" style="display:none;" @change="onFileSelected" ref="fileInput"> -->
<img :src="imageUrl" height="120">

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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, setDoc,  onSnapshot, query, where} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";


import{ app, db, auth, firebaseConfig, person, user } from '@/firebase.js'


export default {
    data() {
       return{
      modal:false,
      popup:false,
      unliked:true,
      liked:false,
      remarks:'',
      selectedFile:null,
      expression:"",
      name:"",
      secondName:"",
      imageUrl:"",
      likes:"",
      createdPosts:[],
      present:true,
      absent:false,
      number:"",
      image:null,
       } 
    },
    methods: {

        unlike:function(){
           this.absent = false
          this.present = true
        },
         like:function(){
this.unliked =!this.unliked
this.liked =!this.liked
this.absent = true
this.present = false

  
// updateDoc(doc(db, "information", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ), {
//     // const b = query(docRef, where("id", "==", "tUmz1C3i4uYB5z5xNrXZlEElc8M2" ));

//    likes:this.number
     
//        });
        },
      open:function(){
          this.modal=!this.modal
      },
      run:function(){
this.$router.push('/profile')
      },

      pickFile:function(){
    this.$ref.fileInput.click()
      },
      onFileSelected:function(event){
const files = event.target.files
let filename = files[0].name
const fileReader = new FileReader()
fileReader.addEventListener('load', () =>{
    this.imageUrl = fileReader.result
    console.log(filename)
  
})
fileReader.readAsDataURL(files[0])
this.image = files[0]
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
    console.log("current users ID is",uid)
    console.log(user.email)

let currentUser = auth.currentUser
const userRef = collection(db, 'user-Details')
const q = query(userRef, where("email", "==", currentUser.email))
onSnapshot(q, (snapshot)=>{
    let users = []
    snapshot.docs.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
        console.log(doc.data().name)
         console.log(doc.data().secondName)
         this.name = doc.data().name
         this.secondName = doc.data().secondName
    })
    
    console.log(users)
})

  } else {
   console.log("no user")
   
  }


});


    const storage = getStorage();
getDownloadURL(ref(storage, 'user-images/tUmz1C3i4uYB5z5xNrXZlEElc8M2'))
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
    
const infor = collection(db, 'created-post')

onSnapshot(infor, (snapshot)=>{
    let lik = []
    snapshot.docs.forEach((doc)=>{
        lik.push({...doc.data(), id:doc.id})
         this.createdPosts.push(doc.data())
        console.log(doc.data())

        // this.expression = doc.data().remarks
        // this.name = doc.data().user
    })
})
},
upload:function(){


   const user = auth.currentUser;

    setDoc(doc(db, "created-post", user.uid), {
      
      remarks:this.remarks,
      id:user.uid,
      user:user.email,
      likes:0,
    }
    
    );
const storage = getStorage();
const storageRef = ref(storage, this.image);

// Create file metadata including the content type
/** @type {image} */
const metadata = {
  contentType: 'image/jpg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, this.image, metadata);
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
    /* position: fixed; */
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
#myimg{
    width: 100%;
}
.image img{
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
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
}

@media all and (max-width:600px){
.content{
        grid-column: 1/12;
    }
.navigate{
    display: none;
}


}




</style>