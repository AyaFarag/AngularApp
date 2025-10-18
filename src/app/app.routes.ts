import { Routes } from '@angular/router';
import { HomeComponant } from '../Componants/home-componant/home-componant';
import { DashboardComponant } from '../Componants/dashboard-componant/dashboard-componant';
import { ProfileComponant } from '../Componants/dashboard-componant/profile-componant/profile-componant';
import { SettingComponant } from '../Componants/dashboard-componant/setting-componant/setting-componant';
import { ReportComponant } from '../Componants/dashboard-componant/report-componant/report-componant';
import { SkillsComponant } from '../Componants/dashboard-componant/profile-componant/skills-componant/skills-componant';
import { ExperienceComponant } from '../Componants/dashboard-componant/profile-componant/experience-componant/experience-componant';

export const routes: Routes = [
  { path: '', component: HomeComponant },
  {
    path: 'dashboard',
    component: DashboardComponant,
    children: [
      {
        path: 'profile', component: ProfileComponant, children: [
          { path: 'skills', component: SkillsComponant },
          { path: 'experience', component: ExperienceComponant },
          { path: '', redirectTo: 'skills', pathMatch: 'full' }
        ]
      },
      { path: 'settings', component: SettingComponant },
      { path: 'reports', component: ReportComponant },
      { path: '', redirectTo: 'profile', pathMatch: 'full' } // default child route
    ]
  },
  { path: '**', redirectTo: '' }
];
