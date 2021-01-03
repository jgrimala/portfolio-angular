/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { AudioService } from '../../services/audio.service';
import { Router} from '@angular/router';
import { Audio } from "../../models/audio.model";

@Component({
  selector: 'app-new-audio',
  templateUrl: './new-audio.component.html',
  styleUrls: ['./new-audio.component.css']
})
export class NewAudioComponent implements OnInit {

  audioForm: FormGroup;
fileIsUploading = false;
fileUrl: string;
fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private audioService: AudioService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.audioForm = this.formBuilder.group({

      title: ['', Validators.required],
      year: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required]
    });
  }
  onSaveAudio() {
    const title = this.audioForm.get('title').value;
    const year = this.audioForm.get('year').value;
    const description = this.audioForm.get('description').value;
    const file = this.audioForm.get('file').value;
    const newAudio = new Audio(title, year, description, file);
  
   /* if(this.fileUrl && this.fileUrl !== '') {
      newAudio.file = this.fileUrl;
    }*/
    // maintenant on a le audio et on utilise la methode addAudio du service avec l'object newAudio
    
    /*this.audioService.createNewAudio(newAudio);
    this.router.navigate(['/audio-list']);// vers la audioList
    //maintenant, doit faire la validation avec validator
  }
  
  /*onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.audioService.uploadFile(file).then((url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }
  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
}

}
*/