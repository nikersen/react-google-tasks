const CLIENT_ID = '851281224774-0tqnnu1ercm3dtr9f8hon69q1rr8k3qo.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
	authorize(params) {
		return new Promise((resolve, reject) => {
			gapi.auth.authorize(
				{
					'client_id': CLIENT_ID,
					'scope': SCOPES,
					'immediate': params.immediate,
					'cookie_policy': 'single_host_origin'
				},
				authResult => {
					console.log(authResult);
					if (authResult.error)
						return reject(authResult.error);

					return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve()));
				}
			);
		});
	},
	listTasksLists() {
		const request = gapi.client.tasks.tasklists.list();

		return new Promise((resolve, reject) => {
			request.execute(resp => resolve(resp));
		});
	}
}