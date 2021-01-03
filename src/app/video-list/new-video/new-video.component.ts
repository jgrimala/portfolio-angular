/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; // FormGroup ->methode reactive
import { VideoService } from '../../services/video.service';
import { Router} from '@angular/router';
import { Video } from '../../models/video.model';
@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.css']
})
export class NewVideoComponent implements OnInit {

  videoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private videoService: VideoService,
              private router: Router) { }
// formBuilder et un outil qui permet de creer des objects de type formGroup plus facilement et est plus clair
  ngOnInit() {
    this.initForm();
  }
  initForm() {//cette methode creer et retourne un object de type form-group qui correspondra au formulaire du template
    this.videoForm = this.formBuilder.group({

      title: ["", Validators.required],
      year: ["", Validators.required],
      description: ["", Validators.required],
      vimeoEmb: ["", Validators.required],
      vimeoLink: ["", Validators.required],
      image: ["", Validators.required],
    });
  }
  onSaveVideo() {
    const formValue = this.videoForm.value;// .value contient toutes les valeurs des controls avec les validators juste en haut d'ici
    //permet de creer le nouvel utilisateur ici:
    const newVideo = new Video( // vient du modele
      formValue['title'], 
      formValue['year'],
      formValue['description'], 
      formValue['vimeoEmb'],
      formValue['vimeoLink'],
      formValue['image']
    );
    // maintenant on a le video et on utilise la methode addVideo du service avec l'object newVideo
    this.videoService.createNewVideo(newVideo);
    this.router.navigate(['/video-list']);// vers la videoList
    //maintenant, doit faire la validation avec validator
  }
}
*/