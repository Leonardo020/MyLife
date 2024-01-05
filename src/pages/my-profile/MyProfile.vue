<template>
	<section class="menu">
		<h1>Bem-vindo(a) pessoa à minha caixinha 😊</h1>
		<div class="card">
			<!-- <a href="https://www.linkedin.com/in/leonardosilveriosilva/" target=""
				>Linkedin</a
			> -->
		</div>
	</section>
</template>

<script>
// const { app, BrowserWindow, shell } = require.resolve("electron");

// app.once("ready", () => {
// 	const handleRedirect = (e, url) => {
// 		if (url !== e.sender.getURL()) {
// 			e.preventDefault();
// 			shell.openExternal(url);
// 		}
// 	};
// 	const win = new BrowserWindow();
// 	// Instead bare webContents:
// 	win.webContents.on("will-navigate", handleRedirect);
// 	win.loadURL("http://google.com");
// });
export default {
	name: "MyProfilePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./css/my-profile.css";
</style>
