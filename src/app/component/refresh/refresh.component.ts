import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent {
  constructor(private _router: Router, private _ActivatedRoute: ActivatedRoute) {
    this._router.navigateByUrl(`/?sec=${this._ActivatedRoute.snapshot.queryParams['sec']}`)
  }
}
