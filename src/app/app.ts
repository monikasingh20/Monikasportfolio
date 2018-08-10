import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Shared } from './providers/shared';


@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit{

    constructor(public portfolio:Shared, public meta: Meta){
        this.meta.addTags([
            {name: 'og:title', content: 'Monika | portfolio'},
            {name: 'og:description', content: 'Hello, my name is Monika Singh. I am a Full Stack Developer and this is my portfolio page.'},
            {name: 'og:image', content: '/assets/img/social-min.png'},
            {name: 'author', content: 'Monika'},
            {name: 'keywords', content: 'Angular, Portfolio, Monika ,Singh'},
            {name: 'description', content: 'Hello, my name is Monika Singh. I am a Full Stack Developer and this is my portfolio page.'}
        ]);
    }
    ngOnInit(){
        if(!this.portfolio.texts){
            this.portfolio.getTexts().subscribe(
                data => {
                    console.log(data);
                    this.portfolio.texts = data;
                },
                err => console.error(err)
            );
        }
    }
}
