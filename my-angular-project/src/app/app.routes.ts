import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimetablesComponent } from './pages/timetables/timetables.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { PyqsComponent } from './pages/pyqs/pyqs.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ThreeDModelComponent } from './pages/three-d-model/three-d-model.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timetables', component: TimetablesComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'pyqs', component: PyqsComponent },
  { path: 'notes', component: NotesComponent },
  { path: '3d-model', component: ThreeDModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
