import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Test from '@/components/Test'

Vue.use(Router)

function route (path, name, component) {
  return {
    path: path,
    name: name,
    component: resolve => import(`@/components/${component}.vue`).then(resolve)
  }
}

export default new Router({
  routes: [
    route('/', 'Hello', 'Hello'),
    route('/test', 'Test', 'Test'),
    route('/todo-list', 'To Do List', 'Todolist')
  ]
})
