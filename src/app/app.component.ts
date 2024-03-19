import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {fromEvent, map, pluck} from "rxjs";

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe({
        next: (value: number) => this.determineHeader(value)
      })
  }

  private determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['max-width: 800px'])
      .pipe(pluck('matches'))
      .subscribe((response: boolean) => this.isSmallScreen = response)
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }


  protected readonly open = open;
}
