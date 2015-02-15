
var vm = new Vue({
	el: '#chessboard',
	data: {
		message: 'hello from Vue'
	},
	methods: {
		piece: $(document).ready( function(){
			$('td').html('hello world!')
		})
	}
});
