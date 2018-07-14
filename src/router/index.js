import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout'
import Detail from '@/pages/detail'
import Car from '@/pages/details/car'
import Earth from '@/pages/details/earth'
import Hill from '@/pages/details/hill'
import Loud from '@/pages/details/loud'
import Drawing from '@/pages/Drawing'
import Day from "@/pages/graph/Day"
import Week from "@/pages/graph/Week"
import Month from "@/pages/graph/Month"
import Threemonths from "@/pages/graph/Threemonth"
import Year from "@/pages/graph/Year"
import Thisyear from "@/pages/graph/Thisyear"
import All from "@/pages/graph/All"

Vue.use(Router)

export default new Router({
	routes: [
	{
	 	path: '/',
		name: 'Layout',
		component:Layout
    	},
    	{
    		path:"/details",
    		name:"detail",
    		component:Detail,
    		redirect:"/details/earth",
    		children:[
	    		{
	    			name:"car",
	    			path:"car",
	    			component:Car
	    		},
	    		{
	    			name:"earth",
	    			path:"earth",
	    			component:Earth
	    		},
	    		{
		    		name:"hill",
		    		path:"hill",
		    		component:Hill
		    	},
		    	{
		    		name:"loud",
		    		path:"loud",
		    		component:Loud
		    	},
    		]
    	},
    	{
    		path:"/graph",
    		name:"Drawing",
    		component:Drawing,
    		redirect:"/graph/day",
    		children:[
	    		{
		                	name:"day",
		               		path:"day",
		                	component:Day
	            		},
	            		{
		               		name:"week",
		                	path:"week",
		                	component:Week
	            		},
	            		{
		                	name:"month",
		                	path:"month",
		                	component:Month
	            		},
	            		{
		               		name:"Threemonths",
		               		path:"Threemonths",
		                	component:Threemonths
	            		},
	            		{
		                	name:"year",
		                	path:"year",
		                	component:Year
	            		},
	            		{
		                	name:"thisyear",
		                	path:"thisyear",
		                	component:Thisyear
	            		},
	            		{
		                	name:"all",
		                	path:"all",
		                	component:All
	            		},
            		]
    	}
    	]
})
