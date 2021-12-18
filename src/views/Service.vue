<template>
  <Breadcurmb :title='title'/>
  <section id="saas_two_service" class="saas_two_service_section">
    <div class="container">
      <div class="saas_two_section_title saas2-headline text-center">
        <span class="title_tag">Our awesome services</span>
        <h2>We give <span>best facilites </span></h2>
      </div>
      <!-- /section title -->
      <div class="service_content">
        <div class="row justify-content-md-center"></div>
        <div class="service_read_more text-center">
          <a href="%21.html#">Want to download this app? </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Breadcurmb from "../components/lib/Breadcurmb.vue";

export default {
  name: "Service",
  components: {
    Breadcurmb,
  },
  data: () => ({
    title: "Service",
  }),
};
</script>

