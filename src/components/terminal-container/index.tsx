import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import {TbMaximize, TbMinimize} from 'react-icons/tb'
import styles from './terminal.module.css'

type props = {
  command: string,
  param?: string,
  width?: string,
  height?: string,
  margin?: string,
  children: JSX.Element,
}

const TerminalContainer = ({command, param, children, width, height, margin}: props) => {

  const router = useRouter();

  const terminalVariables = {
    ['--width' as any]: width,
    ['--height' as any]: height,
    ['--margin' as any]: margin,
    ['--toolbar-background' as any]: "#31363B",
    ['--background' as any]: '#0A0E1488',
    ['--font-white' as any]: '#C7C7C7',
    ['--font-cyan' as any]: '#90E1C6',
    ['--font-magenta' as any]: '#ea4fff',
    ['--font-green' as any]: '#91B362',
    ['--font-red' as any]: '#EA6C73',
  }

  const texts = {
    user: "leivaa",
    machine: "website",
    path: `~${router.route}`
  }

  let hour = new Date().getHours();
  if (hour > 12) hour -= 12;
  const minutes = new Date().getMinutes();
  let parsed_minutes:string = `${minutes}`;
  
  if (minutes < 10) {
    parsed_minutes = `0${minutes}`; 
  }
  const prompt = {
    time: `[ ${hour}:${parsed_minutes} ] `,
    mark: ` > `
  }



  return (
  <section>
    <div className={styles.container} style={terminalVariables}>
      <div className={styles.container_terminal}></div>
      <div className={styles.terminal_toolbar}>
        <p className={styles.user}>{texts.user}@{texts.machine}: {texts.path}</p>
        <div className={styles.butt}>
          <button className={styles.btn}><TbMinimize/></button>
          <button className={styles.btn}><TbMaximize/></button>
          <button className={styles.btn + ' ' + styles.btn_close}><MdClose/></button>
        </div>
      </div>
      <div className={styles.terminal_body}>
        <div className={styles.terminal_command}>
          <div className={styles.terminal_prompt}>
            <span className={styles.terminal_time}>{prompt.time}</span>
            <span className={styles.terminal_user}>{texts.user + ' '}</span>
            <span className={styles.terminal_bling}>{prompt.mark}</span>
            <p className={styles.terminal_command_text}><span>{command}</span> {param}</p>
          </div>
          <div className={styles.output}>
            {children}
          </div>
          <div className={styles.terminal_prompt}>
            <span className={styles.terminal_time}>{prompt.time}</span>
            <span className={styles.terminal_user}>{texts.user + ' '}</span>
            <span className={styles.terminal_bling}>{prompt.mark}</span>
            <span className={styles.terminal_cursor}></span>
          </div>
        </div>
      </div>
        
    </div>
  </section>
  )
}

export default TerminalContainer;
