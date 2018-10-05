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
  {url:"Nikhil_&_Amisha",
  bride:"Nikhil",
  broom:"Amisha"
  },
  {url:"Arpit_&_Anjali",
  bride:"Arpit",
  broom:"Anjali"
  },
  {url:"Ajay_&_Kiki",
  bride:"Ajay",
  broom:"Kiki"
  },
  {url:"Sanjay_&_Nidhi",
  bride:"Sanjay",
  broom:"Nidhi"
  }
];
  arrayOne(n: number): any[] {
    return Array(n);
  }

}
