import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode: number=1;
  contact: Contact;
  idContact: number;

  constructor(public activatedRoute: ActivatedRoute,
              public  contactService: ContactsService,
              public router: Router) {
    this.idContact=activatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact).subscribe(data=> {
      this.contact = data;
    }, err => {
      console.log(err);
    });
  }

  updateContact () {
    this.contactService.updateContact(this.contact).subscribe(data => {
      alert("mise a jour effectuée");
      this.router.navigate(["contacts"]);
    }, err => {
      console.log(err);
      alert("Probleme");
    });
  }



}
