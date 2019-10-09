<template>
    <div class="container">
         <img src="@/assets/logo.png">
         <div class="motto">Learn something <span class="moto-highlight">Vue</span>. Get <span class="moto-highlight">inspired</span>.</div>

         <h1>Inspire Day 2019 - VueJS Demonstration</h1>
         <div>Sources available at: <a href="https://github.com/vercimakmiro/InspireDayVue">https://github.com/vercimakmiro/InspireDayVue</a> </div>

         <h1>Other demos</h1>
         <div>Angular demo: <a href="https://github.com/MKovacik/InspireDayAngular">https://github.com/MKovacik/InspireDayAngular</a> </div>
         <div>ReactJS demo: <a href="https://github.com/vercimakmiro/InspireDayVue">https://github.com/vercimakmiro/InspireDayVue</a> </div>
    </div>
</template>

<style scoped>
    img{
        width: 200px;
        height: 200px;
    }

    .container{
        padding:200px;
    }

    .motto{
        margin-top: 40px;
        margin-bottom: 50px;
        font-size: 48px !important;
        color: #34495e;
    }

    .moto-highlight{
        background-color: #41b883;
    }
</style>