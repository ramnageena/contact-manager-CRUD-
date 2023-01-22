import { ContactService } from 'src/app/Service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  public loading:boolean=false;
  public  contact:IContact={} as IContact;
  public contactId:string | null=null;
  public errorMessage :string |null =null;
  public groups :IGroup[]=[] as IGroup[];


  constructor(private activedRoute:ActivatedRoute,private service:ContactService,private router:Router){}

  ngOnInit(): void {
    this.loading=true;
    this.activedRoute.paramMap.subscribe((data:any)=>{
     this.contactId=data.get("contactId");

    });

    if(this.contactId){
       this.service.getContact(this.contactId).subscribe((res:any)=>{
        this.contact=res;
         this.loading=false;
         this.service.getAllGroup().subscribe((result:any)=>{
          this.groups=result;
         })
      } , (error)=>{
        this.errorMessage=error;
        this.loading=false;
      }  )
    }


  }


  updateSubmit(){
   if(this.contactId){
    this.service.updateContact(this.contact,this.contactId).subscribe((data)=>{
      this.router.navigate(['/']).then();
    },(error)=>{
      this.errorMessage=error;
      this.router.navigate([`/contacts/edit/${this.contactId}`]).then();

    })

  }
   }

}
