function Navbar()
{
  return(
    <div class="navbar">
    <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
    </div>
    <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass" style={{color: "#00060f"}}></i>
        <input type="text" placeholder="Search for anything here Tech,Business,Art..."/>
    </div>
    <div class="navbar__s3">
        <p>Courses</p>
        <div class="mylearning">
            <p>Learning</p>
            <div class="mylearning_popup">
                 <p>You did not purchased anything yet</p>
            </div>
        </div>
        <i class="fa-solid fa-cart-shopping" style={{color: "#020c1d"}}></i>
        <i class="fa-solid fa-bell" style={{color: "#01060e"}}></i>
        <i class="fa-solid fa-user" style={{color: "#020a17"}}></i>
    </div>
    <div class="navbar__s4">
        <i class="fa-solid fa-bars" style={{color: "#010a18"}}></i>
    </div>
</div>
  )
}

export default Navbar