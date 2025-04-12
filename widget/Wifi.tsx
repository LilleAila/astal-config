import { bind } from "astal";
import Network from "gi://AstalTray";

export default function Wifi() {
  const network = Network.get_default()
  const wifi = bind(network, "wifi")

  return <box visible={wifi.as(Boolean)}>
    {wifi.as(wifi => wifi && (
      <icon
        className="wifi"
        tooltipText={bind(wifi, "ssid").as(String)}
        icon={bind(wifi, "iconName")}
      />
    ))}
  </box>
}
