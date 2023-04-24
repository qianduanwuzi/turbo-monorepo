import { App, Plugin } from "vue";
import CnButton from "./button.vue";

const ButtonInstall: Plugin = {
  install(app: App) {
    app.component("cn-button", CnButton);
  },
};

export default ButtonInstall;
export { CnButton, ButtonInstall };
