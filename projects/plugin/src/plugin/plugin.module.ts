import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';

import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule } from '@wako-app/mobile-sdk';

const components = [];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [PluginService], // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
}
