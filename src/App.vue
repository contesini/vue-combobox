<template>
	<div id="app">
		<h1>Vue combobox</h1>
		<div class="linha">
			<Loja />
		</div>
		<div class="linha">
			<Carrinho />
		</div>
	</div>
</template>

<script>
import Loja from './components/Loja'
import Carrinho from './components/Carrinho'

export default {
	name: 'app',
	components: { Loja, Carrinho }
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
}

.linha {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
