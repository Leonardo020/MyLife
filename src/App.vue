<template>
	<div class="flex row flex-center">
		<SideNav />
		<div class="divider">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import SideNav from "./pages/side-nav/SideNav.vue";

export default {
	name: "App",
	components: {
		SideNav,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
