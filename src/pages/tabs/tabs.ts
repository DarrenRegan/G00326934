import { Component } from '@angular/core';

import { WeatherPage } from '../weather/weather';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WeatherPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
