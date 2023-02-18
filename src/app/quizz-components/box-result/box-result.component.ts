import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-result',
  templateUrl: './box-result.component.html',
  styleUrls: ['./box-result.component.scss']
})
export class BoxResultComponent implements OnInit {

  @Input() title: string | undefined
  @Input() subtitle: string | undefined
  @Input() resultText: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  download(){
    const element = document.createElement('a');
    let result = ""
    result += this.title;
    result += "/n";
    result += this.subtitle;
    result += "/n";
    result += this.resultText;

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result));
    element.setAttribute('download', "result.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    }
}
