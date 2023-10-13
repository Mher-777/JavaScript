import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { button } from "./modules/button";
import { sliders } from "./modules/slider";
import { select } from "./modules/select";
import { config } from "./config";
import "./vendor/rateyo";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	button.init();
	sliders.init();
	select.init();

	config.log('app init')
	
};

export { App };