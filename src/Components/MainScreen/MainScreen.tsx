import React from 'react'
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import {ReactComponent as Clocklight} from "../../assets/icons/clocklight.svg";
import { ReactComponent as Arrowdown} from "../../assets/icons/langchoose.svg";
import { ReactComponent as Moonlight} from "../../assets/icons/moonlight.svg";
import { ReactComponent as Minis} from "../../assets/icons/minus.svg";
import { ReactComponent as Plus} from "../../assets/icons/plus.svg";
import { ReactComponent as Analysis} from "../../assets/icons/bar-chart-2.svg";
import { ReactComponent as Notifications} from "../../assets/icons/notifications.svg";
import Piejs from '../Pie/Piejs';
import s from "./MainScreen.module.scss"


const MainScreen: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.toppanel}>
        <Clocklight />
        <div className={s.lang}>
            EN
            <Arrowdown />
        </div>
        <Moonlight />
      </div>
      <div className={s.mainContent}>
        <Piejs />
        <div className={s.buttons}>
          <div className={`${s.button} ${s.minus}`}>
            <Minis />
          </div>
          <div className={`${s.button} ${s.plus}`}>
            <Plus />
          </div>
        </div>
      </div>
      <div className={s.bottomPanel}>
        <div className={`${s.bottombutton} ${s.analysis}`}>
          <Analysis />
          <p>Analysis</p>
        </div>
        <div className={`${s.bottombutton} ${s.noti}`}>
          <Notifications />
          <p>Notifications</p>
        </div>
      </div>
      
    </div>
  )
}

export default MainScreen