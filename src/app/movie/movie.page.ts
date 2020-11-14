import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Movie } from '@wako-app/mobile-sdk';
import { PluginLoaderService } from '../services/plugin-loader.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage implements OnInit {
  @ViewChild('movieRef', { read: ViewContainerRef, static: true })
  movieVCRef: ViewContainerRef;

  data: { movie: Movie };

  constructor(private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.data = JSON.parse(
      `{"movie":{"type":"movie","ids":{"trakt":193963,"slug":"captain-marvel-2019","imdb":"tt4154664","tmdb":299537},"title":"Captain Marvel","overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w300/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdrop":"https://image.tmdb.org/t/p/w500/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg"},"year":2019,"certification":"PG-13","runtime":124,"genres":["science-fiction","action","adventure","superhero"],"alternativeTitles":{"ae":"Captain Marvel","sa":"كابتن مارفل","by":"Капітан Марвел","bg":"Капитан Марвел","cn":"惊奇队长","cz":"Captain Marvel","dk":"Captain Marvel","de":"Captain Marvel","gr":"Captain Marvel","us":"Captain Marvel","es":"Capitana Marvel","mx":"Capitana Marvel","ee":"Kapten Marvel","ir":"کاپیتان مارول","fi":"Captain Marvel","ca":"Capitaine Marvel","fr":"Captain Marvel","il":"קפטן מארוול","in":"Captain Marvel","hr":"Kapetanica Marvel","hu":"Marvel Kapitány","id":"Captain Marvel","it":"Captain Marvel","jp":"キャプテン・マーベル","ge":"კაპიტანი მარველი","kr":"캡틴 마블","lt":"Kapitonė Marvel","lv":"Kapteine Mārvela","nl":"Captain Marvel","no":"Captain Marvel","pl":"Kapitan Marvel","br":"Capitã Marvel","pt":"Captain Marvel (Capitão Marvel)","ro":"Căpitanul Marvel","ru":"Капитан Марвел","sk":"Captain Marvel","si":"Kapitan Marvel","rs":"Капетан Марвел","se":"Captain Marvel","th":"กัปตัน มาร์เวล","tr":"Kaptan Marvel","ua":"Капітан Марвел","uz":"Kapitan Marvel","vn":"Đại Úy Marvel","hk":"Marvel隊長","tw":"驚奇隊長"},"originalTitle":"Captain Marvel","ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt4154664","rating":"6.9","votes":424968},"trakt":{"name":"Trakt","url":"https://trakt.tv/movies/193963","rating":7.5,"votes":24464}},"rating":7.5,"votes":24464,"status":"Released","released":"2019-03-08","relatedImdbIds":["tt5095030","tt0458339","tt1228705","tt2250912","tt0478970","tt1300854","tt0800369","tt6320628","tt1981115","tt3501632","tt2395427","tt1843866"],"trailer":"http://youtube.com/watch?v=Z1BCujX3pw8","language":"en","tagline":"Higher. Further. Faster.","images_url":{"poster":"https://image.tmdb.org/t/p/w300/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdrop":"https://image.tmdb.org/t/p/w500/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/nBS1vONGYrsL2C68C2oDQ3eKJR1.jpg"},"imdbId":"tt4154664","traktId":193963,"tmdbId":299537}}`
    );

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('movies', this.movieVCRef, this.data);
  }
}
