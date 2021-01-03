import { Component, OnInit, OnDestroy } from '@angular/core';
import { Audio } from "../models/audio.model";
import { Subscription } from 'rxjs';
import { AudioService } from "../services/audio.service";
import { Router } from "@angular/router";
declare var pulse: any;
declare var stopPulse: any;

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css']
})
export class AudioListComponent implements OnInit, OnDestroy {
  audioList: Audio[];
  audioSubscription: Subscription;
  
  constructor(private audioService: AudioService,
              private router: Router) { }

  ngOnInit() {
    this.audioSubscription = this.audioService.audioSubject.subscribe(
      (audioList: Audio[]) => {
        this.audioList = audioList;
      }   
    );    
      this.audioService.emitAudios();
   
  }
  pulsate(){
    pulse();
  }
  stopPulsate(){
    console.log('On est dans stopPulsate()')
    stopPulse();
  }
  onNewAudio() {
    this.router.navigate(['/audio-list', 'new']);
  }
  onViewAudio(id: number) {
    this.stopPulsate();
    this.router.navigate(['/audio-list', 'view', id]);
  }
  onDeleteAudio(audio: Audio) {
  this.audioService.removeAudio(audio);
}
  ngOnDestroy() {
    this.audioSubscription.unsubscribe();
  }
  
}