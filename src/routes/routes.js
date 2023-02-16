import Main from "../pages/main/Main.vue";
import Integrations from "../pages/integrations/Integrations.vue";
import MyProfile from "../pages/my-profile/MyProfile.vue";
import Mina from "../pages/mina/Mina.vue";

export const routes = [
	{ path: "/", component: Main },
	{ path: "/integrations", component: Integrations },
	{ path: "/my-profile", component: MyProfile },
	{ path: "/mina", component: Mina },
];
