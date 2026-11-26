import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { MainLayout } from './shared/components/main-layout/main-layout';
import { EntriesPage } from './features/entries/pages/entries-page/entries-page';
import { PatientsPage } from './features/patients/pages/patients-page/patients-page';
import { DoctorsPage } from './features/doctors/pages/doctors-page/doctors-page';
import { StudiesPage } from './features/studies/pages/studies-page/studies-page';
import { UsersPage } from './features/users/pages/users-page/users-page';
import { SettingsPage } from './features/settings/pages/settings-page/settings-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'entries', component: EntriesPage },
      { path: 'patients', component: PatientsPage },
      { path: 'doctors', component: DoctorsPage },
      { path: 'studies', component: StudiesPage },
      { path: 'users', component: UsersPage },
      { path: 'settings', component: SettingsPage }
    ]
  }
];