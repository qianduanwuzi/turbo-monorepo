import { CnButton } from "@cn/components";
import Components from "./components";
import { App } from "vue";
// import 'uno.css'
// import './styles/index.scss'

const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      app.use(c);
    });
  },
};

export default Installer;
export { CnButton };
