<template>
  <div id="app">
    <Menu/>
    <Paperdoll/>
    <hr>
    <VueApexCharts/>
    <hr>
    <References />
    <hr>
  </div>
</template>

<script>
import Menu from './components/Menu'
import VueApexCharts from './components/VueApexCharts'
import Paperdoll from './components/Paperdoll'
import BackgroundInfo from './components/BackgroundInfo'
import References from './components/References'

export default {
  name: 'App',
  components: {
    Menu,
    VueApexCharts,
    Paperdoll,
    BackgroundInfo,
    References
  }
}
</script>
