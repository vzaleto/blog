let postMass = JSON.parse(localStorage.getItem('post')) ||  [];

function App(){

	const getRout = () =>{

		const page = window.location.search.split('&').shift().split('=').pop();

		// console.log(page)

		let p = window.location.search.split('=').shift().slice(1);

		console.log(p)

		const Router = [

		{ url:'', component:Home},
		{url:'add',component:Add},
		{url:'item', component:Item}

		];


		let ping = Router.find(function(el){

			if(el.url == page){

				return	el
			}
		})

		if(p=='p'){
			
			return	Router[0]

		}else{
			return ping
		}

		

	}
	
	// getRout()

	// console.log(getRout().component().layaut())
	


	document.querySelector('#app').innerHTML = `

	${Navbar().layaut()}

	<div class='container' >


	${getRout().component().layaut()}

	</div>

	`
	getRout().component().init()
}
App()

