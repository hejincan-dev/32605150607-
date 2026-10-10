<template>
 <div
  class="event-lab"
  style="
    text-align:center;
    margin-top:30px;
    border: 2px solid #d4af37;
    border-radius: 10px;
    padding: 18px;">
    <h3>事件实验室（2.4 事件对象 · 2.5 事件修饰符）</h3>

    <button @click="showEventArg">打印事件对象（不传参，首参即事件对象）</button>
    <button @click="showEventArg($event, 66)">showEventArg($event, 66)（传参版）</button>

    <br><br>
    <a href="https://vuejs.org" @click="preventDefault">Vue 官网链接（手动preventDefault）</a>

    <!-- 绿色实线外框 -->
    <div class="outer-box" @click="outerClick">
      外层盒子 @click
      <button @click.stop="innerStop">内层 .stop</button>
      <button @click="innerNoStop">内层 无.stop</button>
    </div>

    <br>
    <button @click.once="lottery">抽奖按钮 .once</button>

    <!-- 蓝色虚线框 -->
    <div class="box-self" @click.self="selfClick">
      点盒子本身（.self）
      <button>我是子元素（点我没用）</button>
    </div>

    <br>
    <input placeholder="这里按 Enter / Esc 试试" @keyup.enter="onEnter" @keyup.esc="onEsc">

    <!-- 日志输出区域，自动带编号，和截图格式一样 -->
    <div class="log-area" v-for="(item, index) in logList" :key="index">
      {{ index + 1 }}. {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logList: []
    }
  },
  methods: {
    showEventArg(e, num) {
      if (num !== undefined) {
        this.addLog(`type=${e.type} | target=<${e.target.tagName.toLowerCase()}> | timeStamp=${e.timeStamp}ms`)
      } else {
        this.addLog(`type=${e.type} | target=<${e.target.tagName.toLowerCase()}> | timeStamp=${e.timeStamp}ms`)
      }
      console.log('事件对象', e)
    },
    preventDefault(e) {
      e.preventDefault()
      this.addLog('手动 preventDefault() 阻止了跳转（2.5 用 .prevent 更简洁）')
    },
    outerClick() {
      this.addLog('outer 触发（外层 @click）')
    },
    innerStop() {
      this.addLog('inner 触发（.stop: 冒泡被阻止，外层不响）')
    },
    innerNoStop() {
      this.addLog('inner 触发（无 .stop: 冒泡到外层）')
    },
    lottery() {
      this.addLog('`once` 抽奖按钮: 只触发这一次!')
    },
    selfClick() {
      this.addLog('.self: 点到盒子本身才触发')
    },
    onEnter() {
      this.addLog('回车 .enter 触发')
    },
    onEsc() {
      this.addLog('按下了 Esc 键')
    },
    addLog(text) {
      this.logList.push(text)
    }
  }
}
</script>

<style scoped>
.outer-box {
  border: 2px solid #42b883;
  padding: 20px;
  margin: 16px 0;
}
.box-self {
  border: 2px dashed #6677dd;
  padding: 20px;
  margin: 16px 0;
}
.log-area {
  text-align: left;
  padding-left: 12px;
  margin: 6px 0;
}
</style>