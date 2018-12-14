import { Component, OnInit } from '@angular/core';
import { LicenseService } from 'src/app/license.service';
import { License } from '../license.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  basicPlans = [];
  editMode: boolean = false;
  editingLicense: License;

  constructor(private licenseService: LicenseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.basicPlans = this.licenseService.getBasicPlanLicenses();
    this.licenseService.licensesChanged
      .subscribe((newBasicLicense) => {
        this.basicPlans = newBasicLicense;
      });
  }


  editForm(id: number) {
    this.editMode = true;
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

}
