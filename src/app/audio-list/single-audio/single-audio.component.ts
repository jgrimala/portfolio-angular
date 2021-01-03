import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Audio } from '../../models/audio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
declare var makeWave: any;

@Component({
  selector: 'app-single-audio',
  templateUrl: './single-audio.component.html',
  styleUrls: ['./single-audio.component.css'],
})
export class SingleAudioComponent implements OnInit, AfterViewInit {
  audio: Audio;
  public href: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private audioService: AudioService
  ) {}

  ngOnInit() {
    this.audio = new Audio('', '', '', '');
    const id = this.route.snapshot.params['id'];
    const href = this.router.url;
    console.log(href);
    this.audioService.getSingleAudio(+id).then((audio: Audio) => {
      this.audio = audio;
      makeWave(this.audio.file);
    });
  }
  ngAfterViewInit() {}
  onBack() {
    this.router.navigate(['/audio-list']);
  }
}
