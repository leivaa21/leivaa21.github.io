import { NextPage } from "next";
import { useEffect, useState } from "react";
import NavbarFull from "./navbar-full";
import NavbarHidden from "./navbar-hidden";

type NavbarStatus = 'Full'|'Hidden';

const navbar: NextPage = () => {
  const [status, setStatus] = useState<NavbarStatus>()


  const handleResize = () => {
    if(window.innerWidth > 950){
      setStatus('Full');
      return;
    }
    setStatus('Hidden')
  }

  useEffect( () => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  return (
    <section>
      {status === 'Full' ? <NavbarFull/> : <NavbarHidden/>}
    </section>
  )
}

export default navbar;