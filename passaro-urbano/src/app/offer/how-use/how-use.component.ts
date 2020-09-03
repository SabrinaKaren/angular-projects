import { SalesService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-how-use',
  templateUrl: './how-use.component.html',
  styleUrls: ['./how-use.component.scss'],
  providers: [ SalesService ]
})
export class HowUseComponent implements OnInit {

  howUseDesc = '';

  constructor(private route: ActivatedRoute, private salesService: SalesService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((params: Params) => {
      this.salesService.getHowUseSaleById(params.id)
          .then((howUseDesc: string) => {
            this.howUseDesc = howUseDesc;
          })
    })
    
  }

}