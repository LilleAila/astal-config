import { Astal, Gtk, Gdk } from "astal/gtk3"

export default function Bar(monitor = 0) {
  const {TOP, LEFT, RIGHT} = Astal.WindowAnchor;

  return <window
    className="Bar"
    monitor={monitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | LEFT | RIGHT}
  >
    <centerbox>
      <box hexpand halign={Gtk.Align.START}>
        Left
      </box>
      <box>
        Center
      </box>
      <box hexpand halign={Gtk.Align.END}>
        Right
      </box>
    </centerbox>
  </window>
}
