import { Injectable } from '@angular/core';
import { KodiAppService, KodiHostStructure, PluginBaseService } from '@wako-app/mobile-sdk';
import { logData } from './tools';
import { from, Observable, of } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected sheet: ActionSheetController) {
    super();
  }

  async initialize() {
    logData('plugin initialized');

    const oldCheckAndConnectToCurrentHost = KodiAppService.checkAndConnectToCurrentHost;

    KodiAppService.checkAndConnectToCurrentHost = () => {
      return new Observable<KodiHostStructure>(observer => {
        KodiAppService.getHosts().then(hosts => {
          if (hosts.length === 0) {
            observer.next(null);
            observer.complete();
            return;
          }

          if (hosts.length === 1) {
            observer.next(hosts[0]);
            observer.complete();
            return;
          }

          const buttons = [];
          hosts.forEach(host => {
            buttons.push({
              text: host.name,
              handler: () => {
                observer.next(host);
                observer.complete();
              }
            });
          });

          buttons.push({
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          });

          this.sheet
            .create({
              header: 'Select your host',
              buttons
            })
            .then(sheet => {
              sheet.present();
            });
        });
      }).pipe(
        switchMap(host => {
          if (host) {
            KodiAppService.disconnect();
            return from(KodiAppService.setCurrentHost(host));
          }
          return of(null);
        }),
        switchMap(() => {
          return oldCheckAndConnectToCurrentHost.apply(KodiAppService) as Observable<boolean>;
        })
      );
    };
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
  }

  customAction(action: string, data: any) {
    throw new Error('Method not implemented.');
  }
}
