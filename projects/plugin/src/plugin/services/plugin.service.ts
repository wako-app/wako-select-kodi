import { Injectable } from '@angular/core';
import { PluginBaseService } from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';
import { logData } from './tools';
import { KodiAppService } from '@wako-app/mobile-sdk';
import { defer } from 'rxjs';
import { AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { TestHostService } from './kodi.host.service';


@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService, protected kodi: TestHostService, protected sheet: ActionSheetController) {
    super();
  }

  async initialize() {
    logData('plugin initialized');

    const oldCheckAndConnectToCurrentHost = KodiAppService.checkAndConnectToCurrentHost;
    KodiAppService.checkAndConnectToCurrentHost = () => {
      const test = () => {
        const prom = new Promise<boolean>(async (resolve, reject) => {
          const hosts = await this.kodi.getHosts();
          const p = await this.sheet.create({
            header: 'Kodi Host',
            buttons: hosts.map((host) => ({
              text: host.name,
              handler: async () => {
                this.kodi.setCurrentHost(host);
                KodiAppService.currentHost = host;
                await KodiAppService.connect();
                resolve(true)
                return true;
              }
            }))
          });

          await p.present();
        });


        return prom
      }

      return defer(async () => {
        await test();
        return oldCheckAndConnectToCurrentHost.apply(this)
      });
    }
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }
}
