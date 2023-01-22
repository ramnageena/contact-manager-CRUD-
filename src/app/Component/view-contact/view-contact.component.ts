import { IGroup } from './../../models/IGroup';
import { IContact } from './../../models/IContact';
import { ContactService } from 'src/app/Service/contact.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {

  public   loading:boolean=false
     public contactId:string |null =null;
     public  contact:IContact={} as IContact;
     public errorMessage :string |null =null;
     public group :IGroup={} as IGroup;



  constructor( private activedRoute:ActivatedRoute, private service:ContactService){}

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((data)=>{
      this.contactId=data.get('contactId');
    });

    if(this.contactId){
      this.loading=true;
      this.service.getContact(this.contactId).subscribe((result)=>{
        this.contact=result;
        this.loading=false;

        this.service.getGroup(result).subscribe((res:any)=>{
          this.group=res;

        })
      },(error)=>{
        this.errorMessage=error;
        this.loading=false;
      })
    }

  }

public isNotEmpty(){
  return Object.keys(this.contact).length>0 && Object.keys(this.group).length>0;
}

}
