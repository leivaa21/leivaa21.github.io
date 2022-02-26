/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import content from './_contents_/english/home.json'
const Home: NextPage = () => {

  return(
    <>
      {content.sections.map( (section, index) => {
        return (
          <section className="section" key={`section${index}`}>
          <h1>{section.title}</h1>
          <h2>{section.subTitle}</h2>
          {section.image === null ?
            section.content.map((parragraph,index )=> <p key={`paragraph${index}`}>{parragraph}<br/><br/></p>)
            : 
              <div>
                <div>
                  <img src={section.image} alt="section image"/>
                </div>
                <div>
                {section.content.map((parragraph,index )=> <p key={`paragraph${index}`}>{parragraph}<br/><br/></p>)}
                </div>
              </div>
          }
          </section>
        )
      })}      
  </>
  )
}

export default Home;