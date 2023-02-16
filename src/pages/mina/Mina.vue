<template>
	<section class="menu">
		<h1>Bem-Vindo ao meu Cofre!</h1>
		<div id="search">
			<font-awesome-icon icon="search" class="icon" />
			<input
				class="input-search"
				v-model="search"
				type="text"
				name="source"
				id="source"
			/>
		</div>
		<table class="table">
			<tr>
				<th>Fonte</th>
				<th>Usuário</th>
				<th>Senha</th>
			</tr>
			<tr>
				<td>AWS</td>
				<td>Leozin</td>
				<td>123</td>
			</tr>
		</table>
	</section>
	<footer></footer>
</template>

<script>
export default {
	name: "MinaPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./css/mina.css";
</style>
