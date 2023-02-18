import { HttpHeaders } from '@angular/common/http';
import { lore } from './../../shared/constants/constants';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})


export class QuizzComponent implements OnInit {
  fileUrl!: SafeResourceUrl;
  cardTitle = "Resultado diagnostico"
  subTitle =" this is a text"
  textResults:any = {
    0: 'Vas a morir pronto',
    1: 'Animo campeón, tu puedes',
    2: 'Estás on fire! '
  };
  result:string = ""
  validResult : any = {
    question1 : "validAnswer",
    question2 : "good"
  }
  quizzForm = new FormGroup(
   {
     question1 : new FormControl('', Validators.required),
     question2 : new FormControl('', Validators.required),


    }
  )
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const blob = new Blob([this.result], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  test(){
    console.log(this.quizzForm.controls)
  }

  getResults(){
    let points = 0
    Object.keys(this.quizzForm.controls).forEach(key => {
      this.quizzForm.get(key)
      if(this.validResult[key] && this.validResult[key] === this.quizzForm.get(key)?.value){
        points += 1
      }
      this.validResult[key]
      console.log(this.validResult[key],this.quizzForm.get(key)?.value)
    });

    this.result = this.textResults[points]
  }
download(){
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.result));
  element.setAttribute('download', "result.txt");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();




  }

}
