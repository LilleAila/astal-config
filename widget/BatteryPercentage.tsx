import { GLib, bind } from "astal";
import Battery from "gi://AstalBattery";

export default function BatteryPercentage() {
  const bat = Battery.get_default();

  return <box className="battery"
    visible={bind(bat, "isPresent")} >
    <icon icon={bind(bat, "batteryIconName")} />
    <label label={bind(bat, "percentage").as(p => `${Math.floor(p * 100)}%`)} />
  </box>
}
