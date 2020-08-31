import { SalesService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.scss'],
  providers: [ SalesService ]
})
export class WhereIsComponent implements OnInit {

  whereIs = '';

  constructor(private route: ActivatedRoute, private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getWhereIsSaleById(this.route.parent.snapshot.params['id'])
        .then((whereIs: string) => {
          this.whereIs = whereIs;
        })
  }

}
