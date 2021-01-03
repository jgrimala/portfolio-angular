import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../../services/video.service';



@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {
  video: Video;
  constructor(//private sanitizer: DomSanitizer,
              private route: ActivatedRoute, 
              private router: Router,
              private videoService: VideoService) {
               
  }
        
  ngOnInit() {
    
    this.video = new Video('', '', '', '', '', '');
    
    const id = this.route.snapshot.params['id'];
    this.videoService.getSingleVideo(+id).then((video: Video) => {
      this.video = video;
    });
    this.videoService.emitVideos();
  }

  onBack() {
    this.router.navigate(['/video-list']);
  }
}
