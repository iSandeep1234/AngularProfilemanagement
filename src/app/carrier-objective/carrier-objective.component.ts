import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticServiceService } from '../services/basic-authentic-service.service';
import { FileUploadService } from '../services/file-upload.service';
import { HardocedAuthenticationService } from '../services/hardoced-authentication.service';
import { User } from '../user';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
//file upload class
export class FileToUpload {
  fileName: string = "";
  fileSize: number = 0;
  fileType: string = "";
  lastModifiedTime: number = 0;
  lastModifiedDate: Date = null;
  fileAsBase64: string = "";
}
const MAX_SIZE: number = 1048576;
@Component({
  selector: 'app-carrier-objective',
  templateUrl: './carrier-objective.component.html',
  styleUrls: ['./carrier-objective.component.css']
})
export class CarrierObjectiveComponent implements OnInit {
  userName : string;
  userId : number;
  userDetail : User;
  //user : User;
  message;
  uploadform: FormGroup;
  formData: FormData = new FormData();
  file : File;
  isLoggedIn = false;

  constructor(private basicAuthenticationService : BasicAuthenticServiceService,
              private route : ActivatedRoute,
              private router : Router,
              private uploadService: FileUploadService,
              private hardCodeServcie : HardocedAuthenticationService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = this.hardCodeServcie.isUserLoggedIn();
    this.userName = this.route.snapshot.params['userName'];
    this.userId = this.route.snapshot.params['userId'];
    this.retrievingDetailsById();
    //for undefined error in the console 
    this.userDetail = new User(1,"Avi",new Date(),this.file,"","","","","","");
  }

  //retieval of logged in detail in 2nd page carrier objective
  retrievingDetailsById(){
    this.basicAuthenticationService.getDetails(this.userName,this.userId).subscribe(
      response => {
        this.userDetail = response;
        //sessionStorage.setItem("UserId",this.userDetails.userId);
        //this.router.navigate(['carrierObjective', this.userName, sessionStorage.getItem('UserId')]);
        //sessionStorage.setItem("UserId",this.userDetails.userId);
        //this.invalidLogin = false;
      },
      error => {
        console.log(error);
        //this.invalidLogin = true;
      }
    );
  }

//profile pic update
  updateProfilePic(){
    const profilePic = new FormData();
    //formData.append("userName", this.userDetail.userName);
    //formData.append("file", this.userDetail.profilePic);
    console.log(this.theFile);
    profilePic.append("profilePic", this.theFile);
    this.uploadFile();
    console.log(profilePic);
    this.basicAuthenticationService.updateUserProfilePic(this.userId,profilePic).subscribe(
      response => {
        console.log(response);
        this.message = "Upload Succesfull!"
      }
    )
  }

  //details update
  updateDetails(){
    const profilePic = new FormData();
    //formData.append("userName", this.userDetail.userName);
    //formData.append("file", this.userDetail.profilePic);
    console.log(this.theFile);
    profilePic.append("profilePic", this.theFile);
    this.uploadFile();
    console.log(profilePic);
    this.basicAuthenticationService.updateUser(this.userId,this.userDetail).subscribe(
      response => {
        console.log(response);
        this.message = "Updated Succesfull!"
        this.router.navigate(['login']);
      }
    )
  }

  //================================================File Upload=========================================//
  theFiles: any[] = [];
  theFile: any = null;
  messages: string[] = [];
  selectedFile : File;
  onFileChange(event){ 
    //this.selectedFile = event.target.files[0];
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < MAX_SIZE) {
            // Set theFile property
            this.theFile = event.target.files[0];
        }
        else {
            // Display error message
            this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
        }
    }
  }

  uploadFile(){
    console.log(this.theFile.size);
    for (let index = 0; index < this.theFiles.length; index++) {
      this.readAndUploadFile(this.theFiles[index]);
    }
  }

  private readAndUploadFile(theFile: any) {
    console.log("in render")
    let file = new FileToUpload();
    
    // Set File Information
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = theFile.lastModifiedDate;
    console.log(theFile.name+"data"+theFile);
    //this.formData.append('file', theFile, theFile.name);
    //this.formData.append('questionText', questionText);
    
    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();
    
    // Setup onload event for reader
    reader.onload = () => {
        // Store base64 encoded representation of file
        file.fileAsBase64 = reader.result.toString();
        
        // POST to server
        this.uploadService.uploadFile(file).subscribe(resp => { 
            this.messages.push("Upload complete"); });
    }
    
    // Read the file
    reader.readAsDataURL(theFile);
}
//=============================================================testing========================================//
generatePdf(){
  // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  
  const documentDefinition = this.getDocumentDefinition();
  const documentDefinition1 = this.getDocumentDefinition1();

  pdfMake.createPdf(documentDefinition).open();
 }

 getDocumentDefinition() {
  sessionStorage.setItem('resume', JSON.stringify(this.userDetail));
  return {
    content: [
      {
        text: 'RESUME',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        columns: [
          [{
            text: 'Name :' +this.userDetail.userName,
            
          },
          {
            text: 'Date Of Birth : ' + this.userDetail.dateOfBirth,
          },
          {
             text: 'Carrierobjective : ' + this.userDetail.carrierObjective,
           },
           {
             text: 'Pesonal Details : ' + this.userDetail.personalDetails,
           },
           
           {
            text: 'Project Detils : ' + this.userDetail.projectDetails,
          },

          
          {
            text: 'Technical Skill : ' + this.userDetail.technicalSkill,
          },

           
          {
            text: 'Education Details : ' + this.userDetail.educationDetails,
          },


          {
            text: 'Experience Details : ' + this.userDetail.experiencedDetails,
          },

          //\ {
          //   text: 'GitHub: ' + this.resume.socialProfile,
          //   link: this.resume.socialProfile,
          //   color: 'blue',
          // }
          ],
        //],this.getDocumentDefinition1(),this.getDocumentDefinition2
          
          
          // [
          //   this.getProfilePicObject()
          // ]
        ]
      },
    ]      
  }
}







getDocumentDefinition1() {
  // ...
  return {
    
      //...
      
        text: 'Skills',
        style: 'header',
      
      
        columns : [
          {
             
              text: 'technicalSkill : ' + this.userDetail.technicalSkill,

          },
          
        ],
      

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        }
      }
  };
}

getDocumentDefinition2() {
  // ...
  return {
    
      //...
      
        text: 'Skills',
        style: 'header',
      
      
        columns : [
          {
             
              text: 'technicalSkill : ' + this.userDetail.personalDetails,

          },
          
        ],
      

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        }
      }
  };
}



getProfilePicObject() {
    if (this.userDetail.profilePic) {
      return {
        //image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }


}


