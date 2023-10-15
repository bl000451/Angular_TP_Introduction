import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  standalone: true,
  imports: [MatListModule, MatSidenavModule]
})

export class SidebarComponent {
  opened = true;

}