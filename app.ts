import { App } from "astal/gtk3";
import style from "./style.css"; // generated at build time
import Bar from "./widget/Bar";

App.start({
  css: style,
  instanceName: "astal", // the default instance name
  requestHandler(request, res) {
    print(request);
    res("ok");
  },
  // main: () => App.get_monitors.map(Bar),
  main() {
    Bar(0);
  },
});
