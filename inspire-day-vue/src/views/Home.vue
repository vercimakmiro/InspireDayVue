<template>
  <div class="home">
    <EmployeeList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EmployeeList from '@/components/EmployeeList.vue'; // @ is an alias to /src

@Component({
  components: {
    Home,
    EmployeeList,
  },
})
export default class Home extends Vue {}
</script>
