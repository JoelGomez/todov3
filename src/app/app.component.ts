import { Component } from '@angular/core';
import { faCircleRight, faCoffee, faFloppyDisk, faSave, faSquareCaretRight, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todov3';
  save = faFloppyDisk;
  trashcan = faTrash;
  next = faCircleRight;
}
