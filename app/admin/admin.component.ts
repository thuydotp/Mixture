import { Component } from '@angular/core';

@Component({
    selector: 'admin-app',
    moduleId: module.id,
    templateUrl: 'admin.component.html',
    styleUrls: [ 'admin.component.css'] 
})

export class AdminComponent{
    toggleSideNav: boolean = false;

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        this.toggleSideNav = true;
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
        this.toggleSideNav = false;
    }
}