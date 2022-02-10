function Navbar () {
	
	const init = () =>{

	} 


	const layaut = ()=>{

		

		return` <nav class="blue">
		<div class="nav-wrapper container">
		<a href="#" class="brand-logo right">BlogApp</a>
		<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
		<ul id="nav-mobile" class="left hide-on-med-and-down">
		<li><a href="index.html">Home</a></li>
		<li><a href="index.html?page=add">Add</a></li>
		</ul>
		<ul class="sidenav" id="mobile-demo">
		<li><a href="index.html">Home</a></li>
		<li><a href="index.html?page=add">Add</a></li>
		</ul>
		</div>
		</nav>`
	}

	return{
		init,
		layaut
	}
}