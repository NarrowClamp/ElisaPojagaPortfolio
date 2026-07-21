import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const form = useRef();


  const projects = [

  {
    image: asset("Arcademachine.jpg"),
    title: "Scrumshowdown",

    description:
      "An arcade cabinet commissioned by Northampton County Council for the Women's Rugby World Cup 2025. Designed for different age groups and featuring four mini-games. I was Lead Designer and Director, responsible for the overall creative direction and design decisions.",

    gallery: [
      asset("MM.png"),
      asset("scrum.png"),
      asset("Koff.png"),
      asset("Stadium.png"),
      asset("T.png"),
      asset("CC.png"),
      asset("Catching.png")
    ]
  },


  {
    image: asset("Fearofthe darkMM.png"),
    title: "Fear of the Dark",

    description: (
      <>
        A psychological horror experience where the main
        character faces their deepest fears.

        <br /><br />

        Originally created as a Twine prototype and later
        developed in Unreal Engine 5. I created the 3D
        models, UI and gameplay systems for this solo
        university project.

        <br /><br />

        <a
          href="https://elisa-pojaga.itch.io/fear-of-the-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </>
    ),

    video: asset("FearOfTheDarkPlaythrough.mp4"),

    gallery: [
      asset("Screenshot 2026-07-20 124240.png"),
      asset("All pins connected.png"),
      asset("Screenshot 2026-07-20 124350.png")
    ]
  },


  {
    image: asset("4.png"),
    title: "Shadows of Castle Everdale",

    description:
      "A point-and-click adventure game set inside a mysterious castle. Players solve puzzles and uncover secrets to progress through the story. Developed in Unity as my Final Major Project.",

    video: asset("SCEgameplayvideo.mp4")
  },


  {
    image: asset("cover.png"),
    title: "Call Unknown",

    description: (
      <>
        A dark choice-based narrative game created in Twine,
        where players experience a personal journey of
        self-discovery.

        <br /><br />

        <a
          href="https://elisa-pojaga.itch.io/callunknown"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </>
    ),

    gallery: [
      asset("Screenshot 2026-07-20 135216.png")
    ]
  }

];



  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(
      "service_gq8blwj",
      "template_mh7olir",
      form.current,
      "7kGthqm_hvnAq1zVs"
    )

      .then(() => {

        setSent(true);

        form.current.reset();

      })


      .catch((error) => {

        console.log(error);

      });

  }; return (

    <>


      <nav className="navbar">


        <h2>
          ELISA POJAGA
        </h2>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        <div className="socials">

          <a href="https://www.linkedin.com/in/elisa-pojaga/">
            LinkedIn
          </a>


          <a href="#contact">
            Contact
          </a>

        </div>


      </nav>



      {
        menuOpen &&

        <div className="menu">

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>
      }




      <section className="intro">


        <div className="intro-text">


          <h1>
            Elisa Pojaga
          </h1>


          <h3>
            Narrative & Game Designer
          </h3>


          <p>
            I create interactive experiences where gameplay,
            systems and storytelling work together to create
            meaningful player experiences.
          </p>


          <a
            className="portfolio-button"
            href="#projects"
          >
            View Portfolio
          </a>


        </div>



        <div className="profile-placeholder">


          <img

          src={asset("Screenshot 2025-02-06 134638.png")}
            alt="Elisa Pojaga"

          />


        </div>


      </section>



      <section id="about" className="about">


        <div>


          <h2>
            About Me
          </h2>


          <p>
            My name is Elisa Pojaga. I am a game designer and
            narrative designer with a passion for creating
            interactive experiences that combine gameplay,
            systems and storytelling.
          </p>


          <p>
            I am also one of the co-founders of Dystopia Games LTD,
            where we create narrative-driven games focused on
            player choice and agency.
          </p>


          <p>
            I enjoy designing mechanics and systems that support
            stories while creating engaging and memorable player
            experiences.
          </p>


        </div>



        <div className="specialties">


          <h2>
            Design Focus
          </h2>


          <p>
            🎮 Game Design
          </p>


          <p>
            📖 Narrative Design
          </p>


          <p>
            ⚙ System Design
          </p>


          <p>
            🗺 Level Design
          </p>


          <p>
            ✏ Storytelling
          </p>


        </div>


      </section>





      <section id="skills">


        <h2>
          Skills & Keywords
        </h2>


        <div className="skill-list">


          <p>Game Design</p>
          <p>Narrative Design</p>
          <p>System Design</p>
          <p>Level Design</p>
          <p>Prototyping</p>
          <p>Storytelling</p>
          <p>Unity Engine</p>
          <p>Unreal Engine 5</p>
          <p>Playtesting</p>
          <p>Game Direction</p>


        </div>


      </section>






      <section id="projects">


        <h2>
          Featured Work
        </h2>



        <div className="featured-project">


          <img

           src={asset("Echoesinthenight.png")}

            alt="Echoes in the Night"

          />



          <div>


            <h3>
              Echoes in the Night
            </h3>


            <p>
              Role:
              <br />
              Producer & Director
              <br />
              Game Designer /
              Narrative Designer
            </p>



            <p>
              A cyber-noir narrative adventure game
              focused on mystery, investigation and
              player choice.

              Monday 9PM, a mysterious phone call
              leads Detective Hale into a missing
              person case hidden inside a dystopian city.
            </p>


          </div>


        </div>






        <h2>
          Portfolio
        </h2>



        <div className="project-grid">


          {
            projects.map((project, index) => (


              <div

                className="project-card"

                key={index}

                onClick={() => setExpandedProject(project)}

              >


                <img

                  src={project.image}

                  alt={project.title}

                />


                <div className="expand-overlay">

                  {project.title}

                </div>


              </div>


            ))

          }


        </div>


      </section>    {
        expandedProject && (


          <div className="project-modal">


            <div className="modal-content">


              <button

                className="close-button"

                onClick={() => setExpandedProject(null)}

              >

                ×

              </button>



              <img

                src={expandedProject.image}

                alt={expandedProject.title}

              />



              <h2>

                {expandedProject.title}

              </h2>



              <div>

                {expandedProject.description}

              </div>





              {
                expandedProject.video &&

                <video

                  className="project-video"

                  controls

                >

                  <source

                    src={expandedProject.video}

                    type="video/mp4"

                  />


                </video>

              }






              {
                expandedProject.gallery &&

                <>


                  <h3>

                    Project Gallery

                  </h3>



                  <div className="project-gallery">


                    {

                      expandedProject.gallery.map((image, index) => (


                        <img

                          key={index}

                          src={image}

                          alt={expandedProject.title}

                        />


                      ))

                    }


                  </div>


                </>

              }



            </div>


          </div>


        )

      }







      <section id="contact" className="contact">


        <h2>
          Let's keep in touch!
        </h2>



        <p>

          Have a game idea, project or just want to connect?
          Send me a message.

        </p>





        {

          !sent ?



            (

              <form

                ref={form}

                onSubmit={sendEmail}

                className="contact-form"

              >


                <input

                  type="text"

                  name="user_name"

                  placeholder="Your name"

                  required

                />



                <input

                  type="email"

                  name="user_email"

                  placeholder="Your email"

                  required

                />



                <input

                  type="text"

                  name="subject"

                  placeholder="Subject"

                />



                <textarea

                  name="message"

                  placeholder="Your message"

                  rows="6"

                  required

                />



                <button type="submit">

                  Send Message

                </button>



              </form>

            )



            :



            (

              <div className="success-message">


                <h3>

                  ✓ Message Sent

                </h3>


                <p>

                  Thank you for reaching out.
                  I will get back to you soon.

                </p>


              </div>

            )



        }



      </section>



    </>

  );

}


export default App;