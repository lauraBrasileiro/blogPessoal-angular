import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { postagem } from '../model/postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: postagem []

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.findallPostagens()
  }

  findallPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: postagem[])=>{
      this.listaPostagens = resp
    })
  }

}
