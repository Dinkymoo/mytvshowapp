import Vue from 'vue'

Vue.component('app', {
  template: `
      <div id="app">
        <nav class="nav has-shadow">
          <div class="container">
            <a href="/">
              <img src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="TV Maze" />
            </a>
          </div>
        </nav>
        <section class="main-section section"></section>
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              Follow us on
              <a href="http://api.tvmaze.com"
              target="_blank">Maze Apis</a>
            </div>
          </div>
        </footer>
      </div>
    `
})
const app = new Vue({
  render: h => h('app')
})
export { app }
