# vuejs

## vue-1

`v-on` is Used to bind events
`v-model` two way data binding

## vue-2

`v-once` is Used to display the data once
`v-html` is Used display comeplet html syntax

## vue-3

`v-on:mouseover.stop` is Used to stop propagation
`v-on.keyup.enter.space.tab.esc.up.left.right` is Used to bind key events

## vue-4

`computed` is executed for dependent properties
`watch` is executed for change in data

## vue-5

use `@` instead of `v-on:`
use `:` instead of `v-bind:`

## vue-6

`:style` different dynamic style methods

## vue-7

`v-if="condition"` and `v-else` are used to attach or detach element

## vue-8

`v-show="condition"` is used to show or hide element

## vue-9

`v-for="item in items` is for loop works with `(array,index)` and `(object,key,index)` and number  `(n in 10)`

## Mini-Project-Monster-Slayer

A simple one page aplication - `Monster Slayer`

## vue-10

Template
```
Vue.component('hello',{
    template: '<h1>Hello Temp Component!</h1>'
});

// or

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});
document.getElementById("app3").appendChild(vm3.$el);

// display 

vm.$mount('#app2');
//or
vm.$mount();

```

## vue-11

LifeCycle
```
beforeCreate()
    |
created()
    |
beforeMount()
    |
beforeUpdate()
    |
updated()
    |
beforeDestroy()
    |
destroyed()
```

## vue-cli

`npm install -g vue-cli` learn about vue cli with `webpack-simple`

`$ vue init webpack-simple dir_name`

Refactoring Components

## vue-12

`Vue.component({  });` Vue component
