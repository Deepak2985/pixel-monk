import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
weddingList=[
  {url:"Anshika_weds_Suraj",
  bride:"Anshika",
  broom:"Suraj"
  },
  {url:"Amitra_weds_Sankalp",
  bride:"Amitra",
  broom:"Sankalp"
  },
  {url:"Sanjay_weds_Sachita",
  bride:"Sanjay",
  broom:"Sachita"
  },
  {url:"Nitin_weds_Angela",
  bride:"Nitin",
  broom:"Angela"
  },
  {url:"Anirudh_weds_Priyanka",
  bride:"Anirudh",
  broom:"Priyanka"
  },{url:"Tushar_weds_Nupur",
  bride:"Tushar",
  broom:"Nupur"
  }
];
  arrayOne(n: number): any[] {
    return Array(n);
  }

}
