import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function (valor) {
	return valor.split('').reverse().join('')
})

Vue.filter('contarTamanhoPalavras', function (valor) {
	return valor.split(" ").map(p => `${p} (${p.length})`).join(' ');
	/* const arr = valor.split(" ");
	var stringFinal = "";
	arr.forEach(element => {
		stringFinal += element + " (" + element.length + ") "
	});
	return stringFinal; */
})

new Vue({
	render: h => h(App)
}).$mount('#app')
