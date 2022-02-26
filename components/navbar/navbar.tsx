import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useThemeState } from "../../lib/ThemeHook";
import NavbarFull from "./navbar-full";
import NavbarHidden from "./navbar-hidden";

type NavbarStatus = 'Full'|'Hidden';

const Navbar = ( content: { sections: any[]; }  ) =>  {
  const [status, setStatus] = useState<NavbarStatus>('Full')

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1100){
        setStatus('Full');
        return;
      }
      setStatus('Hidden')
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const {theme, setTheme} = useThemeState();

  return (
    <div className={theme === 'Dark' ? 'darkTheme' : 'whiteTheme'}>
      <section>
        {status === 'Full' ? <NavbarFull sections={content.sections}/> : <NavbarHidden sections={content.sections} />}
      </section>
    </div>
  )
}

export default Navbar;