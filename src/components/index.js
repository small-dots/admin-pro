import proTbale from "./ProTable/index.vue";

const componentList = {
  proTbale
};

const proComponent = {
  install(app) {
    for (let key in componentList) {
      const component = componentList[key];
      app.component(component["name"], component);
    }
  }
};
// 导出组件
export default proComponent;
