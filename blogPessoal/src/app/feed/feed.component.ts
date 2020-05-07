import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  // GET
  listaPostagens: Postagem []

  // POST
  postagemData: Postagem = new Postagem()


  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.findallPostagens()
  }

  findallPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.postagemService.postPostagem(this.postagemData).subscribe((resp: Postagem)=>{
      this.postagemData = resp
      location.assign('/feed')
    })
  }

}
