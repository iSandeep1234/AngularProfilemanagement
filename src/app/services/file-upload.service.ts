import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileToUpload } from '../carrier-objective/carrier-objective.component';
//================================================Newly added================================//
const API_URL = "http://localhost:5000/api/FileUpload/";
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};
//================================================Newly end================================//

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

   // API url
   baseApiUrl = "https://file.io"
    
   constructor(private http:HttpClient) { }
   
   // Returns an observable
   upload(file):Observable<any> {
   
       // Create form data
       const formData = new FormData(); 
         
       // Store form name as "file" with file data
       formData.append("file", file, file.name);
         
       // Make http post request over api
       // with formData as req
       return this.http.post(this.baseApiUrl, formData)
   }

   //=====================================================New file upload======================================//
   uploadFile(theFile: FileToUpload) : Observable<any> {
    return this.http.post<FileToUpload>(API_URL, theFile, httpOptions);
}


}
