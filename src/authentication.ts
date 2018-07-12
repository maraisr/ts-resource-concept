export class AuthenticatorInjector {}

export abstract class HeaderAuthentication extends AuthenticatorInjector {
	abstract async getKey(): Promise<string>;
}

export function Authenticator(AuthenticationClass: AuthenticatorInjector) {
	return target => {};
}
