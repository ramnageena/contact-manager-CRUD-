import { ContactService } from 'src/app/Service/contact.service';
import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  public loading:boolean=false;
  public contact:IContact={} as IContact;
  public errorMessage :string |null =null;
  public groups :IGroup[]=[] as IGroup[];

  constructor(private service:ContactService, private router:Router){}

  ngOnInit(): void {
    this.service.getAllGroup().subscribe((data:any)=>{
      this.groups=data;
    }, (error)=>{
      //  this.loading=false;
       this.errorMessage=error;
    })
  }

   createSubmit(){
    this.service.createContact(this.contact).subscribe((data)=>{
      this.router.navigate(['/']).then();
    },(error)=>{
      this.errorMessage=error;
      this.router.navigate(['/contacts/add']).then();

    })
   }

}


