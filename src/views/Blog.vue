<template>
<Breadcurmb :title="title" />
<section id="news-feed" class="news-feed-section">
    <div class="container">
        <div class="blog-feed-content">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-feed-post" v-for="item in getBlogList" :key="item">
                        <div class="blog-feed-img-txt">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="saasio-blog-img">
                                        <img :src="item.img" alt="">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="saasio-blog-text">
                                        <h3 @click="getDetails(item)"><router-link to="/blog-details">{{item.title.slice(0, 35)}}...</router-link></h3>
                                        <div class="saasio-post-meta">
                                            <router-link to="/"><i class="fas fa-calendar-alt"></i> {{getDate}}</router-link>
                                            <router-link to="/"><i class="fas fa-user"></i> {{item.name}}</router-link>
                                        </div>
                                        <p>{{item.description.slice(0, 300)}}</p>
                                        <div @click="getDetails(item)"><router-link to="/blog-details" class="blog-read-more">Read More</router-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="saasio-pagination text-center ul-li">
                        <ul>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a class="active" href="#">3</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">10</a></li>
                        </ul>
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="saasio-blog-sidebar">
                        <div class="side-bar-widget">
                            <div class="search-widget dia-headline">
                                <h3 class="widget-title-2">Search</h3>
                                <form action="#" class="relative-position">
                                    <input type="text" name="search" placeholder="Search Here">
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="side-bar-widget">
                            <div class="category-widget dia-headline ul-li-block">
                                <h3 class="widget-title-2">Category</h3>
                                <ul>
                                    <li><a href="#">Application <span>(06)</span></a></li>
                                    <li><a href="#">Software <span>(06)</span></a></li>
                                    <li><a href="#">Landing Page <span>(06)</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="side-bar-widget">
                            <div class="category-widget dia-headline ul-li-block">
                                <h3 class="widget-title-2">Recent Post</h3>
                                <div class="recent-post-area">

                                    <div class="recent-post-img-text" v-for="recent in getList" :key="recent">
                                        <div class="recent-post-img float-left">
                                            <img :src="recent.img" alt="">
                                        </div>
                                        <div class="recent-post-text dia-headline">
                                            <h3><a href="#">{{recent.title.slice(0,30)}}...</a></h3>
                                            <span class="rec-post-meta"><a href="#">{{getDate}}</a></span>
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
import Breadcurmb from '../components/lib/Breadcurmb.vue'
export default {
  components: { Breadcurmb },
  name: 'Blog',
  data: () => ({
        title:'Blog',
    }),
    computed:{
        getDate(){
           return  this.$store.getters.getDate;
        },
        getList(){
            return this.$store.state.blogList.length > 0 ? this.$store.state.blogList.slice(this.$store.state.blogList.length-3,this.$store.state.blogList.length).reverse() : this.$store.state.blogList;
        },
        getBlogList(){
            return this.$store.state.blogList.length > 0 ? this.$store.state.blogList.slice().reverse() : this.$store.state.blogList;
        }
    },

    methods:{
        getDetails(item){
            this.$store.commit("getDetails", item);
        }
    },

    mounted(){
        this.$store.dispatch("getBlogs");
    }
}
</script>
