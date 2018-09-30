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
  {url:"Nikhil_weds_Amisha",
  bride:"Nikhil",
  broom:"Amisha"
  },
  {url:"Arpit_weds_Anjali",
  bride:"Arpit",
  broom:"Anjali"
  },
  {url:"Ajay_weds_Kiki",
  bride:"Ajay",
  broom:"Kiki"
  },
  {url:"Sanjay_weds_Nidhi",
  bride:"Sanjay",
  broom:"Nidhi"
  }
];
  arrayOne(n: number): any[] {
    return Array(n);
  }

}
