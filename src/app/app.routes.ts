import { Routes } from '@angular/router';
import { HospitalOverviewComponent } from './pages/hospital-overview/hospital-overview.component';
import { HospitalLocationsComponent } from './pages/hospital-locations/hospital-locations.component';
import { LocationDetailComponent } from './pages/hospital-locations/location-detail.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patients/patient-detail.component';
import { PatientUpdateComponent } from './patients/patient-update.component';
import { KnowMoreComponent } from './pages/know-more/know-more.component';


export const routes: Routes = [
  { path: '', component: HospitalOverviewComponent },
  { path: 'locations', component: HospitalLocationsComponent },
  { path: 'location/:id', component: LocationDetailComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: 'patients/:id/edit', component: PatientUpdateComponent },
  { path: 'know-more', component: KnowMoreComponent },
  { path: '**', redirectTo: '' },
];



