import Vue from 'vue'

export default Vue.directive('focus', {
  inserted: function (el) {
    console.log(el);
    el.focus();
  }
})