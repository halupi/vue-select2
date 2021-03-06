# vue-select2

> Based on knockout-select2 plugin.

## Requirements
- JQuery **1.9.0** or later
- Select2 **4.0.0** or later
- Vue **0.12.0** or later

## Usage
The first step to import and/or use the plugin, is to either import it via CommonJS or just use it directly.

#### CommonJS
```js
	var select2 = require("vue-select2");
	Vue.use( vueSelect2 );
```

#### Global variable
If you are not using CommonJS, then a variable called "vueSelect2" will be available on window scope.

```js
	Vue.use( vueSelect2 );
```

The next step is to indicate which Model's attributes you are going to use (via *HTML*)

```html
	<select v-select2="options: data, value: selected"></select>
```

Where *options* binding is an array containing the values that you want to show and *value* binding is where you want to save the selected value.

## Example
```html
	<div id="demo" class="container">
		<select v-select2="options: countries, value: selectedCountry"></select>
		<h4>Welcome to {{ selectedCountry }}</h4>
	</div>
```

```js
	Vue.use( vueSelect2 );
	
	new Vue({
		el: "#demo",
		data: {
			countries: ["México", "USA", "Brazil", "Argentina", "Chile"],
			selectedCountry: null // don't forget to add it even if it's valueless (read Vue docs)
		}
	});
```
