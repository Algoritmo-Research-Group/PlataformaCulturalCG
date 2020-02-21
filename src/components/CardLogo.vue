Vue.component('card-logo', {
  props: ['title', 'subtitle'],
  template: '<div class="column">
  <h3>{{ title }}</h3>
  <h3>{{ subtitle }}</h3>
  </div>'
});