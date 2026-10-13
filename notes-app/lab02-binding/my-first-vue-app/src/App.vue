<!-- ============================================================
  App.vue —— ch02-fundamentals 第 2 章实验台
  组织方式（00-规范 2026-10-11 修订）：一章 = 一个完整实验项目；
  章内按教材小节划分小实验项目（src/experiments/NN-节短名/）。
  实验台只做两件事：顶部锚点菜单 + 纵向挂载各小实验。
============================================================ -->
<template>
  <div id="app">
    <h1>ch02-fundamentals｜第 2 章实验台</h1>
    <p class="muted">第 03 课上半场（2.5.3—2.8）：修饰符串联 · 计算属性 · 侦听器 · 样式绑定</p>

    <nav class="lab-nav">
      <a href="#exp-01">01 修饰符串联</a>
      <a href="#exp-02">02 计算属性</a>
      <a href="#exp-03">03 侦听器</a>
      <a href="#exp-04">04 样式绑定</a>
    </nav>

    <section id="exp-01">
      <ModifierChainLab />
    </section>
    <section id="exp-02">
      <ComputedLab />
    </section>
    <section id="exp-03">
      <WatchLab />
    </section>
    <section id="exp-04">
      <StyleBindingLab />
    </section>
  </div>
</template>

<script>
import ModifierChainLab from './experiments/01-modifier-chain/ModifierChainLab.vue'
import ComputedLab from './experiments/02-computed/ComputedLab.vue'
import WatchLab from './experiments/03-watch/WatchLab.vue'
import StyleBindingLab from './experiments/04-style-binding/StyleBindingLab.vue'

export default {
  name: 'App',
  components: { ModifierChainLab, ComputedLab, WatchLab, StyleBindingLab }
}
</script>

<style scoped>
.lab-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 20px;
}

.lab-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}

.lab-nav a:hover {
  background: var(--primary-bg);
}

section {
  margin: 18px 0;
}

.muted {
  color: var(--muted);
  margin-top: 0;
}
</style>
