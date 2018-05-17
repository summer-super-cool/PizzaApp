<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" to="/Contact">
            <a href="" class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/OrderingGuide">
            <a href="" class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/Delivery">
            <a href="" class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
          <router-link tag="li" class="nav-link" to="/History">
            <a href="" class="list-group-item list-group-item-action">历史订单</a>
          </router-link>          
        </div>
      </div>
      <div class="col-8">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
