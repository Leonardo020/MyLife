<template>
	<navbar class="sidenav">
		<a class="action-menu" @click="() => this.$router.push({ path: '/' })">
			<font-awesome-icon icon="home" class="icon" />
			<p class="line-down">Home</p>
		</a>
		<a
			class="action-menu"
			@click="() => this.$router.push({ path: '/my-profile' })"
		>
			<font-awesome-icon icon="user" class="icon" />
			<p class="line-down">Meu Perfil</p>
		</a>
		<a class="action-menu">
			<font-awesome-icon icon="tablet-android" class="icon" />
			<p class="line-down">Dispositivos</p>
		</a>
		<a
			class="action-menu"
			@click="() => this.$router.push({ path: '/integrations' })"
		>
			<font-awesome-icon icon="link" class="icon" />
			<p class="line-down">Integrações</p>
		</a>
		<a class="action-menu" @click="() => this.$router.push({ path: '/mina' })">
			<font-awesome-icon icon="lock" class="icon" />
			<p class="line-down">Mina</p>
		</a>
	</navbar>
</template>

<script>
export default {
	name: "SideNav",
};
</script>

<style scoped>
@import "./css/side-nav.css";
</style>
