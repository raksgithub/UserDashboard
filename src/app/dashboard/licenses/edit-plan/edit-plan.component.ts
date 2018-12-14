import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { License } from '../license.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LicenseService } from 'src/app/license.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

  editMode: boolean = false;
  licenseForm: FormGroup;
  editingLicense: License
  editingPlan: string;
  editingLicenseId: number;

  constructor(
      private fb: FormBuilder, 
      private route: ActivatedRoute, 
      private router: Router, 
      private licenseService: LicenseService
    ) { }

  ngOnInit() {
    this.initLicenseForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.editingLicenseId = +params.get('id');
      this.editingPlan = params.get('type');
      this.editingLicense = this.licenseService.getLicenseUsingId(+params.get('id'));
    });
  }

  private initLicenseForm() {
    this.licenseForm = this.fb.group({
      pricing: ['', [], []],
      capacity: ['', [], []],
      billibilityPeriod: ['', [], []]
    });
  }

  get pricing() {
    return this.licenseForm.get('pricing') as FormControl;
  }

  get capacity() {
    return this.licenseForm.get('capacity') as FormControl;
  }

  get billibilityPeriod() {
    return this.licenseForm.get('billibilityPeriod') as FormControl;
  }

  onSubmitForm() {
    this.editingLicense.pricing = this.pricing.value;
    this.editingLicense.capacity = this.capacity.value;
    this.editingLicense.billabilityPeriod = this.billibilityPeriod.value;
    this.licenseService.updateLicense(this.editingLicenseId, { type: this.editingPlan, pricing: this.editingLicense.pricing, capacity: this.editingLicense.capacity, billabilityPeriod: this.editingLicense.billabilityPeriod });
    this.router.navigate(['../../'], { relativeTo: this.route });
    this.editMode = false;
  }

  onClickBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
