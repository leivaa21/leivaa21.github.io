import { NextPage } from "next";
const Home: NextPage = () => {

  return(
    <>
     <section className="section">

       <h1>
         Hello there!
       </h1>
       <h2>
         Welcome to my web Portfolio 
       </h2>
       
       <p>
          I will be updating this with all by
          projects and all the work I do related to coding.<br/><br/>
       </p>

       <p>
          I'm currently studying Software Engineering in the
          University of Cordoba (My natal city). I think of myself
          as a learning enthusiast, and I love to try new things and
          learn everything about what I'm doing.<br/><br/>
       </p>

       <p>
          In my free time I love to do things like reading, play videogames
          (mostly shooters and simracing) and going out with friends.
       </p>

     </section>
     <section className="section">

      <h1>
        Aula de Software Libre
      </h1>
      <h2>
        Being part of something big helps you to growth faster. 
      </h2>
      <div>
        <div>
          <img
            src='images/logo-aula-blanco.png'
          />
        </div>
        <div>
        <p>
          In 2021 I started to be part of the coordination team of the "Aula de Software Libre"
          at my university (the translation would be something like Free Software Club).<br/><br/>
        </p>
        <p>
          Keeping up with the fact of me being a learning enthusiast, being part
          of this organization helps me to participate in a really large number of projects, 
          help people on their projects (and being helped on my projects as well). <br/><br/>
        </p>
        <p>
          We do talks for the students, and even do a yearly tech congress 
          (SalmorejoTech). This help us to push ourselves to learn about a lot of things and
          technologies that we wouldnt learn in the degree.
        </p>



        </div>  
      </div>
    </section>
    <section className="section">

      <h1>
        My personal background
      </h1>
      <h2>
        Adrián as a child
      </h2>
      <p>
        I've been attracted to computer science since I was like 12 years old. As a child
        I saw computers as the definitive tool to create new things. I always said that
        I wanted to be an important inventor, and as a teenager I found coding as my way
        to invent things that could make people life easier.<br/><br/>
      </p>
      
      <p>
        I'm right now probably too far away to make that dream come true, because I'm still
        just a student, but I work everyday to still improving my skills as a software engineer.
        This is just the start!
      </p>

    </section>
  </>
  )
}

export default Home;