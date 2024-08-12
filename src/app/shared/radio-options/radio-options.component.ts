import { AfterViewInit, Component, input, output, viewChildren } from '@angular/core';
import { RadioOption } from './radio-option/radio-option.model';
import { RadioOptionComponent } from "./radio-option/radio-option.component";
import { RoundSpanComponent } from '../round-span/round-span.component';

@Component({
  selector: 'app-radio-options',
  standalone: true,
  imports: [RadioOptionComponent, RoundSpanComponent],
  templateUrl: './radio-options.component.html',
  styleUrl: './radio-options.component.css'
})
export class RadioOptionsComponent implements AfterViewInit {
  title = input.required<string>();
  amount = input.required<number>();
  options = input.required<RadioOption[]>();
  activate = input<number>();

  choose = output<RadioOption>();

  private optionsComponents = viewChildren(RadioOptionComponent);

  onChoose(option: RadioOption) {
    this.choose.emit(option);
  }
  
  ngAfterViewInit(): void {
    let index = this.activate();
    if(index != null){
      index = index < 0 ? 0 : index >= this.optionsComponents().length ? this.optionsComponents().length - 1: index;
      this.optionsComponents()[index].activate();
    }
  }
}
