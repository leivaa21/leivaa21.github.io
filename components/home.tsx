import { useThemeState } from "../lib/ThemeHook";
/* eslint-disable @next/next/no-img-element */
interface section {
  title: string,
  subTitle: string,
  content: string[]
  image:string|null
}
const Home = ( content: { sections: section[]; }  ) => {
  const {theme, setTheme} = useThemeState();

  return(
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      {content.sections.map( (section, index) => {
        return (
          <section className='section' key={`section${index}`}>
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
  </div>
  )
}

export default Home;