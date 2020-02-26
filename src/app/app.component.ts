import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'cultgame';
  startApp = false;

  private sub: Subscription;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {

    this.api.testConnection().subscribe(e => {
      // console.log(e);
      if (e.load === 'xxxStat') {
        this.startApp = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.sub = interval(1000).subscribe(this.tick);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  tick() {
    console.log('xxxx');
  }

}
