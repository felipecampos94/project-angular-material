import {Component, OnInit} from '@angular/core';
import {concat, interval, map, take, takeWhile, tap} from "rxjs";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'app-progressbar-spinners',
  templateUrl: './progressbar-spinners.component.html',
  styleUrls: ['./progressbar-spinners.component.scss']
})
export class ProgressbarSpinnersComponent implements OnInit {
  public loadingPercent = 0;
  public currentPlayback = 0;
  public queryValue = 0;
  public queryMode: ProgressBarMode = 'query';

  ngOnInit(): void {
    this.loadingProgress(500, 95)
      .subscribe(i => this.loadingPercent = i);

    this.loadingProgress(250, 100)
      .subscribe(i => this.currentPlayback = i);

    concat(
      interval(2000)
        .pipe(
          take(1),
          tap(_ => (this.queryMode = 'determinate'))
        ),
      this.loadingProgress(500, 100)
    ).subscribe(i => this.loadingPercent = i);
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed)
      .pipe(
        map(i => i * 5),
        takeWhile(i => i <= takeUntil)
      )
  }
}
