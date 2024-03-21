import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    //template: '<h2>{{ "Title:" + title }}</h2>'
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]=isActive>Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        <button (click)="onSave( )">Save</button>
        `
})


export class CoursesComponent{
    title = "List of courses";
    courses = ["course1", "course2", "course3"];
    isActive = true;

    constructor(service: CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
    onSave(){
        console.log("Button was clicked");
    }

    getTitle(){
        return this.title;
    }
    // logic for calling an http service
    
}