<template>
    <div>
        <h3>我是C组件</h3>
        <span>接收过来的A的数据为: {{a}}</span>
        <br>
        <span>接收过来的B的数据为: {{b}}</span>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                a:'',
                b:''
            }
        },
        mounted(){
            //var _this=this;
            //接收A组件的数据
            this.eventVue.$on('a-msg',function(a){
                this.a=a;
            }.bind(this));

            //接收B组件的数据
            this.eventVue.$on('b-msg',function(a){
                this.b=a;
            }.bind(this));
        },
        props:['eventVue']
            
        
    }
</script>
            