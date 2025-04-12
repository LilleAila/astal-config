import { Astal, Gtk } from "astal/gtk3";

import Time from "./Time";
import BatteryPercentage from "./BatteryPercentage";
import SysTray from "./SysTray";
import Wifi from "./Wifi";
import Audio from "./Audio";


export default function Bar(monitor = 0) {
  const {TOP, LEFT, RIGHT} = Astal.WindowAnchor;

  return <window
    className="bar"
    monitor={monitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | LEFT | RIGHT}
  >
    <centerbox className="bar-wrapper">
      <box hexpand halign={Gtk.Align.START} className="bar-box">
        <Time format="%Y-%m-%d %H:%M" />
      </box>
      <box className="bar-box">
        Center
      </box>
      <box hexpand halign={Gtk.Align.END} className="bar-box">
        <Audio />
        <Wifi />
        <BatteryPercentage />
        <SysTray />
      </box>
    </centerbox>
  </window>
}
