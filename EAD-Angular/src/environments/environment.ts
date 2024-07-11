export const environment = 
{
    production: false,
    API_URL: 'https://ca-tec-sa-dev.graysky-e41f7bd3.southeastasia.azurecontainerapps.io/'
};

export class EnvironmentModel {
    apiUrl: string;
    apiKey: string;
    otherKey: string;
  }

export class Settings{
  static appSettings: EnvironmentModel;
}