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
        name: [''],
        description:[''],
        rollout:[''],
        questions:this.fb.array([
        
          
         
    
        ])
    
      }
    )

  }

  get questions(){

    return (<FormArray>this.addQuizform.get('questions')).controls

  }

  get answers(){
    return (<FormArray> this.addQuizform.controls['questions'].get('answers')).controls

    // return (<FormArray> this.addQuizform.get('questions')?.get('answers')).controls
  }

  addques(){

    const cont=this.fb.group(
      {
        label:[''],
        order:[''],
        answers:this.fb.array([
          
        ])
      }
    )

    this.questions.push(cont)

    
  }

  delques(){
    this.questions.pop()
  }

 addans(){
    const ans=this.fb.group(
    {label:[''],
    isCorrect: [false]

    }
    )

   this.answers.push()
 }

  

}
