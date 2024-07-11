export const environment = 
{
    production: false,
    API_URL: 'https://catecsajenkinsdev.delightfulflower-d540dae7.southeastasia.azurecontainerapps.io'
};

export class EnvironmentModel {
    apiUrl: string;
    apiKey: string;
    otherKey: string;
  }

export class Settings{
  static appSettings: EnvironmentModel;
}