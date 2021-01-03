import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from "../models/video.model";
import { Subscription } from 'rxjs';
import { VideoService } from "../services/video.service";
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
//declare const myCarousel: any;
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  videoList: Video[];
  videoSubscription: Subscription;
  radioSel: any;
  radioSelected:string;
  radioSelectedString:string;

  constructor(private videoService: VideoService,
              private router: Router) {
                this.videoList = videoService.videoList;
      this.radioSelected = "../../assets/images/Thumbnail_lg_Shell.png";
      this.getSelectedvideo();
               }

  ngOnInit() {
   
    this.videoSubscription = this.videoService.videoSubject.subscribe(
      (videoList: Video[]) => {
        this.videoList = videoList;
      }

    );
      this.videoService.emitVideos();
  }

  getSelectedvideo(){
    this.radioSel = this.videoList.find(Video => Video.image === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onVideoChange(video){
    this.getSelectedvideo();
  }
  onNewVideo() {
    this.router.navigate(['/video-list', 'new']);
  }
  onViewVideo(id: number) {
    this.router.navigate(['/video-list', 'view', id]);
  }
  onDeleteVideo(video: Video) {
  this.videoService.removeVideo(video);
}
  ngOnDestroy() {
    this.videoSubscription.unsubscribe();
  }
}
