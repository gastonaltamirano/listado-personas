import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { getIdToken } from 'firebase/auth';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor (
        private httpClient : HttpClient,
        private loginService : LoginService
    ) {};

    cargarPersonas () {
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>(
            `https://listado-personas-3420e-default-rtdb.firebaseio.com/datos.json?auth=${token}`);
    };

    //guardar personas
    guardarPersonas (personas : Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient
            .put(`https://listado-personas-3420e-default-rtdb.firebaseio.com/datos.json?auth=${token}`, personas)
            .subscribe({
                next: res => console.log('personas ' + res),
                error: error => console.log('Error : ' + error)
            });
    };

    modificarPersona(index : number, persona : Persona) {
        const token = this.loginService.getIdToken();
        let url : string;
        url = `https://listado-personas-3420e-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`

        this.httpClient.put(url, persona).subscribe({
            next : res => console.log('resultado modificar' + res),
            error : error => console.log('error modificar' + error)
        })
    };

    eliminarPersona(index: number) {
        const token = this.loginService.getIdToken();
        let url : string;
        url = `https://listado-personas-3420e-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`

        this.httpClient.delete(url).subscribe({
            next : res => console.log('resultado eliminar' + res),
            error : error => console.log('error eliminar' + error)
        })
    }
};