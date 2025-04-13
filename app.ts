import { App } from "astal/gtk3";
import style from "./style.scss"; // AGS handles this at runtime, see https://aylur.github.io/ags/guide/bundling.html
import Bar from "./widget/Bar";

App.start({
  css: style,
  instanceName: "astal", // the default instance name
  requestHandler(request, res) {
    print(request);
    res("ok");
  },
  main: () => {
    // Bar(0);
    App.get_monitors().map(Bar);
  },
});
