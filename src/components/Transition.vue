<template>
	<div>
        <input type="text" v-model="show"> <span>请尝试输入：'apple','banana','orange','pear'</span>

        <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <p v-show="show" class="animated" v-for="(val,index) in lists" :key="index">
                {{val}}
            </p>
        </transition-group>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				show:'',
                list:['apple','banana','orange','pear']
			}
        },
        computed:{
            lists:function(){
                var arr=[];
                this.list.forEach(function(val){
                    if(val.indexOf(this.show)!=-1){
                        arr.push(val);
                    }
                }.bind(this));
                return arr;
            }
        }
	}
</script>
<style>
    p{
        width:100px;
        height:100px;
        background: red;
        margin:10px auto;
    }
</style>