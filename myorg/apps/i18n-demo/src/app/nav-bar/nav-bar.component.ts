import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  siteLanguage?: string = 'English';
  siteLocale?: string;

  LanguageList = [
    {code: 'en', label: 'English'},
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' }
  ];



  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.LanguageList.find(f => f.code === this.siteLocale)?.label ?? 'English';

  }

}

