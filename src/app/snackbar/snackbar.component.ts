import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snanckbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.snanckbar.open('Hello World', 'Close', {
      duration: 3000
    })
  }
}
