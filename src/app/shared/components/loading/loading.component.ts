import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  template: `
    <div class="row justify-content-center">
      <div class="col-4">
        <span>Loading.... please wait!!</span>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </div>
    </div>
  `,
  styles:[``]
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
