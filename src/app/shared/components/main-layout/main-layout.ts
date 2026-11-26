import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  userName = signal('Usuario');
  isSidebarOpen = signal(typeof window !== 'undefined' ? window.innerWidth > 768 : true);

  toggleSidebar(): void {
    this.isSidebarOpen.update((open) => !open);
  }

  closeSidebarOnMobile(): void {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      this.isSidebarOpen.set(false);
    }
  }
}