import { Component, OnInit } from '@angular/core'
import { Menubar } from 'primeng/menubar'
import { BadgeModule } from 'primeng/badge'
import { Avatar, AvatarModule } from 'primeng/avatar'
import { InputText } from 'primeng/inputtext'
import { Ripple, RippleModule } from 'primeng/ripple'
import { CommonModule } from '@angular/common'
import { MenuItem } from 'primeng/api'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-navbar',
    imports: [
        Menubar,
        BadgeModule,
        AvatarModule,
        RippleModule,
        CommonModule,
        RouterLink,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] = []

    ngOnInit(): void {
        this.items = [
            {
                label: 'Buy Lists',
                link: '/',
            },
        ]
    }
}
