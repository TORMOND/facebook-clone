<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 margin: 0;
 padding:0;
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
.field:focus{
    outline: none;
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
.extras span:hover{
    background: #d1d2d4;
}
.fa-user{
    color: #fff;
}
.container{
    background: #f0f2f5;
    
}
.user-pic img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}
</style>
