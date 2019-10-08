<template>
  <div class="home">
    <EmployeeList/>
  </div>
</template>

<script lang="ts">
/**
 * VueJS supports using Typescript. This is used throughout this project and is offered
 * as an option when generating project through VueCLI. 
 * More on Vue CLI : https://cli.vuejs.org/
 */
import { Component, Vue } from 'vue-property-decorator';
import EmployeeList from '@/components/EmployeeList.vue'; // @ is an alias to /src

/**
 * In folders "views" and "components" there are actually always just Vue components. 
 * Rule of the thumb is - reusable stuff goes into "components", staff asociated with 
 * routing/stuff that is not reusable goes into "views".
 */
@Component({
  components: {
    Home,
    EmployeeList,
  },
})
export default class Home extends Vue {}
</script>
