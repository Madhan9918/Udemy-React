import c13 from "../assets/images/c13.jpg"
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"

function Recommended()
{
    return(
        <div class="recommended">
        <h1>Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended_container">
            <div class="course-card">
                <img src={c13} alt="c13"/>
                <h3>The Complete 2023 Web Development Bootcamp</h3>
                <p>By Dr.Angela Yu</p>
                <p>4.7 ⭐ ⭐ ⭐ ⭐</p>
                <p>389 <del>3199</del></p>
            </div>
            <div class="course-card">
                <img src={c1} alt="c1"/>
                <h3>Cloud Computing Fundamentals for Beginners</h3>
                <p>By Mohamad Rhim</p>
                <p>4.4 ⭐ ⭐ ⭐ ⭐</p>
                <p>359 <del>3199</del></p>
            </div>
            <div class="course-card">
                <img src={c2} alt="c2"/>
                <h3>The Complete SQL Bootcamp: <br/>
                    from Zero to Hero</h3>
                <p>Jose Portilla</p>
                <p>4.7 ⭐ ⭐ ⭐ ⭐</p>
                <p>489 <del>3199</del></p>
            </div>
            <div class="course-card">
                <img src={c3} alt="c3"></img>
                <h3>Complete Web Design:from Figma to Webflow to Freelancing</h3>
                <p>Vako Shvli</p>
                <p>4.8 ⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p>499 <del>3199</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended