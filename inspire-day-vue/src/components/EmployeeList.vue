<template>
<div style="text-align: center">
    <div style="display:inline-block;">
        <h1>Mr. Handsome 2019 Winners</h1>
        <div v-if="!isLoadingData">
            <md-card @click.native="showDetail(employee.id)" class="employee-card" v-for="employee in employees" v-bind:key="employee.id" md-with-hover>
                <md-ripple>
                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">{{employee.lastname}}, {{employee.firstname}}</div>
                            <div class="md-subhead">{{employee.bio}}</div>
                        </md-card-header-text>

                        <md-card-media>
                            <img :src="employee.imgSrc">
                        </md-card-media>

                    </md-card-header>
                </md-ripple>
            </md-card>
        </div>
    </div>
    
    <div v-if="isLoadingData" class="spin">
        <i class="material-icons">sync</i>
    </div>
</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';

@Component
export default class EmployeeList extends Vue {

    private employees: any[] = [];
    private isLoadingData  = false;

    private showDetail(id: string) {
        let urlId = 0;
        if (id === 'janplavka') {
            urlId = 1;
        } else if (id === 'miroslavvercimak') {
            urlId = 2;
        }
        this.$router.push('detail/' + urlId );
    }

    private created() {
        this.isLoadingData = true;
        // in more complex applications the use of models is encouraged
        this.$http.get('https://inpireday.azurewebsites.net/getitems').then((response: AxiosResponse) => {
        this.employees = response.data.map((val: any) => ({
            firstname: val.firstname,
            lastname: val.lastname,
            bio: val.bio,
            tagline: val.tagline,
            twitter: val.twitter,
            imgSrc: 'http://placekitten.com/200/200?image=' + val.firstname.length,
            id: val.id,
        }));
        this.isLoadingData = false;
    });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .employee-card{
        max-width: 450px;
        margin-bottom: 25px;  
    }

    h1{
        margin-bottom: 50px;
    }

    .md-title{
        text-align: left;
    }

    .md-subhead{
        text-align: left;
    }

    .material-icons{
        font-size: 50px;
        -webkit-animation: spin 4s infinite linear;
        animation: spin 4s infinite linear;
        color: #448aff;
        font-size: 150px;
    }

    
    @-webkit-keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);} 
    } 

    @keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}   
    } 
</style>
