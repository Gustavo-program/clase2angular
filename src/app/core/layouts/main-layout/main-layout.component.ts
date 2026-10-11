// src/app/core/layouts/main-layout/main-layout.component.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  // Estado reactivo local que gestiona si el menú lateral está colapsado:
  public readonly isSidebarCollapsed = signal<boolean>(false);

  // Método que invierte el estado de la señal:
  public toggleSidebar(): void {
    this.isSidebarCollapsed.update(prev => !prev);
  }
}