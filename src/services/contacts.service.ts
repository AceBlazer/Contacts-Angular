import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/internal/operators";
import {Contact} from "../models/model.contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(public http: Http) { }

  getContacts(mc: string, page: number, size: number) {
    return this.http.get("http://localhost:8087/chercherContacts?mc="+mc+"&size="+size+"&page="+page).pipe(map(resp=>resp.json()));
  }

  getContact(id: number) {
    return this.http.get("http://localhost:8087/contacts/"+id).pipe(map(resp=>resp.json()));
  }

  saveContact(contact: Contact) {
    return this.http.post("http://localhost:8087/contacts/save",contact).pipe(map(resp=>resp.json()));
  }

  updateContact(contact: Contact) {
    return this.http.put("http://localhost:8087/contacts/"+contact.id,contact).pipe(map(resp=>resp.json()));
  }

  deleteContact(id: number) {
    return this.http.delete("http://localhost:8087/contacts/"+id).pipe(map(resp=>resp.json()));
  }


}
