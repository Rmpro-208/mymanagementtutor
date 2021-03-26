import React from 'react';
import './style.css'
import img from './img/img.svg';
import aboutus from './img/aboutus.svg';
import icon1 from './img/icon1.png';
import compass from './img/compass.svg';
import icon3 from './img/3.png';
import icon4 from './img/4.png';
import icon5 from './img/5.png';


// function Features(props){
//     return(
//         <div className="third-part">
//             <div className="text-part"></div>
//             <div className="img-part"></div>
//         </div>
//     );
// }

function StepCard(props){
    return(
        <div className="stepcard">
            <div className="steplogo"><img src={props.icon}  alt="logo" /></div>
            <div className="step-heading"><h2>{props.heading}</h2></div>
            <div className="step-sub-heading"><p>{props.description}</p></div>
        </div>
    );

}

function SolutionCard(props){
    return(
        <div className="solutioncard">
            {/* <div className="step-heading"><h2>{props.heading}</h2></div> */}
            <div className="sol-card"><p>{props.name}</p></div>
        </div>
    );

}

function HomePage(props){
    return (
        <div className="homepageDiv">
            {/* main banner starts */}
            <div className="main">
                <div className="heading">
                    <h1>Boost your <br></br><span> Grades</span></h1>
                    <p>Get your degree with confidence.</p>
                </div>
            </div>
            {/* main banner ends */}

            {/* every step section starts */}
            <h2>We’re With You Every Step of The Way</h2>
            <div className="everystep">
                
                <StepCard icon={icon1} heading={"Achieve Your Desired Grades"} description={"We at My Management Tutor help students in completing their assignments and online classes by providing online class help. Our specialized services can cater your needs easily and score high in your classes."} />
                <StepCard className={"samestep"} icon={compass} heading={"Compatible With Your Schedule"} description={"Our services are completely online and can be manageable easily with different time zones. You can schedule your time with our online management experts and get all the management class help services."}/>
                <StepCard icon={icon3} heading={"Analyze Your Performance"} description={"For analyzing performance our tutors conduct weekly tests that will record the performance of each student. According to their test performance, tutors will provide relevant advice and feedback"} />
                <StepCard className={"samestep"} icon={icon4} heading={"Value For Money"}  description={"Our economical tutoring program makes it possible for every student who wants to learn. We understand the value your precious time and money, and our student friendly classes are worthy of your time."}/>
                <StepCard icon={icon5} heading={"24*7 Support"}  description={"Time should not be a constraint when you decide that you must learn. We are following this approach so our student can learn as per their need and convenience. Our dedicated tutors are always available for students. You are just one click away from our excellent tutors"} />

            </div>
            {/* every step section ends */}
            {/* your solution is here starts */}
            <div className="second-part">
                <div className="yoursolution">
                    <h2>Your solution is here</h2>
                    <p>Are you looking for a helping hand to support you along with your classes and get you a business degree? Are you a type of a person who loves taking business decisions but hate reading management theories?</p>
                    <div className="solutionlist">
                        <SolutionCard name={"Finance Homework Help"} />
                        <SolutionCard name={"Management Homework Help"} />
                        <SolutionCard name={"Economics  Homework Help"} />
                        <SolutionCard name={"Statistics  Homework Help"} />
                        
                    </div>
                </div>
            </div>
            {/* your solution is here ends */}

            {/* features starts */}
            <div className="third-part">
                <div className="besthelp">
                    <h2>Choose Best Helping Service</h2>
                    <p>Use our most trusted and life-changing class help service  and get your degree in the most simplified manner. Get your degree with a high GPA and succeed both academically and professionally.</p>
                    {/* button */}
                </div>
                <div className="besthelpimage">
                    <img src={img} className="img-help" alt="Assignment help" />
                </div>
            </div>
            {/* features ends */}

            {/* about us starts */}
            <div className="third-part">
                
                <div className="besthelpimage">
                    <img src={aboutus} className="img-help" alt="Assignment help" />
                </div>
                <div className="besthelp">
                    <h2>About Us</h2>
                    <p>We at mymanagementtutor, help professionals and students get their business degree without any hassles. So, whatever your specialization is, we can provide you hand holding through with your education. The management and business studies are getting very popular among masses and it is imperative to hold such a degree to improve your employability and chances of getting a hike.</p>
                    {/* button */}
                </div>
            </div>
            
            {/* about us ends */}

            {/* subjects we cover starts */}

            <div className="curved-div">
                <h2>Our Tutors</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci lorem, porttitor nec vulputate sit amet...
                </p>
                <svg viewBox="0 0 1440 319">
                    <path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>


            {/* subjects we cover ends */}



            
        </div>
    );
}
export default HomePage;