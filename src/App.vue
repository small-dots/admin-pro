<template>
  <el-config-provider :locale="locale" :size="assemblySize" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useTheme } from "@/hooks/useTheme";
import { ElConfigProvider } from "element-plus";
import { useGlobalStore } from "@/stores/modules/global";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const globalStore = useGlobalStore();
const locale = zhCn;
const { initTheme } = useTheme();
initTheme();

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });
</script>
