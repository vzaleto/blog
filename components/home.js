function Home () {
	
	const init = () =>{	}

	let tagCikl = window.location.search.split('=').pop();

	console.log(tagCikl)

	let limit = 5;



	let end = limit * tagCikl || limit ;

	console.log('end', end)
	
	let start = end - limit;






	const getPagination = () =>{

		console.log(postMass.length)

		let numbPag = Math.ceil(postMass.length / limit); 

		let HTML = '';

		for(i = 1; i <= numbPag; i++){

			console.log([i])


			HTML += ` <li class='item-pag'> <a href="index.html?p=${i}">${[i]}</a> </li> `

		}

		return HTML;

	}


	// getPagination();



	const getPostIt = () =>{

		let HTML='';

		if (postMass.length) {

			postMass.forEach( function(element, index) {


				if(index>=start && index < end ){

					HTML += `
					<div class='collection-item'>
					<h6><a href='index.html?page=item&post_id=${ element.postDateId }' >${element.post_title}</a></h6>
					</div>

					`

				}

				



			});

			
		}else{

			HTML = `<div class='collection-item' > <H6>Not item</H6>   </div>`

		}

		return HTML;

	} 

	const layaut = ()=>{

		return`
		<h2>page Home</h2>

		<div class='collection' >
		${getPostIt()}
		</div>
		<ul class='pagination' >${getPagination()}</ul>

		
		`

	}

	return{
		init:init,
		layaut:layaut
	}
}