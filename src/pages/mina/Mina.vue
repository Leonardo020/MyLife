<template>
	<section class="menu">
		<h1>Lugar super secreto adiante 👀</h1>
		<div id="search">
			<font-awesome-icon icon="search" id="search-icon" />
			<input
				class="input-search"
				v-model="search"
				type="text"
				name="source"
				id="source"
			/>
		</div>

		<button v-if="!isAdd" class="btn action-button" @click.prevent="finishAdd">
			<font-awesome-icon icon="plus" class="icon" />
		</button>

		<button
			v-else-if="form.source == '' || form.user == '' || form.password == ''"
			class="btn action-button"
			@click.prevent="finishAdd"
		>
			<font-awesome-icon icon="close" class="icon" />
		</button>
		<button v-else class="btn action-button" @click.prevent="addCredential">
			<font-awesome-icon icon="save" class="icon" />
		</button>
		<table class="fixed">
			<thead>
				<tr>
					<th>Fonte</th>
					<th>Usuário</th>
					<th>Senha</th>
				</tr>
			</thead>
			<tr v-if="isAdd" id="add-credential">
				<td><input v-model="form.source" class="input-table" type="text" /></td>
				<td><input v-model="form.user" class="input-table" type="text" /></td>
				<td>
					<input v-model="form.password" class="input-table" type="text" />
				</td>
			</tr>
			<tbody>
				<tr v-for="credential in filteredList" :key="credential.id">
					<td>{{ credential.source }}</td>
					<td>{{ credential.user }}</td>
					<td>{{ credential.password }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
import * as credential from "./js/index";

export default {
	name: "MinaPage",
	data() {
		return {
			form: {
				source: "",
				user: "",
				password: "",
			},
			search: "",
			isAdd: false,
			credentials: [],
		};
	},
	mounted() {
		credential
			.getCredentials()
			.then((response) => (this.credentials = response));
	},
	methods: {
		finishAdd() {
			this.isAdd = !this.isAdd;
			this.resetForm();
		},

		addCredential() {
			credential
				.postCredentials({
					source: this.form.source,
					url: `https://${this.form.source}/`,
					user: this.form.user,
					password: this.form.password,
				})
				.then((credential) => {
					credential.id = this.credentials.length + 1;
					this.credentials.push(credential);
				});

			this.finishAdd();
		},

		resetForm() {
			var self = this;
			Object.keys(this.form).forEach(function (key) {
				self.form[key] = "";
			});
		},
	},
	computed: {
		filteredList() {
			if (this.credentials == null) {
				return;
			}

			return this.credentials
				.filter((credential) => {
					return credential.source
						.toLowerCase()
						.includes(this.search.toLowerCase());
				})
				.reverse();
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./css/mina.css";
</style>
