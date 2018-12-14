import { Component, OnInit } from '@angular/core';
import { LicenseService } from 'src/app/license.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {

  advancedPlans = [];
  constructor(private licenseService: LicenseService) { }

  ngOnInit() {
    this.advancedPlans = this.licenseService.getAdvancedPlanLicenses();
    // console.log(this.advancedPlans);
  }

}
