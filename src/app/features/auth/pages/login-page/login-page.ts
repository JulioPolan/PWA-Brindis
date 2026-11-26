import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  private readonly router = inject(Router);

  heroImageUrl: string | null = '/images/Exlabs-logo.jpg'; // Coloca aquí la ruta de tu imagen cuando la tengas lista
  username = '';
  password = '';
  errorMessage = signal<string | null>(null);
  isSubmitting = signal(false);

  onLogin(): void {
    this.errorMessage.set(null);

    if (!this.username.trim() || !this.password) {
      this.errorMessage.set('Ingresa tu usuario y contraseña.');
      return;
    }

    this.isSubmitting.set(true);

    // Aquí conectarás más adelante tu servicio real de autenticación web
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.router.navigate(['/entries']);
    }, 300);
  }
}