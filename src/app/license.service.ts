import { Injectable } from '@angular/core';
import { License, LICENSES } from './dashboard/licenses/license.model'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  existingLicenses: License[] = LICENSES;

  licensesChanged = new Subject<License[]>();

  constructor() { }

  getLicenses(): License[] {
    return this.existingLicenses.slice();
  }

  getLicenseUsingId(id: number) {
    return this.getLicenses()[id];
  }

  updateLicense(id: number, newLicense: License) {
    this.existingLicenses[id] = newLicense;
    console.log(newLicense);
    if(newLicense.type === 'basic') {
      this.licensesChanged.next(this.getBasicPlanLicenses());
      console.log('Basic Plan was modified.');
    } else if(newLicense.type === 'standard') {
      this.licensesChanged.next(this.getStandardPlanLicenses());
      console.log('Standard Plan was modified.');
    } else if(newLicense.type === 'advanced'){
      this.licensesChanged.next(this.getAdvancedPlanLicenses());
      console.log('Advanced Plan was modified.');
    }
  }

  upgradeExistingLicense(id: number, newLicense: License) {
    this.existingLicenses[id] = newLicense;
  }

  downgradeExistingLicense(id: number, newLicense: License) {
    this.existingLicenses[id] = newLicense;
  }

  getBasicPlanLicenses() {
    return this.existingLicenses.filter(license => license.type === 'basic');
  }

  getStandardPlanLicenses() {
    return this.existingLicenses.filter(license => license.type === 'standard');
  }

  getAdvancedPlanLicenses() {
    return this.existingLicenses.filter(license => license.type === 'advanced');
  }
}
