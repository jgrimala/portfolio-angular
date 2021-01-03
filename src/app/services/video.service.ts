import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Video } from '../models/video.model';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoList: Video[] = [
    {
      title: 'Shell',
      year: '2015',
      description: 'Vidéo réalisée avec Adobe After Effect (Trapcode MIR).<br>Création sonore électroacoustique et synchro avec Reaper.',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457822314" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457822314',
      image: '../../assets/images/Thumbnail_lg_Shell.png'
    },
    {
      title: 'In Between',
      year: '2014',
      description: 'Vidéo réalisée avec Adobe After Effect (Trapcode MIR).<br>Création sonore électroacoustique et synchro avec Reaper.',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457820276" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457820276',
      image: '../../assets/images/Thumbnail_lg_InBetween.png'
    },
    {
      title: 'INTERFACE DE JEU VIDÉO',
      year: '2015',
      description: 'Logiciels: Logic Pro, Reaper.<br>Techniques: synthèse soustractive, modélisation physique, échantillonnage, bruit blanc.<br>Effets: réverbération, distorsion, réduction de résolution (bitcrusher).<br>Musique: s’intègre de façon tonale à travers les menus.<br>Effets sonores: plan proche (transition) et plan lointain (neurones, vent).',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457822699" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457822699',
      image: '../../assets/images/Thumbnail_lg_Interface.png'
    },
    {
      title: 'Vienna',
      year: '2014',
      description: 'Création de type Foley sur métrage préexistant. Extrait du court métrage Vienna Waits for You de Spitzendeckcher (0:00:00 à 0:01:40)<br>lien du court métrage original: https://vimeo.com/85002648',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457822506" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457822506',
      image: '../../assets/images/Thumbnail_lg_Vienna.png'
    },
    {
      title: 'Innommée',
      year: '2016',
      description: '“On existe que si on est photographié.” - Jorge Luis Borges, Le livre de Sable (1975)<br>“Que voulez-vous que je dise de moi? Je ne sais rien de moi! Je ne sais même pas la date de ma mort.” - Borges répondant à un journaliste (1969).<br>La librairie SIGNAL de OUTPUT a été utilisée pour la trame sonore.<br>Les séquences ont toutes été filmées au microscope.<br>Le montage a été effectué principalemen avec Adobe After Effect CC.',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457821835" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457821835',
      image: '../../assets/images/Thumbnail_lg_Innommee.png'
    },
    {
      title: 'Dragon',
      year: '2015',
      description: 'Création sonore à partir de prises de sons originales.<br>Réalisé par Philippe Desjardins et Julie Grimala. Locidiels: Logic Pro, Reaper',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457829832" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457829832',
      image: '../../assets/images/Thumbnail_lg_Dragon.png'
    },
    {
      title: 'Robots',
      year: '2015',
      description: 'Création sonore à partir de prises de sons originales.<br>Réalisé par Philippe Desjardins et Julie Grimala.<br>Locidiels: Logic Pro, Reaper.<br>Matériel d’enregistrement: DR-100 et DR-05, écouteurs AKG K-240 et Beyer-Dynamics.',
      vimeoEmb: '<iframe src="https://player.vimeo.com/video/457823053" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
      vimeoLink: 'https://vimeo.com/457823053',
      image: '../../assets/images/Thumbnail_lg_Robots.png'
    }

  ];
  videoSubject = new Subject<Video[]>();
  constructor() {}

  emitVideos() {
    this.videoSubject.next(this.videoList.slice());
  }
  saveVideos() {
    firebase.database().ref('/videoList').set(this.videoList);
  }
  getVideos() {
    firebase.database().ref('/videoList')
    .on('value',(data: DataSnapshot) => {
      this.videoList = data.val() ? data.val() : [];
      this.emitVideos();
    });
  }

  getSingleVideo(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/videoList/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  
  createNewVideo(newVideo: Video) {
    this.videoList.push(newVideo);
    this.saveVideos();
    this.emitVideos();
  }
  removeVideo(video: Video) {
    const videoIndexToRemove = this.videoList.findIndex(
      (videoEl) => {
        if(videoEl === video) {
          return true;
        }
      }
    );
    this.videoList.splice(videoIndexToRemove, 1);
    this.saveVideos();
    this.emitVideos();
  }
}