import { Authenticator, HeaderAuthentication } from './authentication';
import { Resource } from './resource';

interface IPost {
	body: string;
	id: number;
	title: string;
	userId: number;
}

type TGETPost = Array<IPost>;

@Authenticator(
	new class extends HeaderAuthentication {
		async getKey() {
			return 'xAccessToken';
		}

		async getValue() {
			return 'my fancy token';
		}
	}()
)
class CarService extends Resource({
	host: 'https://jsonplaceholder.typicode.com'
}) {
	async getPosts() {
		return Promise.resolve('test');
		//return this.GET<TGETPost>('posts');
	}

	async getPost(id: number) {
		//return this.GET<IPost>(`posts/${id}`);
	}
}

// -- Final usage
const postServiceInstance = new CarService();
postServiceInstance
	.getPosts()
	.then(console.log)
	.catch(console.error);
