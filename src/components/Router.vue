<template>
    <div>
    	<h3>路由</h3>
    	
    	<ul>
    		<li>
    			<router-link to="/router/snasan/age/33">三三</router-link>	
    		</li>
    		<li>
    			<router-link to="/router/sisi/age/44">四四</router-link>	
    		</li>
    	</ul>
    	<div>
    		<transition enter-active-class="animate rotateIn">
    			<router-view ></router-view>
    		</transition>
    	</div>
    </div>
	

</template>
<style lang="less" scoped>
	li{display:inline-block;}
</style>