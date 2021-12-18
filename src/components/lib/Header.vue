<template>
    <div id="preloader"></div>
    <div class="up">
        <a href="#" class="scrollup text-center"><i class="fas fa-chevron-up"></i></a>
    </div>
   <header id="it-header-up" :class="{ 'it-header-up-seaction': $store.state.isHome, 'saas_two_main_header': !$store.state.isHome}"> 
        <div class="it-header-up-top clearfix">
            <div class="container">
                <div class="it-header-top-cta float-left">
                    <a href="#"><i class="fas fa-envelope"></i> info@webmail.com</a>
                    <a href="#"><i class="fas fa-phone"></i> +987 876 765 65 5</a>
                    <a href="#"><i class="fas fa-map-marker-alt"></i> 14/A, Brown City, NYC</a>
                </div>
                <div class="it-header-top-social float-right">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-behance"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div class="it-up-header-main">
            <div class="container">
                <div class="it-up-brand-logo float-left">
                    <router-link to="/"><img src="assets/img/its/logo/logo1.png" alt=""></router-link>
                </div>
                <div class="it-up-main-menu-wrap clearfix">
                    <nav class="it-up-main-navigation float-left ul-li">
                        <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
                            <li class="side-demo position-relative"><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/team">Team</router-link></li>
                            <li><router-link to="/service">Service</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                            <li><router-link to="/blog">Blog</router-link></li>
                        </ul>
                    </nav>
                    <div class="it-up-header-cta-btn float-right text-center">
                        <a href="#">Appointment</a>
                    </div>
                </div>
                <div class="mobile_menu relative-position">
                    <div class="mobile_menu_button it-up-open_mobile_menu">
                        <i class="fas fa-bars"></i>
                    </div>
                    <div class="it-up-mobile_menu_wrap">
                        <div class="mobile_menu_overlay it-up-open_mobile_menu"></div>
                        <div class="mobile_menu_content">
                            <div class="mobile_menu_close it-up-open_mobile_menu">
                                <i class="far fa-times-circle"></i>
                            </div>
                            <div class="m-brand-logo text-center">
                                <img src="assets/img/its/logo/logo2.png" alt="">
                            </div>
                            <nav class="main-navigation mobile_menu-dropdown  clearfix ul-li">
                                <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
                                    <li class="side-demo position-relative"><router-link to="/">Home</router-link></li>
                                    <li><router-link to="/about">About</router-link></li>
                                    <li><router-link to="/team">Team</router-link></li>
                                    <li><router-link to="/service">Service</router-link></li>
                                    <li><router-link to="/contact">Contact</router-link></li>
                                    <li class="dropdown"><router-link to="/blog">Blog</router-link>
                                        <ul class="dropdown-menu clearfix">
                                            <li><router-link to="/">Blog List</router-link></li>
                                            <li><router-link to="/">Blog Details</router-link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
