<template>
  <div class="setup-block">
    <h3>组合式写法对照</h3>
    <p>{{ message.toUpperCase() }} | count = {{ count }}</p>
    <button @click="count++">count +1</button>
    <p>实时展示 → 姓名：{{ form.name }}｜性别：{{ form.gender }}｜爱好：{{ form.hobbies.join('、') }}</p>
    <input v-model="form.name" placeholder="输入姓名" />
    <label><input type="radio" value="男" v-model="form.gender" /> 男</label>
    <label><input type="radio" value="女" v-model="form.gender" /> 女</label>
    <br>
    <label><input type="checkbox" value="篮球" v-model="form.hobbies" /> 篮球</label>
    <label><input type="checkbox" value="编程" v-model="form.hobbies" /> 编程</label>
    <hr>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const message = ref('hello vue')
const count = ref(0)
const form = reactive({
  name:'',
  gender:'',
  hobbies:[]
})
</script>

<style scoped>
.setup-block{
  margin-top:20px;
}
</style>