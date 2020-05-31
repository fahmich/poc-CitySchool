import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parents-space',
  templateUrl: './parents-space.component.html',
  styleUrls: ['./parents-space.component.css']
})
export class ParentsSpaceComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  isValue: number = 1;

    toggle(x) {
       if (x == 1) { this.isValue = 1; }
      else if (x == 2) { this.isValue = 2; }
      else if (x == 3) { this.isValue = 3; }
    }

    getcode(){
      return this.authService.userData.codefamille
    }
    
  ngOnInit(): void {
  }

}
