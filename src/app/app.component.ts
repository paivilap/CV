import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    //Changed titles and folders and removed icons. PäiviLappalainen 1900653
    {
      title: 'My CV',
      url: '/folder/My CV',
    },
    {
      title: 'Profile',
      url: '/folder/Profile',
    },
    {
      title: 'Technical skills ',
      url: '/folder/Technical skills',
    },
    {
      title: 'Soft skills',
      url: '/folder/Soft skills',
    },
    {
      title: 'Personal projects',
      url: '/folder/Personal projects',
    },
    {
      title: 'Team projects',
      url: '/folder/Team projects',
    },
    {
      title: 'Extra curriculum activities',
      url: '/folder/Extra',
    },
    {
      title: 'Contact',
      url: '/folder/Contact',
    }
  ];
 //Removed labels. Päivi Lappalainen 1900653

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
