import { FormControl,FormArray,FormBuilder,FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  addQuizform!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.addQuizform=this.fb.group(
      {
        'name':new FormControl(''),
        'description':new FormControl(''),
        'rollout':new FormControl(''),
        'questions':this.fb.array([
        this.fb.group(
          {
            'label':new FormControl('hello'),
            'order':new FormControl ('grrr'),
            'answers':new FormArray([
              this.fb.group(
              {'label':new FormControl('team'),
              'isCorrect': new FormControl('leisure')
      
              }
              )
            ])
          }
        )
          
         
    
        ])
    
      }
    )
console.log(this.addQuizform)

  }

  get questions(){

    return (<FormArray>this.addQuizform.get('questions')).controls

  }

  get answers(){
    return (<FormArray> this.addQuizform.controls['questions'].get('answers')).controls

    // return (<FormArray> this.addQuizform.get('questions')?.get('answers')).controls
  }

  addques(){

    const control=this.fb.group({
      'label':new FormControl('hello'),
            'order':new FormControl ('grrr'),
            'answers':new FormArray([
              this.fb.group(
              {'label':new FormControl('team'),
              'isCorrect': new FormControl('leisure')
      
              }
              )
            ])
      
      
    })

    this.questions.push(control)

    
  }

  delques(){
    this.questions.pop()
  }



  

}
