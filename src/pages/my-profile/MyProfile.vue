<template>
	<section class="menu">
		<h1>Bem-vindo(a) pessoa à minha caixinha 😊</h1>
		<div class="card">
			<div class="flex row">
				<div class="flex column flex-center">
					<img class="avatar" src="../../assets/img/eu.jpeg" alt="Miranhaaa" />
					<div class="flex row">
						<p>
							<font-awesome-icon icon="user" /> Leonardo Silverio da Silva
							(Leozin)
						</p>
					</div>
					<div class="flex row">
						<p><font-awesome-icon icon="calendar-days" /> 15/06/2002</p>
					</div>
					<p class="bold"><font-awesome-icon icon="folder" /> Documentos</p>
					<div class="flex row">
						<p>CPF: 466.464.078-19</p>
						<p>RG: 56.267.222-9</p>
					</div>
				</div>
				<div class="divider flex flex-center">
					<font-awesome-icon icon="laptop-code" class="icon" />
				</div>
				<div class="flex column">
					<p class="bold">
						<font-awesome-icon icon="briefcase" /> Profissional
					</p>
					<div class="flex row">
						<div class="flex column">
							<p>Empresa:</p>
							<img class="logo" src="../../assets/img/tecware.png" alt="" />
						</div>
						<div class="divider"></div>
						<div class="flex column">
							<p>Linguagem:</p>
							<img class="logo" src="../../assets/img/language.png" alt="" />
						</div>
					</div>
					<div class="flex row">
						<a>
							<p>Cloud:</p>
							<img class="logo" src="../../assets/img/aws.png" alt="" />
						</a>
						<div class="divider"></div>
						<div class="flex column">
							<p>Repositórios:</p>
							<img class="logo" src="../../assets/img/github.png" alt="" />
						</div>
					</div>
				</div>
				<div class="divider flex flex-center">
					<font-awesome-icon icon="laptop-code" class="icon" />
				</div>
				<div class="flex column">
					<p class="bold">
						<font-awesome-icon icon="star" /> Hall dos Favoritos
					</p>
					<div class="flex row">
						<div class="flex column">
							<p>Héroi favorito:</p>
							<img class="logo" src="../../assets/img/miranha.png" alt="" />
						</div>
						<div class="divider"></div>
						<div class="flex column">
							<p>Franquia favorita:</p>
							<img class="logo" src="../../assets/img/star-wars.png" alt="" />
						</div>
					</div>
					<div class="flex row">
						<div class="flex column">
							<p>Banda favorita:</p>
							<img class="logo" src="../../assets/img/panic.png" alt="" />
						</div>
						<div class="divider"></div>
						<div class="flex column">
							<p>Jogo favorito:</p>
							<img class="logo" src="../../assets/img/skyrim.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- <footer></footer> -->
</template>

<script>
export default {
	name: "MyProfilePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./css/my-profile.css";
</style>
