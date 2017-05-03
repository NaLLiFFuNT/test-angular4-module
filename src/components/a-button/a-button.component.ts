import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: '[a-button]',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * avaliable classes for button:
 *                  'btn_primary'
 *                  'btn_warn'
 *                  'btn_text'
 *                  'btn_secondary'
 *
 */
export class AButtonComponent  {

  @Input() disabled: boolean;
  @Input() pending: boolean;

  @HostBinding('class.loader') get isPending() {
    return this.pending;
  }
  @HostBinding('attr.disabled') get isDisabled() {
    return this.disabled ? '' : undefined;
  }

  @HostListener('click', [ '$event' ]) clickBtnEvent(event: MouseEvent) {
    if (this.disabled || this.pending) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  }

  constructor() { }
}
