<template>
  <div>
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        <mu-paper class="demo-paper" circle :zDepth="2" />
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
      </mu-flexbox-item>
    </mu-flexbox>

  <div>
  <mu-list>
      <mu-list-item disabled title="通知与信息设置" describeText="总是中断" />
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
        <mu-switch v-model="events" slot="right" />
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('calls')" title="电话">
        <mu-switch v-model="calls" slot="right" />
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('messages')" title="信息">
        <mu-switch v-model="messages" slot="right" />
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>通知设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('notifications')" title="通知">
        <mu-checkbox v-model="notifications" slot="left" />
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('sounds')" title="声音">
        <mu-checkbox v-model="sounds" slot="left" />
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('videoSounds')" title="视频的声音">
        <mu-checkbox v-model="videoSounds" slot="left" />
      </mu-list-item>
    </mu-list>

  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    };
  },
  methods: {
    handleToggle(key) {
      this[key] = !this[key];
    }
  }
};
</script>
<style scopd>
.demo-paper {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin-top: 20px;
  text-align: center;
}
</style>
