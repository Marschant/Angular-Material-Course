import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>();

  isAuth = false;
  authSubscription: Subscription;  
  
  onClose() {
    this.sidenavClose.emit();
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy () {
    this.authSubscription.unsubscribe();
  }

}
