import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'input-control',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
})
export class InputControlComponent {
  @Input() form!: FormGroup;
  @Input() fc!: FormControl;
  @Input() type?: 'text' | 'number' = 'text';
  @Input() id: string = '';
  @Input() labelName: string = '';
}
