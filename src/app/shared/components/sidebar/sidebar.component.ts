// src/app/shared/components/sidebar/sidebar.component.ts
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface NavigationItem {
  readonly path: string;
  readonly label: string;
  readonly icon: string;
  readonly badge?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // Signal input reactivo recibido desde el componente padre:
  public readonly isCollapsed = input<boolean>(false);

  // Lista tipada de enlaces de navegación escolar:
  public readonly navItems: readonly NavigationItem[] = [
    { path: '/dashboard', label: 'Panel de Control', icon: 'dashboard' },
    { path: '/alumnos', label: 'Padrón de Alumnos', icon: 'people', badge: '100' },
    { path: '/notas', label: 'Calificaciones', icon: 'grade' }
  ];
}