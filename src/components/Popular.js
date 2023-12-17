import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
import c12 from "../assets/images/c12.jpg"
import c10 from "../assets/images/c10.jpg"
import c11 from "../assets/images/c11.jpg"




function Popular()
{
    return(
        <div class="popular">
        <h1>Most Popular</h1>
        <p>Pick the best fit for</p>
        <div class="popular_container">

            <div class="course-card">
                <img src={c4} alt="c4"/>
                <h3>The Data Science Course:Complete 
                    <br/>Data Science Bootcamp 2023</h3>
                <p>by 365Carrers</p>
                <p>4.6 ⭐ ⭐ ⭐ ⭐ </p>
                <p>459</p>
            </div>
            <div class="course-card">
                <img src={c5} alt="c5"/>
                <h3>Complete Code Camp on C++,Java,Python,PHP,Node,JS</h3>
                <p>by Global Academy</p>
                <p>4.5 ⭐ ⭐ ⭐ ⭐ </p>
                <p>499</p>
            </div>
            <div class="course-card">
                <img src={c6} alt="c6"/>
                <h3>The Full Stack Web Development 2023 for Beginners</h3>
                <p>by Masyntech Coding School</p>
                <p>4.8 ⭐ ⭐ ⭐ ⭐ </p>
                <p>599</p>
            </div>
            <div class="course-card">
                <img src={c7} alt="c7"/>
                <h3>The Complete Python Bootcamp From Zero to Hero</h3>
                <p>by Coding Carrers</p>
                <p>4.7 ⭐ ⭐ ⭐ ⭐ </p>
                <p>399</p>
            </div>
            <div class="course-card">
                <img src={c8} alt="c8"/>
                <h3>Learn PHP Programming from Scratch for Beginners</h3>
                <p>by Codestars</p>
                <p>4.5 ⭐ ⭐ ⭐ ⭐ </p>
                <p>349</p>
            </div>
            <div class="course-card">
                <img src={c12} alt="c12"/>
                <h3>The Ultimate React Course 2023:React,
                    <br/>Redux & More</h3>
                <p>by Jonas Schmedtman</p>
                <p>4.8 ⭐ ⭐ ⭐ ⭐ </p>
                <p>499</p>
            </div>
            <div class="course-card">
                <img src={c10} alt="c10"/>
                <h3>CSS - The Complete Guide 2023(incl.Flexbox,Grid,Sass)</h3>
                <p>by Colt Steele</p>
                <p>4.7 ⭐ ⭐ ⭐ ⭐ </p>
                <p>399</p>
            </div>
            <div class="course-card">
                <img src={c11} alt="c11"/>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>by Jonas Schmedtman</p>
                <p>4.7 ⭐ ⭐ ⭐ ⭐ </p>
                <p>459</p>
            </div>

        </div>
    </div>
    )
}

export default Popular