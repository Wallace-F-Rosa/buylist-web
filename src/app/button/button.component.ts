import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'button-demo',
    imports: [ButtonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {}
