import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { ExpertiesComponent } from './components/experties/experties.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TrainingComponent } from './components/training/training.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"workexperience",component:WorkexperienceComponent},
    {path:"experties",component:ExpertiesComponent},
    {path:"hobbies",component:HobbiesComponent},
    {path:"achievement",component:AchievementComponent},
    {path:"training",component:TrainingComponent},
    {path:"contact",component:ContactComponent}
];
