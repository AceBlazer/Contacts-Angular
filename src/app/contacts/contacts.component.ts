import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../models/model.contact";

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts: any;
  motCle: string="";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;

  constructor(public http: Http,
              public contactService: ContactsService,
              public router: Router) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactService.getContacts(this.motCle,this.currentPage,this.size).subscribe(data=> {
      this.pageContacts=data;
      this.pages=new Array(data.totalPages);
    },err=> {
      console.log(err);
    });
  }

  chercher() {
    this.doSearch();
  }

  gotoPage(i: number) {
      this.currentPage=i;
      this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(["edit-contact",id]);
  }

  onDelete(c: Contact) {
    let confirm= window.confirm("êtes vous sûr?");
    if (confirm==true) {
      this.contactService.deleteContact(c.id).subscribe(data=> {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c),1
        );

      }, err => {
        console.log(err);
      });
    }
  }

}
