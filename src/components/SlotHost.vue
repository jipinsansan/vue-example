
<template id="SlotHost">
	<div id="box">
	    <h3>slot</h3>
		<SlotM>
			<ul slot="ul-slot">
				<li>1111</li>
				<li>2222</li>
				<li>3333</li>
			</ul>
			<ol slot="ol-slot">
				<li>111</li>
				<li>222</li>
				<li>333</li>
			</ol>
		</SlotM> 
		<hr>
        <SlotM></SlotM>
	</div>
</template>
<script>
    import SlotM from './Slot.vue'
	export default {
	  components:{SlotM
				/*'aaa':{
					template:`<div>
					            <h3>welcome vue1</h3>
								<slot name="ol-slot">这是默认的情况</slot>
								<h3>welcome vue2</h3>
								<slot name="ul-slot">这是默认的情况2</slot>
							  </div>
							`
				}*/
			}
	}
</script>