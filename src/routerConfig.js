import SlotHost from './components/SlotHost.vue'
import Router from './components/Router.vue'
import RouterChildren from './components/RouterChildren.vue'
import Communication from './components/Communication.vue'
import Transition from './components/Transition.vue'
import Element from './components/Element.vue'
export default{
	routes:[
       {path:'/slot',component:SlotHost},
       {path:'/router',component:Router,
            children:[
                //{path:':username/age/:age',component:UserName}
                {path:':username/age/:age', component:RouterChildren}
            ]
       },
       {path:"/communication",component:Communication},
       {path:"/transition",component:Transition},
       {path:"/element",component:Element},
       {path:'*',redirect:'/router'}
	]
}
