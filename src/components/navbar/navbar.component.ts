import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { matReceipt } from '@ng-icons/material-icons/baseline'

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, NgIcon, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    providers: [provideIcons({ matReceipt })],
})
export class NavbarComponent implements OnInit {
    items: { label: string; link: string }[] = []

    ngOnInit(): void {
        this.items = [
            {
                label: 'Buy Lists',
                link: '/',
            },
        ]
    }
}
