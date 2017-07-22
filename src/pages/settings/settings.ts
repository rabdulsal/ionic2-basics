import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Toggle } from 'ionic-angular';
import { BackgroundToggleService } from "../../services/background_toggle";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  toggleState: boolean;

  constructor (private toggleService: BackgroundToggleService) {

  }

  onToggle(toggle: Toggle) {
    this.toggleService.toggleAltBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.toggleService.isAltBackground();
  }

}
