<template>
    <div>
        <span>我是A组件</span> -> {{a}}
        <input type="button" value="把A数据给C" @click="send">
    </div>
</template>
<script>
    export default{
        methods:{
            send(){
                this.eventVue.$emit('a-msg',this.a);
            }
        },
        data(){
            return {
                a:'我是a数据'
            }
        },
        props:['eventVue']
           
        
    }
</script>

            