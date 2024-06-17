import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  data: string[] = [];
  private scrollPosition: [number, number] = [0, 0];

  constructor(private dataService: DataService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      this.data = data;
      setTimeout(() => {
        this.viewportScroller.scrollToPosition(this.scrollPosition);
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.saveScrollPosition.bind(this));
  }

  private saveScrollPosition(): void {
    this.scrollPosition = this.viewportScroller.getScrollPosition();
  }

  refreshData(): void {
    this.dataService.refreshData();
  }
}