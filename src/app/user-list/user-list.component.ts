import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../models/user.model";
import { Subscription } from 'rxjs';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  userList: User[];
  userSubscription: Subscription;
  
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (userList: User[]) => {
        this.userList = userList;
      }
    );
      this.userService.emitUsers();

  }
  onNewUser() {
    this.router.navigate(['/user-list', 'new']);
  }

  onViewUser(id: number) {
    this.router.navigate(['/user-list', 'view', id]);
  }
  onDeleteUser(user: User) {
  this.userService.removeUser(user);
}
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  
}
