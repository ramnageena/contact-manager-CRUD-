import { IGroup } from './../models/IGroup';
import { IContact } from './../models/IContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    //serverUrl:string=`http://localhost:9000 `;

    baseusrl='http://localhost:9000/contacts';
    groupurl="http://localhost:9000/groups";

  constructor(private httpClient:HttpClient) { }

     //GET ALL CONTACTS
      getAllContacts():Observable<IContact[]>{
        return this.httpClient.get<IContact[]>(`${this.baseusrl}`).pipe(catchError(this.handleError));
      }

     //get a particular contact
     getContact(contactId:string):Observable<IContact>{
      return this.httpClient.get<IContact>(`${this.baseusrl}/${contactId}`).pipe(catchError(this.handleError));
     }

     // CREATE A CONTACTS
    createContact(contact:IContact):Observable<IContact>{

    return this.httpClient.post<IContact>(`${this.baseusrl}`,contact).pipe(catchError(this.handleError));
     }

     //UPDATE FOR CONTACTS
     updateContact(contact:IContact,contactId:string):Observable<IContact>{
      return this.httpClient.put<IContact>(`${this.baseusrl}/${contactId}`,contact).pipe(catchError(this.handleError));
       }

    //delete Contact
    deleteContact(contactId:string):Observable<{}>{

    return this.httpClient.delete<{}>(`${this.baseusrl}/${contactId}`).pipe(catchError(this.handleError));
     }

    //Get all Group
     getAllGroup():Observable<IGroup[]>{
      return this.httpClient.get<IGroup[]>(`${this.groupurl}`).pipe(catchError(this.handleError));
    }

        // Get single Group
      getGroup(contactId:IContact):Observable<IGroup>{
      return this.httpClient.get<IGroup>(`${this.groupurl}/${contactId.groupId}`).pipe(catchError(this.handleError));
 }



 //Error Handler

  public handleError(error: HttpErrorResponse) {

    let errorMessage:string ='';
    if (error.error instanceof ErrorEvent){
    // client Error
     errorMessage = `Error: ${error.error.message}`
    }
    else{
    // server error
    errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);

     }





     // Get single Group
    //  getGroup(contact:IContact):Observable<IContact>{
    //   let dataURL=`${this.serverUrl}/groups/${contact.groupId}`;
    //   return this.httpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));

    //  }



 // Get single Contact
    //   getContact(contactId:string):Observable<IContact>{
    //    let dataURL=`${this.serverUrl}/contacts/${contactId}`;
    //   return this.httpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));

    //  }

 //create a contact

    //  createContact(contact:IContact):Observable<IContact>{
    //   let dataUrl=`${this.serverUrl}/contacts`;
    // return this.httpClient.post<IContact>(dataUrl,contact).pipe(catchError(this.handleError));
    //  }




     //update Contact

    //  updateContact(contact:IContact,contactId:string):Observable<IContact>{
    //   let dataUrl=`${this.serverUrl}/contacts${contactId}`;
    // return this.httpClient.put<IContact>(dataUrl,contact).pipe(catchError(this.handleError));
    //  }





//delete Contact
    //   deleteContact(contactId:string):Observable<{}>{
    //   let dataUrl=`${this.serverUrl}/contacts${contactId}`;
    // return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
    //  }




    //Get all Group
    // getAllGroup():Observable<IGroup[]>{
    //   let dataURL=`${this.serverUrl}/groups/`;
    //   return this.httpClient.get<IGroup[]>(dataURL).pipe(catchError(this.handleError));

    //  }



   //Get  all Contacts Method()

  // getAllContacts():Observable<IContact[]>{
  //   let dataUrl=`${this.serverUrl}/contacts`;
  //   return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));
  // }































}



