<template>
  <div class="test">
    {{message}}
    <!--
    something warning message with using `v-model`
    <input type="text" v-model="inputText" @input="onChangeText"/>
    -->
    <input type="text" :value="inputText" @input="onChangeText"/>
    <button @click="onAdd">Add</button>
    <button @click="onTest">Test append button</button>

    <ul id="example-1">
      <li v-for="item in list">
        {{ item.title }} <button @click="onDel(item)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      message: 'Hello Vue!'
    }
  },
  computed: {
    list () {
      return this.$store.getters.activeList
    },
    inputText () {
      return this.$store.getters.getInputText
    }
  },
  methods: {
    onAdd (event) {
      console.log('on add')
      // this.$store.commit('addItem')
      this.$store.dispatch('addItem')
    },
    onChangeText (event) {
      console.log('on change text')
      console.log(event.target.value)
      this.$store.commit('changeText', event.target.value)
    },
    onTest () {
      console.log('on test')
      this.$store.dispatch('appendText')
    },
    onDel (item) {
      console.log('on del', item)
      this.$store.dispatch('delItem', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
