export class BackgroundToggleService {
  private altBkgrdToggled = false;

  toggleAltBackground(toggled: boolean) {
    this.altBkgrdToggled = toggled;
  }

  isAltBackground() {
    return this.altBkgrdToggled;
  }
}
