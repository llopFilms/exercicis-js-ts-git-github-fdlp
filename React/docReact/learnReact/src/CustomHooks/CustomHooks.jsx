import FormHook from "./components/FormHook";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";
import WelcomeCSS from "./components/WelcomeCSS";
import WelcomeRefactor from "./components/WelcomeRefactor";

const CustomHooks = () => (
	<div>
		<SaveButton />
		<hr />
		<StatusBar />
		<hr />
		<FormHook />
		<hr />
		<WelcomeRefactor />
		<hr />
		<WelcomeCSS />
		<hr />
	</div>
);

export default CustomHooks;
