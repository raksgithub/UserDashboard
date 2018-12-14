import { Component, OnInit } from '@angular/core';
import { LicenseService } from 'src/app/license.service';
import { Router, ActivatedRoute } from '@angular/router';
import { License } from '../license.model';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {

  standardPlans = [];
  editMode: boolean = false;

  constructor(private licenseService: LicenseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.standardPlans = this.licenseService.getStandardPlanLicenses();
    this.licenseService.licensesChanged
      .subscribe((newStandardLiceses: License[]) => {
        this.standardPlans = newStandardLiceses;
      });
  }

  editForm(id: number) {
    this.editMode = true;
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

}
