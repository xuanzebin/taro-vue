// import Vue from "vue";
import "./app.scss";

const PROD_ENV_MAP = {
  test: 'test',
  gray: 'gary'
}

const A = (type) => PROD_ENV_MAP[type]

const App = {
  onShow(options) {
    this.env = A('test')
    console.log(this.env)
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
};

export default App;
