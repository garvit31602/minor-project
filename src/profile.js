import React from "react"
import "./profile.css"
import Card from "./Card"
import teachers from "./teachers";
import { Outlet,Link } from "react-router-dom";

export default  function Profile(){
  const cardElement=teachers.map(item=>
    {
      return <Card
          {...item}
          />
    })
  
  
  return(
<html>
  <head>

    <title>Spotify - Web Player: Music for everyone</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
  </head>
  <body className="profile">
    
    <div class="container">
      <div class="sidebar">
        <h1>Learnify</h1>
        <div class="top-icons">
          <div class="link-flex">
          <Link to="/">Home</Link>
          </div>
          <div class="link-flex">
             <Link to="/login">Login</Link>
          </div>
          <div class="link-flex">
          <Link to="/signup">Signup</Link>
          </div>
          <div class="link-flex">
             <Link to="/">About us</Link>
          </div>
          <div class="link-flex">
          <a href="./WHERE_IS_MY_LECTURE-main/index.html">Map</a>
          </div>
        </div>
        <Outlet/>
        <div class="library">
        </div>
      </div>
      <div class="main-content">
        <div class="link-flex">
          <i class='bx bx-search'></i>  
          <input id ="search" type="text" placeholder="search learnify.in"/>
        </div>
        <h3>Teachers</h3>
        <div class="cards-container">
          {cardElement}
        </div>
      </div>
      </div>
  </body>
</html>
);
}
