import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private acitvatedRoute:ActivatedRoute) { }
name:string;
heading:string;
  ngOnInit() {
   this.name= this.acitvatedRoute.snapshot.paramMap.get('id');
   console.log(this.name);
   this.heading=this.name.split("_").join(" ");
  }

}
