import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  usuarios: any[] = [];
  posiciones: string[] = ["A1", "A2", "A3", "B1", "B2", "B3"];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  getUsuarioByPosicion(posicion: string) {
    const usuario = this.usuarios.find((usuario) => usuario.posicion === posicion);
    return usuario ? usuario.estado : false;
  }

  getEstadoStyle(estado: boolean) {
    return {
      'background-color': estado ? '#00ff0080' : '#ff0000', // Cambié el color predeterminado a rojo (#ff0000)
    };
  }
}