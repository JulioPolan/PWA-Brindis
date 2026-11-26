import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export type EntryStatus = 'Abierto' | 'Cerrado';

export interface LabEntry {
  orderNumber: number;
  study: string;
  patient: string;
  age: number;
  gender: string;
  status: EntryStatus;
  createdAt: string;
  deliveryAt: string;
}

@Component({
  selector: 'app-entries-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entries-page.html',
  styleUrl: './entries-page.css'
})
export class EntriesPage {
  private readonly router = inject(Router);

  searchQuery = signal('');

  entries = signal<LabEntry[]>([
    {
      orderNumber: 1,
      study: 'Analisis de Sangre',
      patient: 'Burch Castro',
      age: 57,
      gender: 'Masculino',
      status: 'Cerrado',
      createdAt: '2026-08-28 17:36:58',
      deliveryAt: '2026-08-29 19:30:00'
    },
    {
      orderNumber: 2,
      study: 'Analisis de Sangre',
      patient: 'Ulrika Eke',
      age: 53,
      gender: 'Femenino',
      status: 'Cerrado',
      createdAt: '2026-08-31 21:23:11',
      deliveryAt: '2026-09-01 08:00:00'
    },
    {
      orderNumber: 3,
      study: 'Analisis de Sangre',
      patient: 'Stacee Wellan',
      age: 76,
      gender: 'Femenino',
      status: 'Cerrado',
      createdAt: '2026-09-05 14:19:15',
      deliveryAt: '2026-09-05 16:00:00'
    },
    {
      orderNumber: 4,
      study: 'Analisis de Sangre',
      patient: 'Fulanito Detal',
      age: 42,
      gender: 'Masculino',
      status: 'Abierto',
      createdAt: '2026-09-15 09:24:11',
      deliveryAt: '2026-09-15 10:30:00'
    },
    {
      orderNumber: 5,
      study: 'Analisis de Sangre',
      patient: 'Nissie Pentony',
      age: 32,
      gender: 'Masculino',
      status: 'Cerrado',
      createdAt: '2026-09-15 08:10:22',
      deliveryAt: '2026-09-15 10:00:00'
    }
  ]);

  pendingCount = computed(
    () => this.entries().filter((item) => item.status === 'Abierto').length
  );

  closedCount = computed(
    () => this.entries().filter((item) => item.status === 'Cerrado').length
  );

  filteredEntries = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.entries();
    }

    return this.entries().filter(
      (item) =>
        String(item.orderNumber).includes(query) ||
        item.study.toLowerCase().includes(query) ||
        item.patient.toLowerCase().includes(query) ||
        item.gender.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
    );
  });

  onLogout(): void {
    this.router.navigate(['/login']);
  }

  onNewEntry(): void {
    // Aquí abriremos más adelante el modal de nueva entrada
    const nextOrder =
      this.entries().reduce((max, item) => Math.max(max, item.orderNumber), 0) + 1;

    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    this.entries.update((list) => [
      ...list,
      {
        orderNumber: nextOrder,
        study: 'Analisis de Sangre',
        patient: `Paciente Simulado ${nextOrder}`,
        age: 30,
        gender: 'Femenino',
        status: 'Abierto',
        createdAt: formattedDate,
        deliveryAt: formattedDate
      }
    ]);
  }

  onAttachFile(entry: LabEntry): void {
    // Marca como Cerrado al adjuntar/subir resultado en la simulación
    this.entries.update((list) =>
      list.map((item) =>
        item.orderNumber === entry.orderNumber ? { ...item, status: 'Cerrado' } : item
      )
    );
  }

  onSendEntry(entry: LabEntry): void {
    console.log('Enviar entrada:', entry.orderNumber, entry.patient);
  }

  onDeleteEntry(orderNumber: number): void {
    this.entries.update((list) => list.filter((item) => item.orderNumber !== orderNumber));
  }
}