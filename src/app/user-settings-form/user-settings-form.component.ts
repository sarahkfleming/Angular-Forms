import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  // Use the spread operator to make a copy of this flat object before displaying it to the user to protect the original data
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(result => console.log('success: ', result),
    error => console.log('error: ', error));
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);

  }

}
