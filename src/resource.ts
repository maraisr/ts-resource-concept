interface IResourceConfig {
	host: string;
}

class ResourceConstruct {
	host: string;
}

export const Resource = (config: IResourceConfig) =>
	class Resource extends ResourceConstruct {
		host = config.host;
	};
