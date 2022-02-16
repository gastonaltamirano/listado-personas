import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

@Injectable()
export class LoginService {

    token : string | null;
    auth : any;

    constructor(private router : Router) {}

    login (email : string, password : string) {
        this.auth = this.auth == null ? getAuth() : this.auth;
        signInWithEmailAndPassword(this.auth, email, password)
            .then(res => res.user.getIdToken())
            .then(token => {
                this.token = token
                this.router.navigate(['/']);
            })
            .catch(error => console.log(error.code, error.message));
    }

    getIdToken () {
        return this.token;
    }

    isLogged () : boolean {
        return this.token != null;
    }

    logout () {
        signOut(this.auth).then(() => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.error(error));
    };
}