<template>
    <section id="saasio-breadcurmb" class="saasio-breadcurmb-section">
            <div class="container">
                <div class="breadcurmb-title text-center">
                    <h2>{{title}}</h2>
                </div>
                <div class="breadcurmb-item-list text-center ul-li">
                 <ul class="saasio-page-breadcurmb">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">{{title}}</a></li>
                 </ul>
             </div>
         </div>
     </section>
</template>
<script>
export default {
    name: 'Breadcurmb',
    props: ['title']
    
}
</script>
