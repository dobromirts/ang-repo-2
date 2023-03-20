import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
