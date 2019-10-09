<template>
  <div v-if="employee !== null">
    <div style="text-align:center;">
    <div class="detail-container" style="display:inline-block;">
    <img :src="employee.imgSrc">
    <h1>{{ employee.lastname }}, {{employee.firstname}}</h1>
    <h2>{{ employee.bio}}</h2>
    <div><b>id:</b> {{employee.id}}</div>
    <div><b>Twitter:</b> {{employee.twitter}}</div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';

@Component
export default class Detail extends Vue {

    private employee: any = null;

    private created() {
        // in more complex applications the use of models is encouraged
        this.$http.get('https://inpireday.azurewebsites.net/getitems/'
                      + this.$route.params.id).then((response: AxiosResponse) => {
        this.employee = {
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            bio: response.data.bio,
            tagline: response.data.tagline,
            twitter: response.data.twitter,
            imgSrc: 'http://placekitten.com/200/200?image=' + response.data.firstname.length,
            id: response.data.id,
        };
    });
    }

}
</script>

<style lang="scss" scoped>
  
  .detail-container{
    background-color:  #41b883;
    color:white;
    margin-top: 100px;
    max-width: 550px;
    border-radius: 5%;
    padding: 50px;
  }
</style>