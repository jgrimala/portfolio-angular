// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts';

/*************************************************************************** 
 *************************** COMPONENTS ************************************
****************************************************************************/ 

// App Component
import { AppComponent } from './app.component';

// Auth Component
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

// Header Component
import { HeaderComponent } from './header/header.component';

// Portfolio Components
//import { PortfolioComponent } from './portfolio/portfolio.component';

//  Home Components
import { HomeComponent } from './home/home.component';

// Users Components
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserComponent } from './user-list/single-user/single-user.component';
//import { NewUserComponent } from './user-list/new-user/new-user.component';


// Biography Components
import { BiographyListComponent } from './biography-list/biography-list.component';
import { SingleBiographyComponent } from './biography-list/single-biography/single-biography.component';
//import { NewBiographyComponent } from './biography-list/new-biography/new-biography.component';

// Audio Components
import { AudioListComponent } from './audio-list/audio-list.component';
import { SingleAudioComponent } from './audio-list/single-audio/single-audio.component';
//import { NewAudioComponent } from './audio-list/new-audio/new-audio.component';

// Video Components
import { VideoListComponent } from './video-list/video-list.component';
import { SingleVideoComponent } from './video-list/single-video/single-video.component';
//import { NewVideoComponent } from './video-list/new-video/new-video.component';

// Education Components
import { EducationListComponent } from './education-list/education-list.component';
import { SingleEducationComponent } from './education-list/single-education/single-education.component';
//import { NewEducationComponent } from './education-list/new-education/new-education.component';

// Experience Components
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { SingleExperienceComponent } from './experience-list/single-experience/single-experience.component';
//import { NewExperienceComponent } from './experience-list/new-experience/new-experience.component';

// skill Components
import { SkillListComponent } from './skill-list/skill-list.component';
import { SingleSkillComponent } from './skill-list/single-skill/single-skill.component';
//import { NewSkillComponent } from './skill-list/new-skill/new-skill.component';



/*************************************************************************** 
****************************** SERVICES ************************************
****************************************************************************/ 
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BiographyService } from './services/biography.service';
import { AudioService } from './services/audio.service';
import { VideoService } from './services/video.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { SkillService } from './services/skill.service';
import { PortfolioService } from './services/portfolio.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { VimeoUrlPipe } from './pipes/vimeo-url.pipe';



/*************************************************************************** 
****************************** ROUTING *************************************
****************************************************************************/ 
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'home'}},
  { path: 'auth/register', component: RegisterComponent, data: {animation: 'register'} },
  { path: 'auth/login', component: LoginComponent, data: {animation: 'login'} },

  { path: 'biography-list', component: BiographyListComponent, data: {animation: 'biography'} },
  { path: 'biography-list/view/:id', component: SingleBiographyComponent },
  //{ path: 'biography-list/new', component: NewBiographyComponent},

  { path: 'user-list', component: UserListComponent, data: {animation: 'user'} },
  { path: 'user-list/view/:id', component: SingleUserComponent },
  //{ path: 'user-list/new', component: NewUserComponent },

  { path: 'audio-list', component: AudioListComponent, data: {animation: 'audio'} },
  { path: 'audio-list/view/:id', component: SingleAudioComponent },
  //{ path: 'audio-list/new', component: NewAudioComponent },

  { path: 'video-list', component: VideoListComponent, data: {animation: 'video'} },
  { path: 'video-list/view/:id', component: SingleVideoComponent },
  //{ path: 'video-list/new', component: NewVideoComponent },

  { path: 'education-list', component: EducationListComponent, data: {animation: 'education'} },
  { path: 'education-list/view/:id', component: SingleEducationComponent },
  //{ path: 'education-list/new', component: NewEducationComponent },

  { path: 'experience-list', component: ExperienceListComponent, data: {animation: 'experience'} },
  { path: 'experience-list/view/:id', component: SingleExperienceComponent },
  //{ path: 'experience-list/new', component: NewExperienceComponent },

  { path: 'skill-list', component: SkillListComponent, data: {animation: 'skill'} },
  { path: 'skill-list/view/:id', component: SingleSkillComponent },
  //{ path: 'skill-list/new', component: NewSkillComponent },

  //{ path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    //PortfolioComponent,
    HomeComponent,
    UserListComponent,
    //NewUserComponent,
    SingleUserComponent,
    BiographyListComponent,
    SingleBiographyComponent,
    //NewBiographyComponent,
    AudioListComponent,
    SingleAudioComponent,
    //NewAudioComponent,
    VideoListComponent,
    SingleVideoComponent,
    //NewVideoComponent,
    EducationListComponent,
    SingleEducationComponent,
    //NewEducationComponent,
    ExperienceListComponent,
    SingleExperienceComponent,
    //NewExperienceComponent,
    SkillListComponent,
    SingleSkillComponent,
    //NewSkillComponent,
    SafeHtmlPipe,
    VimeoUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    NgxChartsModule,
    //NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(),
    CarouselModule.forRoot()

  ],
  providers: [
    AuthService,
    UserService,
    BiographyService,
    AudioService,
    VideoService,
    EducationService,
    ExperienceService,
    SkillService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 }
