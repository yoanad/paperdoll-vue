<template>
  <div id="app">
    <Paperdoll/>
    <VueApexCharts/>
    <hr>
    <BackgroundInfo/>
  </div>
</template>

<script>
  import VueApexCharts from './components/VueApexCharts'
  import Paperdoll from './components/Paperdoll'
  import BackgroundInfo from './components/BackgroundInfo';

  export default {
    name: 'App',
    components: {
      VueApexCharts,
      Paperdoll,
      BackgroundInfo
    }
  }
</script>