function Item () {
	
	const init = () =>{

	} 


	const getItem = () => {

		let itemPage = window.location.search.split('=').pop()

		


		let itemPost = postMass.find(function(el){

			return	el.postDateId == itemPage

		});

		let HTML  = '';

		if(itemPost){

			HTML =` <div>
			<div>${itemPost.postDDate}</div>
			<div>${itemPost.post_title}</div>
			<div>${itemPost.post_text}</div>
			</div> `

		}else{

			HTML = `<div>NOt found</div>`

		}



		return HTML;

		console.log(itemPost)


	}

	getItem()


	const layaut = ()=>{
		return`<h2>page item</h2>
		<div>${getItem ()}</div>
		  <a href="index.html" class="btn green">Go back</a>
		`
	}

	return{
		init:init,
		layaut:layaut
	}
}