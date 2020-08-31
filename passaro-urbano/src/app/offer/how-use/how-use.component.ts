import { SalesService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    this.salesService.getHowUseSaleById(this.route.parent.snapshot.params['id'])
        .then((howUseDesc: string) => {
          this.howUseDesc = howUseDesc;
        })
  }

}
