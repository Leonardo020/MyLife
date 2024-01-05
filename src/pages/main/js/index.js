import axios from "axios";

export async function getTextSpeech() {
	var { data } = await axios.post("http://localhost:23065/api/speech", {
		text: "The Amazing Spider-Man",
		originLanguage: "en",
		destLanguage: "pt-BR",
	});
	return data.data;
}
