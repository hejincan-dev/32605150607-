<!-- ============================================================
  App.vue —— ch03-components 第 3 章实验台
  组织方式：一章 = 一个完整实验项目；章内按教材小节划分小实验。
  注意：GlobalDemo 没有出现在 components 里——它是在 main.js 里
  全局注册的（教材 3.3.1），这正是实验 03 要观察的现象。
============================================================ -->
<template>
  <div id="app">
    <h1>ch03-components｜第 3 章实验台</h1>
    <p class="muted">第 03 课下半场（3.1—3.7）：两种 API · 生命周期 · 注册 · 样式冲突 · props / emit / inject</p>

    <nav class="lab-nav">
      <a href="#exp-01">01 两种API</a>
      <a href="#exp-02">02 生命周期</a>
      <a href="#exp-03">03 注册</a>
      <a href="#exp-04">04 样式冲突</a>
      <a href="#exp-05">05 props</a>
      <a href="#exp-06">06 emit</a>
      <a href="#exp-07">07 provide/inject</a>
    </nav>

    <section id="exp-01">
      <div class="lab">
        <h2>实验 01｜选项式 API vs 组合式 API（3.1）</h2>
        <p class="muted">教材例 3-1 / 例 3-2 原文对照：同一个计数器，两种写法。</p>
        <div class="pair">
          <CountOptions />
          <CountSetup />
        </div>
      </div>
    </section>

    <section id="exp-02">
      <LifecycleDemo />
    </section>

    <section id="exp-03">
      <div class="lab">
        <h2>实验 03｜组件注册（3.3）</h2>
        <p class="muted">左：局部注册（App 的 components 选项）｜右：全局注册（main.js 的 app.component，App 里<b>没有 import</b>）</p>
        <div class="pair">
          <LocalDemo />
          <GlobalDemo />
        </div>
      </div>
    </section>

    <section id="exp-04">
      <ScopedLab />
    </section>

    <section id="exp-05">
      <PropsLab />
    </section>

    <section id="exp-06">
      <EmitLab />
    </section>

    <section id="exp-07">
      <ProvideInjectLab />
    </section>
  </div>
</template>

<script>
import CountOptions from './experiments/01-apis/CountOptions.vue'
import CountSetup from './experiments/01-apis/CountSetup.vue'
import LifecycleDemo from './experiments/02-lifecycle/LifecycleDemo.vue'
import LocalDemo from './experiments/03-register/LocalDemo.vue'
import ScopedLab from './experiments/04-scoped/ScopedLab.vue'
import PropsLab from './experiments/05-props/PropsLab.vue'
import EmitLab from './experiments/06-emit/EmitLab.vue'
import ProvideInjectLab from './experiments/07-provide-inject/ProvideInjectLab.vue'

export default {
  name: 'App',
  components: { CountOptions, CountSetup, LifecycleDemo, LocalDemo, ScopedLab, PropsLab, EmitLab, ProvideInjectLab }
  // GlobalDemo 不在列表里——它是 main.js 全局注册的（实验 03 观察）
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

.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 720px) {
  .pair {
    grid-template-columns: 1fr;
  }
}

.muted {
  color: var(--muted);
}
</style>
