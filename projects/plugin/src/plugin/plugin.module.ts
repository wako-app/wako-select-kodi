import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';

import { BrowserService, PluginBaseModule, ToastService } from '@wako-app/mobile-sdk';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

const components = [];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [PluginService, BrowserService, ToastService] // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static pluginService = PluginService;
}
