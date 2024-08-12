import { Component, input } from '@angular/core';
import { Tag } from './tag.model';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  tag = input.required<Tag>();
}
