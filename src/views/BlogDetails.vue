<template>
  <Breadcurmb :title="title" />
  <section id="news-feed" class="news-feed-section">
    <div class="container">
      <div class="blog-feed-content">
        <div class="row">
          <div class="col-md-8">
            <div class="saasio-blog-details-content">
              <div class="blog-details-img">
                <img :src="$store.state.blogDetails.img" alt="" />
              </div>

              <div class="blog-details-text dia-headline">
                <h2>{{$store.state.blogDetails.title}}</h2>
                <div class="saasio-post-meta">
                  <router-link to="/"><i class="fas fa-calendar-alt"></i> {{getDate}}</router-link>
                  <router-link to="/"><i class="fas fa-user"></i> {{$store.state.blogDetails.name}}</router-link>
                </div>
                
                <article> {{ $store.state.blogDetails.title }} </article>
              </div>

              <div class="blog-details-tag clearfix">
                <div class="blog-feed-tag float-left">
                  <span>Tags:</span>
                  <router-link to="/">Business</router-link>
                  <router-link to="/">Life</router-link>
                  <router-link to="/">SaaSio</router-link>
                </div>
                
                <div class="blog-feed-share float-right">
                  <span>Share:</span>
                  <router-link to="/"><i class="fb-bg fab fa-facebook-f"></i></router-link>
                  <router-link to="/"><i class="bh-bg fab fa-behance"></i></router-link>
                  <router-link to="/"><i class="tw-bg fab fa-twitter"></i></router-link>
                  <router-link to="/"><i class="dr-bg fab fa-dribbble"></i></router-link>
                </div>
              </div>

              <div class="saasio-comment-field dia-headline">
                <h3>Comments (03)</h3>
                <div class="comment-list-item">
                  <div class="comment-inner-box">
                    <div class="comment-author-img float-left">
                      <img src="assets/img/blog/ca1.jpg" alt="" />
                    </div>
                    <div class="comment-author-text">
                      <h4><a href="#">Rolax Fellan</a></h4>
                      <span>November 25, 2021 at 09:00 am</span>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using.
                      </p>
                      <a class="comment-reply" href="#">Reply</a>
                    </div>
                  </div>
                  <div class="comment-inner-box">
                    <div class="comment-author-img float-left">
                      <img src="assets/img/blog/ca2.jpg" alt="" />
                    </div>
                    <div class="comment-author-text">
                      <h4><a href="#">Daile Cane</a></h4>
                      <span>November 25, 2021 at 09:00 am</span>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using.
                      </p>
                      <a class="comment-reply" href="#">Reply</a>
                    </div>
                  </div>
                </div>
                <h3>Post a comment</h3>
                <div class="comment-form">
                  <form action="#">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your  Email Address"
                    />
                    <input
                      type="tetx"
                      name="website"
                      placeholder="Enter Your Website"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Comment here..."
                    ></textarea>
                    <button type="submit">Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="saasio-blog-sidebar">
              <div class="side-bar-widget">
                <div class="search-widget dia-headline">
                  <h3 class="widget-title-2">Search</h3>
                  <form action="#" class="relative-position">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search Here"
                    />
                    <button type="submit"><i class="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
              <div class="side-bar-widget">
                <div class="category-widget dia-headline ul-li-block">
                  <h3 class="widget-title-2">Category</h3>
                  <ul>
                    <li>
                      <a href="#">Application <span>(06)</span></a>
                    </li>
                    <li>
                      <a href="#">Software <span>(06)</span></a>
                    </li>
                    <li>
                      <a href="#">Landing Page <span>(06)</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="side-bar-widget">
                <div class="category-widget dia-headline ul-li-block">
                  <h3 class="widget-title-2">Recent Post</h3>
                  <div class="recent-post-area">
                    <div class="recent-post-img-text">
                      <div class="recent-post-img float-left">
                        <img src="assets/img/blog/rec1.jpg" alt="" />
                      </div>
                      <div class="recent-post-text dia-headline">
                        <h3><a href="#">Engaging New Smart Approach.</a></h3>
                        <span class="rec-post-meta"
                          ><a href="#">December 12, 2021</a></span
                        >
                      </div>
                    </div>
                    <div class="recent-post-img-text">
                      <div class="recent-post-img float-left">
                        <img src="assets/img/blog/rec-2.jpg" alt="" />
                      </div>
                      <div class="recent-post-text dia-headline">
                        <h3><a href="#">Engaging New Smart Approach.</a></h3>
                        <span class="rec-post-meta"
                          ><a href="#">December 12, 2021</a></span
                        >
                      </div>
                    </div>
                    <div class="recent-post-img-text">
                      <div class="recent-post-img float-left">
                        <img src="assets/img/blog/rec-3.jpg" alt="" />
                      </div>
                      <div class="recent-post-text dia-headline">
                        <h3><a href="#">Engaging New Smart Approach.</a></h3>
                        <span class="rec-post-meta"
                          ><a href="#">December 12, 2021</a></span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="side-bar-widget">
                <div class="popular-widget dia-headline ul-li">
                  <h3 class="widget-title-2">Popular Tag</h3>
                  <ul>
                    <li><a href="#">Application </a></li>
                    <li><a href="#">Software </a></li>
                    <li><a href="#">Landing </a></li>
                    <li><a href="#">App </a></li>
                    <li><a href="#">Design </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Breadcurmb from "../components/lib/Breadcurmb.vue";
export default {
  components: { Breadcurmb },
  name: "BlogDetails",
  data: () => ({
    title: "Blog Details",
    details: {}
  }),

  computed:{
        getDate(){
           return  this.$store.getters.getDate;
        }
    },


    watch:{
        details(){
            return this.$store.state.blogDetails;
        }
    },

    mounted(){
     this.details = this.$store.state.blogDetails; 
  }
};
</script>
