<template>
	<div>
		<h3>单一事件组件之间的通信</h3>
		<h4 v-if="msg">我是父组件得到了子组件的  "{{msg}}"</h4>
        <com-a :eventVue="Event" ></com-a>
        <com-b :eventVue="Event"></com-b>
        <com-c :eventVue="Event" ></com-c>
    </div>
	</div>
</template>
<script>
    import Vue from 'vue'
    //var Event=new Vue()
	import comA from './Communication-A.vue'
	import comB from './Communication-B.vue'
	import comC from './Communication-C.vue'
	export default{
		components:{'com-a':comA,"com-b":comB,"com-c":comC},
		data(){
			return {
				msg:"",
				Event:new Vue()
			}
		}/*,methods{
			get(msg){
				this.msg=msg
			}
		}*/
		,mounted(){
            //var _this=this;
            //接收A组件的数据
            this.Event.$on('a-msg',function(a){
                this.msg=a;
            }.bind(this));
        }
	}
</script>