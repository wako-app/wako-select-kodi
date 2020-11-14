import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loader.service';
import { Episode, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', { read: ViewContainerRef, static: true })
  episodeVCRef: ViewContainerRef;

  @ViewChild('episodeItemOptionRef', { read: ViewContainerRef, static: true })
  episodeItemOptionVCRef: ViewContainerRef;

  @ViewChild('showRef', { read: ViewContainerRef, static: true })
  showVCRef: ViewContainerRef;

  data: { show: Show; episode: Episode };

  constructor(private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.data = JSON.parse(
      `{"show":{"type":"show","ids":{"trakt":138163,"slug":"the-witcher-2019","tvdb":"362696","imdb":"tt5180504","tmdb":71912,"tvrage":null},"title":"The Witcher","overview":"Le sorcier Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w300/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdrop":"https://image.tmdb.org/t/p/w500/s56eyXy8rADp5DpZknfe2HXq4u4.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg"},"firstAired":"2019-12-20T08:00:00.000Z","year":2019,"certification":"TV-MA","runtime":60,"genres":["drama","action","adventure","fantasy","science-fiction"],"alternativeTitles":{"sa":"الساحر","bg":"Вещерът","cz":"Zaklínač","dk":"The Witcher","de":"The Witcher","gr":"Ο Γητευτής","us":"The Witcher","es":"The Witcher","mx":"The Witcher","fi":"The Witcher – Noituri","ca":"The Witcher","fr":"The Witcher","il":"המכשף","hu":"Vaják","it":"The Witcher","jp":"ウィッチャー","kr":"위쳐","lt":"Raganius","nl":"The Witcher","pl":"Wiedźmin","br":"The Witcher","pt":"The Witcher","ro":"The Witcher","ru":"Ведьмак","sk":"Zaklínač","rs":"Вештац","se":"The Witcher","th":"เดอะ วิทเชอร์ นักล่าจอมอสูร","tr":"The Witcher","ua":"Відьмак","vn":"Thợ Săn Quái Vật","cn":"猎魔人","hk":"獵魔士","tw":"獵魔士"},"originalTitle":"The Witcher","ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt5180504","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163","rating":8.2,"votes":7226}},"rating":8.2,"votes":7226,"status":"returning series","totalEpisodesWatched":0,"trailer":null,"language":"us","network":"Netflix","airedEpisodes":8,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdrop":"https://image.tmdb.org/t/p/w500/s56eyXy8rADp5DpZknfe2HXq4u4.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg"},"imdbId":"tt5180504","traktId":138163,"tmdbId":71912},"episode":{"type":"episode","title":"Le Début de la fin","overview":"Une population hostile et un mage rusé accueillent Geralt dans la ville de Blaviken. Ciri voit son royaume en proie à la panique lorsque Nilfgaard s'en prend à Cintra.","rating":7.8,"votes":4610,"imagesUrl":{"poster":"https://image.tmdb.org/t/p/w300/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdrop":"https://image.tmdb.org/t/p/w500/kvnbgfKMSOeq08gWeL7FrzT0mah.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/kvnbgfKMSOeq08gWeL7FrzT0mah.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg"},"ids":{"trakt":3196093,"tvdb":"7428555","imdb":"tt8071662","tmdb":1927355,"tvrage":null},"ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt8071662","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163/seasons/1/episodes/1","rating":7.8,"votes":4610}},"seasonNumber":1,"number":1,"absoluteNumber":1,"code":"S01E01","firstAired":"2019-12-20T08:00:00.000Z","runtime":60,"watched":false,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg","backdrop":"https://image.tmdb.org/t/p/w500/kvnbgfKMSOeq08gWeL7FrzT0mah.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/kvnbgfKMSOeq08gWeL7FrzT0mah.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg"},"imdbId":"tt8071662","trakt":3196093,"tmdbId":1927355,"traktSeasonNumber":1,"traktNumber":1}}`
    );

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);

    this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);

    this.pluginLoader.createComponent('shows', this.showVCRef, this.data);
  }
}
