<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
             </a>
            <router-link to="/" class="navbar-brand">Pizza点餐系统</router-link>
            
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">主页</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/menu" class="nav-link">菜单</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link">管理</router-link>
                </li>
                <li class="nav-item">
                    <li><router-link to="/about" class="nav-link">关于我们</router-link>
                </li>
                </ul>
                
                <ul class="navbar-nav ml-auto">
                    <li><router-link to="/login" v-show="!isLogin" class="nav-link">登录</router-link></li>

                    <li class="nav-link">{{currentUser}}</li>

                    <li><router-link to="/login" v-show="isLogin" class="nav-link">[退出]</router-link></li>  

                    <li><router-link to="/register" v-show="!isLogin" class="nav-link">注册</router-link></li>
                </ul>   
             </div>
        </nav>
    </header>
</template>

<script>
export default {
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        },
        isLogin(){
            return this.$store.getters.isLogin
        }
    }
}
</script>
