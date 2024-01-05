import axios from "axios";

export async function getCredentials() {
	var { data } = await axios.get("http://127.0.0.1:5000/credentials");
	return data;
}

export async function postCredentials(body) {
	var { data } = await axios.post("http://127.0.0.1:5000/credentials", body);
	return data.data;
}
