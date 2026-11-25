import { bootstrapApplication } from '@angular/platform-browser';
import { MedicPage } from './app/features/auth/pages/medic-page/medic-page';

bootstrapApplication(MedicPage).catch((error: unknown) => {
  console.error(error);
});
