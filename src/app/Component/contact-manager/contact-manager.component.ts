import { IContact } from './../../models/IContact';
import { Component } from '@angular/core';
import { ContactService } from 'src/app/Service/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {
    public loading:boolean=false;
    public contacts:IContact[]=[];
    public errorMessage :string |null =null;


    constructor(private service:ContactService){}


    ngOnInit(): void {
      this.getAllContactfromSever()
    }


   // for showing all data from sever
   getAllContactfromSever(){
    this.loading=true;
    this.service.getAllContacts().subscribe((data)=>{

      this.contacts=data;
      this.loading=false;

    },(error)=>{
      this.errorMessage=error;
      this.loading=false;
    })
   }

    deletecontact(contactId:any){
  if(contactId){
  this.service.deleteContact(contactId).subscribe((data)=>{
    this.getAllContactfromSever();
  },(error)=>{
    this.errorMessage=error;
    this.loading=false;
  })
}
    }
}
