// src/app/registration/registration.component.ts

import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: NgbDateStruct = null,
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country',
  ){}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrations: Array<any> = [];
  regModel: Registration;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  countries: string[] = ['US', 'UK', 'India', 'UAE'];
  registrationList: Array<any> = [];
  comments: Observable<any>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.displayRegistrations();
  }

  displayRegistrations() {
    const getRegistrations = gql`
    {
      Registrations {
        id
        firstName
        lastName
        dob
        email
        country
      }
    }
    `;
    this.apollo
      .watchQuery({
        query: getRegistrations,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map((result: any) => result.data.Registrations))
      .subscribe(data => {
        this.registrations = data;
      });
  }

  onNew() {
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave() {
    var dateVal =
    this.regModel.dob.year.toString() + "-" +
    this.regModel.dob.month.toString() + "-" +
    this.regModel.dob.day.toString();

    if(this.submitType === 'Save') {
      const saveRegistration = gql`
        mutation createRegistration(
          $firstName: String!
          $lastName: String!
          $dob: GQDate!
          $email: String!
          $password: String!
          $country: String!
        ) {
          createRegistration(
            firstName: $firstName
            lastName: $lastName
            dob: $dob
            email: $email
            password: $password
            country: $country
          ) {
            id
            dob
          }
        }
      `;
      this.apollo
        .mutate({
          mutation: saveRegistration,
          variables: {
            firstName: this.regModel.firstName,
            lastName: this.regModel.lastName,
            dob: new Date(dateVal),
            email: this.regModel.email,
            password: this.regModel.password,
            country: this.regModel.country
          }
        })
        .subscribe(
          ({ data }) => {
            this.displayRegistrations();
          },
          error => {
            console.log("there was an error sending the query", error);
          }
        );

    } else {
      const updateRegistration = gql`
        mutation updateRegistration(
          $id: ID!
          $firstName: String!
          $lastName: String!
          $dob: GQDate!
          $email: String!
          $password: String!
          $country: String!
        ) {
          updateRegistration(
            id: $id
            firstName: $firstName
            lastName: $lastName
            dob: $dob
            email: $email
            password: $password
            country: $country
          ) {
            id
            country
          }
        }
      `;
      this.apollo
        .mutate({
          mutation: updateRegistration,
          variables: {
            id: this.selectedRow + 1,
            firstName: this.regModel.firstName,
            lastname: this.regModel.lastName,
            dob: new Date(dateVal),
            email: this.regModel.email,
            password: this.regModel.password,
            country: this.regModel.country
          }
        })
        .subscribe(
          ({ data }) => {
            console.log("got editdata", data);
            this.displayRegistrations();
          },
          error => {
            console.log("there was an error sending the query", error);
          }
        );
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    const dob = new Date(this.registrations[this.selectedRow].dob);

    this.regModel.dob = {
      day: dob.getDate(),
      month: dob.getMonth() + 1,
      year: dob.getFullYear()
    }

    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number) {
    const deleteRegistration = gql`
      mutation deleteRegistration($id: ID!) {
        deleteRegistration(id: $id) {
          id
        }
      }
    `;

    this.apollo
      .mutate({
        mutation: deleteRegistration,
        variables: {
          id: index + 1
        }
      })
      .subscribe(
        ({ data }) => {
          console.log("got editdata", data);
          this.displayRegistrations();
        },
        error => {
          console.log("there was an error sending the query", error);
        }
      );
  }

  onCancel() {
    this.showNew = false;
  }

  onChangeCountry(country: string) {
    this.regModel.country = country;
  }

}


