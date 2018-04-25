import { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
    super(props);

		this.handleClick = this.handleClick.bind(this);
  }

	// getDat = async () => {
	// 	await fetch('/api/auth', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json'
	// 		},
	// 		body: new FormData(this.refs.form)
	// 	})
	// 		.then(res => {
	// 			res.json()
	// 				.then(data => {
	// 					if(data.status) {
	//
	// 					}
	// 				});
	// 		});
	// }

	async getData() {
		const response = await fetch('/api/getUsers', {
	    method: 'GET',
	    headers: {
	      'Accept': 'application/json'
	    }
	  });
		const json = await response.json();

		return json;
	}
	// getData = async () => {
	//   await fetch('/api/getUsers', {
	//     method: 'GET',
	//     headers: {
	//       'Accept': 'application/json'
	//     }
	//   })
	//     .then(res => {
	//       return res.json()
	//     })
	// 		.then(data => {
	// 			console.log(data);
	// 			return data;
	// 		});
	// }

	handleClick() {
		// if (this.authForm.refs.form.style.display || this.authForm.refs.form.style.display === 'flex') {
		// 	this.authForm.refs.form.style.display = 'none';
		// } else {
		// 	this.authForm.refs.form.style.display = 'flex';
		// }
		// console.log(this.authForm.refs.form.style.display);
	}
}
