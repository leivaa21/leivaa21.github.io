import { NextPage } from "next";
import { useEffect, useState } from "react";
import NavbarFull from "./navbar-full";
import NavbarHidden from "./navbar-hidden";

type NavbarStatus = 'Full'|'Hidden';

const Navbar: NextPage = () => {
  const [status, setStatus] = useState<NavbarStatus>('Full')



  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 950){
        setStatus('Full');
        return;
      }
      setStatus('Hidden')
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  });

  return (
    <section>
      {status === 'Full' ? <NavbarFull/> : <NavbarHidden/>}
    </section>
  )
}

export default Navbar;