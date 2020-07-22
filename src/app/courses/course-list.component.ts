import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit() {
        this.courses = [
            {
                id: 1,
                name: "Angular Forms",
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPTO-5050',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 4, 2020'
            },
            {
                id: 2,
                name: "Angular HTTP",
                imageUrl: '/assets/images/http.png',
                price: 80.99,
                code: 'BLOB-2547',
                duration: 90,
                rating: 4,
                releaseDate: 'November, 2, 2020'
            }

        ]

    }
}