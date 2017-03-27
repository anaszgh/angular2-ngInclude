import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Logger } from "../services/common/logger.service";
@Directive({ selector: 'ngInclude' })
export class ngInclude implements OnInit {

    @Input('src')
    private templateUrl: string;
    @Input('type')
    private type: string;

    constructor(private element: ElementRef, private http: Http, private logger: Logger) {

    }
    parseTemplate(res: Response) {
        if (this.type == 'template') {
            this.element.nativeElement.innerHTML = res.text();
        } else if (this.type == 'style') {
            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(res.text()));
            head.appendChild(style);
        }
    }
    handleTempalteError(err) {

    }
    ngOnInit() {
        this.
            http.
            get(this.templateUrl).
            map(res => this.parseTemplate(res)).
            catch(this.handleTempalteError.bind(this)).subscribe(res => {
                console.log(res);
            });
    }


}
