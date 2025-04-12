import { Astal, Gtk, Gdk } from "astal/gtk3"

export default function Bar(monitor = 0) {
    return <window className="Bar" monitor={monitor}>
        <box>Content of the widget</box>
    </window>
}
