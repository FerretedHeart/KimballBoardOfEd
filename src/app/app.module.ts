import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NewsPr927Component } from './news/news-pr927.component';
import { NewsCovidComponent } from './news/news-covid.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    WelcomeComponent,
    FooterComponent,
    NewsComponent,
    NewsPr927Component,
    NewsCovidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'campaign', component: CampaignComponent},
      {path: 'news', component: NewsComponent},
      {path: 'news-pr927', component: NewsPr927Component},
      {path: 'news-covid', component: NewsCovidComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
