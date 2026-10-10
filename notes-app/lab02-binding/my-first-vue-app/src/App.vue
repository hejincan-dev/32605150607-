<template>
 <div id="app">
    <h1>记事本 · 第 2 章实验</h1>
    <NoteCard />

    <SetupDemo />

    <h3>记事本雏形（综合任务）</h3>
    <input
      v-model="newNote"
      placeholder="输入笔记内容"
      @keyup.enter="addNote"
      @keyup.esc="newNote = ''"
    />
    <button @click="addNote">添加</button>
    <br>
    <label><input type="radio" value="高" v-model="priority" /> 高</label>
    <label><input type="radio" value="中" v-model="priority" /> 中</label>
    <label><input type="radio" value="低" v-model="priority" /> 低</label>
    <br>
    <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
    <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>

    <p>实时展示 → 内容：{{ newNote }}｜优先级：{{ priority }}｜标签：{{ tags.join('、') || '（未选）' }}</p>

    <ul>
      <li v-for="(item,idx) in noteList" :key="item.id">
        {{ idx+1 }}. {{ item.text }} 【{{ item.priority }}】{{ item.tags.join('/') }}
        <button @click="noteList.splice(idx,1)">删除</button>
      </li>
    </ul>
    <p v-show="noteList.length>0">共 {{ noteList.length }} 条</p>
    <hr />
    <h2>🎯 事件实验室（2.4—2.5）</h2>
    <EventLab />
  </div>
</template>


<script>
import NoteCard from './components/NoteCard.vue'
import SetupDemo from './components/SetupDemo.vue'
import EventLab from './components/EventLab.vue'

export default {
  components: {
    NoteCard,
    SetupDemo,
    EventLab

  },
  data(){
    return{
      newNote:'',
      priority:'低',
      tags:[],
      noteList:[
        { id:1, text:'学习单文件组件三段结构', priority:'高', tags:['待办'] },
        { id:2, text:'v‑model表单三件套跑通', priority:'中', tags:['待办','灵感'] },
        { id:3, text:'给记事本加上删除功能', priority:'低', tags:['待办'] }
      ],
      nextId:4
    }
  },
  methods:{
    addNote(){
      if(!this.newNote.trim()) return
      this.noteList.push({
        id:this.nextId++,
        text:this.newNote,
        priority:this.priority,
        tags:[...this.tags]
      })
      this.newNote = ''
    }
  }
}
</script>