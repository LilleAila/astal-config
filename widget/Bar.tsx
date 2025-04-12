import { Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable, GLib, bind } from "astal";
import Battery from "gi://AstalBattery";

function Time({ format = "%H:%M" }) {
  const time = Variable<string>("").poll(1000, () => GLib.DateTime.new_now_local().format(format)!)

  return <label
    className="Time"
    onDestroy={() => time.drop()}
    label={time()}
  />
}

function BatteryPercentage() {
  const bat = Battery.get_default();

  return <box className="battery"
    visible={bind(bat, "isPresent")} >
    <icon icon={bind(bat, "batteryIconName")} />
    <label label={bind(bat, "percentage").as(p => `${Math.floor(p * 100)}%`)} />
  </box>
}

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
        <BatteryPercentage />
      </box>
    </centerbox>
  </window>
}
