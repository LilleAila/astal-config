import { bind } from "astal";
import Wp from "gi://AstalWp";

export default function Audio() {
  // TODO: Ensure this changes properly when changing output device?
  const speaker = Wp.get_default()?.audio.defaultSpeaker!

  return <box className="audio">
    <icon icon={bind(speaker, "volumeIcon")} />
    {/*<slider
      hexpand
      onDragged={({ value }) => speaker.volume = value}
      value={bind(speaker, "volume")}
    />*/}
  </box>
}
