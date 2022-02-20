import { NextPage } from "next";
import {sections} from './_contents_/english/home.json'
const Home: NextPage = () => {

  return(
    <>
      {sections.map( section => {
        return (
          <section className="section">
          <h1>{section.title}</h1>
          <h2>{section.subTitle}</h2>
          {section.image === null ?
            section.content.map(parragraph => <p>{parragraph}<br/><br/></p>)
            : 
              <div>
                <div>
                  <img src={section.image}/>
                </div>
                <div>
                {section.content.map(parragraph => <p>{parragraph}<br/><br/></p>)}
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