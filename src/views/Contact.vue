<template>
<Breadcurmb :title='title'/>
<section id="sa-contact-inner" class="sa-contact-inner-section inner-page-padding">
    <div class="container">
        <div class="saas_two_section_title saas2-headline text-center">
            <span class="title_tag">Get In Touch</span>
            <h2>Contact <span>Us
            </span> </h2>
        </div>
        <div class="sa-contact-inner-form">
            <form action="https://html.themexriver.com/Saasio/contact.php">
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" name="name" placeholder="Your Full Name">
                    </div>
                    <div class="col-md-6">
                        <input type="email" name="email" placeholder="Your Email Address">
                    </div>
                    <div class="col-md-6">
                        <input type="text" name="phone" placeholder="Your Mobile Number">
                    </div>
                    <div class="col-md-6">
                        <input type="text" name="subject" placeholder="Your Subject">
                    </div>
                    <div class="col-md-12">
                    <textarea name="message" placeholder="Your Valuable Word"></textarea>
                </div>
                <div class="sa-contact-inner-btn text-center">
                    <button type="submit">Send Message</button>
                </div>
            </div>
        </form>
    </div>
</div>
</section>
</template>
<script>
import Breadcurmb from '../components/lib/Breadcurmb.vue'
export default {
  name: 'Contact',
  components: { Breadcurmb },
  data: () => ({
      title: 'Contact us'
  })
}
</script>
