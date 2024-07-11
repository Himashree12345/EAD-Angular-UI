import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentLoader } from './app/environmentLoader';
import { Settings as setting } from './environments/environment';

environmentLoader.then((env) => {
  setting.appSettings = env;
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});


