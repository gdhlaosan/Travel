<template>
    <div id="app">
    	<keep-alive exclude="Detail"> <!-- 指定Detail这个组件不做缓存 -->
        	<router-view></router-view>
        </keep-alive>
    </div>
</template>
<style lang="stylus">

</style>
