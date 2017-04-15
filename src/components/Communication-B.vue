<template>
    <div>
        <span>我是B组件</span> -> {{a}}
        <input type="button" value="把B数据给C" @click="send">
    </div>
</template>
<script>
    export default{
        methods:{
            send(){
                this.eventVue.$emit('b-msg',this.a);
            }
        },
        data(){
            return {
                a:'我是b数据'
            }
        },
        props:['eventVue']
            
        
    }
</script>
