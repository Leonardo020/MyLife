import { createApp } from "vue";
import App from "./App.vue";

/*Import icons  */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUser,
	faTabletAndroid,
	faLock,
	faLink,
	faHome,
	faLaptopCode,
	faCalendarDays,
	faFolder,
	faStar,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faUser,
	faTabletAndroid,
	faLock,
	faLink,
	faHome,
	faLaptopCode,
	faCalendarDays,
	faFolder,
	faStar,
	faBriefcase
);

/*import global styles*/
import "./assets/styles/reset.css";
import "./assets/styles/style.css";

/*Import routes app*/
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/routes/routes";
const router = createRouter({
	mode: "history",
	history: createWebHashHistory(),
	routes,
});

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
