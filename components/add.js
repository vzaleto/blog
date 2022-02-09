function Add () {
	
	const init = () =>{

		let input = document.querySelectorAll('input');

		document.querySelector('form').onsubmit = function(e){

			e.preventDefault();

			


			const Post = {

				postDateId: Date.now(),
				postDDate: new Date().toLocaleString()

			}



			input.forEach(function(elem){

				Post[elem.name] = elem.value;

				elem.value = '';

			});

	f()
			if(Post.post_text == '' || Post.post_title == ''){

				console.log(Post.post_text)

			}else{

				postMass.push(Post);

				console.log(postMass);

				localStorage.setItem('post', JSON.stringify(postMass));

			}

			

			

			// e.target.reset()

		}
		function f(){

			if(input[0].value == "" || input[1].value == "" ){

				console.log(1)

			}
		}




	}








	const layaut = ()=>{
		return`<h2>page Add</h2>

		<form action="">
		<lable>
		Post title:

		<input type="text" name='post_title'  placeholder='post title'>

		</lable>
		<lable>
		Post text:
		<input type="text" name='post_text'  placeholder='post text' >
		</lable>

		<button type='submit' class='btn green' >add post</button>
		</form>

		`
	}

	return{
		init,
		layaut
	}
}