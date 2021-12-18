<template>
  <Header />
  <router-view/>
  <Footer />
</template>
<script>
import Header from '@/components/lib/Header'
import Footer from '@/components/lib/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>

</style>
