<template>
    <div id="fb">
      <nav>
          <div class="fb-point">
          <i class="fab fa-facebook"></i>
          <input type="text" placeholder="Search Facebook">
          <!-- <i class="fas fa-search"></i> -->
          </div>
          <div class="navigate">
              
            <span><i class="fas fa-home"></i></span>
           <span><i class="fab fa-youtube"></i></span>
             <span><i class="fas fa-store"></i></span>
             <!-- <span class="material-icons-outlined">storefront</span>  -->
             <span class="user"><i class="fas fa-users"></i></span>
          </div>
          <div class="extras">
              <span><i class="fas fa-user"></i></span>
              
             <span><i class="fas fa-plus"></i></span>
              <span><i class="fab fa-facebook-messenger"></i></span>
              <span><i class="fas fa-bell"></i></span>
              <span><i class="fas fa-caret-down"></i></span>
          </div>
      </nav>
      <div class="container">
<div class="grid">
<div class="part-1"></div>
<div class="content">

<div class="wrap">
    <div class="post">
  <span><i class="fas fa-user"></i></span>
  <input type="text" placeholder="Whats on Your mind, Victor?">
    </div>
  <div>
<label><i class="far fa-images"></i></label>
<label><i class="fas fa-user-tag"></i></label>
<label><i class="fas fa-laugh"></i></label>
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
        Hong Kong's neon signs are disappearing, and street photographer Sean Foley has made it his mission to capture them before it's too late. "Fading Memories" is now live, exclusively on 
    </div>
    <div class="image">
        <img src="https://scontent.fnbo8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p526x296/194484182_23848002198700391_4322638678952833879_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=68ce8d&_nc_ohc=OZxphRCudjUAX8UGyXf&_nc_ht=scontent.fnbo8-1.fna&oh=15ce24028cf1565c3efc01f0470ef16a&oe=6199D6F8">
    </div>
    <div class="more"></div>
    <div class="engagement">
        <div class="emoji">
        <span><i class="fas fa-thumbs-up"></i></span>
        <span><i class="fas fa-heart"></i></span>
       <p>177k</p>
        </div>
        <div class="reviews">
        <p>5.3k comments</p>
        <p>2.6k Shares </p>
        </div>
    </div>
    <div class="action">
        <label><i class="fas fa-thumbs-up"></i>like</label>
             <label><i class="far fa-comment-alt"></i>comment</label>
                  <label><i class="fas fa-share"></i>share</label>
    </div>
</div>



</div>
<div class="part-2"></div>
</div>
      </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
/* @font-face {
    font-family:segoe;
    src: url('segoe ui semilight.ttf');
} */

#fb{
    font-family: 'Segoe UI';
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
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
}
.post{
    display: flex;
    gap: 20px;
}
.post input{
padding: 8px 12px;
font-size: 17px;
color: #65676b;
background: #f0f2f5;
border-radius: 36px;
border: none;

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