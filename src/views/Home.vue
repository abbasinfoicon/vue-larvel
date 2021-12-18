<template>
<Banner />
<Sponsor />
<About />
<Featured />
<Service />
<Achivement />
<Testimonial />
<Contact />
<Blog />
</template>

<script>
import About from '../components/home/About.vue'
import Achivement from '../components/home/Achivement.vue'
import Banner from '../components/home/Banner.vue'
import Blog from '../components/home/Blog.vue'
import Contact from '../components/home/Contact.vue'
import Featured from '../components/home/Featured.vue'
import Service from '../components/home/Service.vue'
import Sponsor from '../components/home/Sponsor.vue'
import Testimonial from '../components/home/Testimonial.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Sponsor,
    About,
    Featured,
    Service,
    Achivement,
    Testimonial,
    Contact,
    Blog
    
  }
}
</script>
