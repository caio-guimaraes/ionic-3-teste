import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public nome_usuario:string = "Caio Guimarães";

  public objeto_feed = {
    titulo:"Caio Guimarães",
    data:"February 23, 1996",
    descricao:"Treinando para desenvolver um sistema de saúde!!!! Me ajuda ai! E os idosos também!",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  public soma(num1:number, num2:number):void{
    alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const resposta = (data as any);
        const objeto_retorno = JSON.parse(resposta._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
