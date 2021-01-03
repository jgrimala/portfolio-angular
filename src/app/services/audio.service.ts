import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Audio } from '../models/audio.model';
import DataSnapshot = firebase.database.DataSnapshot;

// abstraction entre le service et les components, les données sont maintenues à jour grâce au Subject
@Injectable()
//utiliser  HttpClient pour la gestion des données de la liste d'audioList.  Ajouter le décorateur  @Injectable()  (importé depuis  @angular/core

export class AudioService {
  
  audioList: Audio[] = [
    {
      title: 'Remorse',
      year: '2016',
      description: 'Composition acousmatique',
      file: '../../assets/audio/REMORSE.mp3'
    },
    {
      title: 'In Between',
      year: '2015',
      description: 'Composition acousmatique',
      file: '../../assets/audio/IN_BETWEEN.mp3'
    },
    {
      title: 'Oboe',
      year: '2006',
      description: 'Composition MIDI',
      file: '../../assets/audio/OBOE.mp3'
    },
    {
      title: 'Diffractions',
      year: '2015',
      description: 'Composition acousmatique',
      file: '../../assets/audio/DIFFRACTIONS.mp3'
    }
  ];
  audioSubject = new Subject<Audio[]>();

  constructor() {
    //this.getAudios();
  }
  
  emitAudios() {
    this.audioSubject.next(this.audioList);
  }
  saveAudios() {
    firebase.database().ref('/audioList').set(this.audioList);
  }
  getAudios() {
   
    firebase.database().ref('/audioList')
      .on('value', (data: DataSnapshot) => {
        this.audioList = data.val() ? data.val() : [];
        this.emitAudios();
      }
    );
  }

  getSingleAudio(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/audioList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewAudio(newAudio: Audio) {
    this.audioList.push(newAudio);
    this.saveAudios();
    this.emitAudios();
  }
  removeAudio(audio: Audio) {
    const audioIndexToRemove = this.audioList.findIndex(
      (audioEl) => {
        if(audioEl === audio) {
          return true;
        }
      }
    );
    this.audioList.splice(audioIndexToRemove, 1);
    this.saveAudios();
    this.emitAudios();
  }
}

  
