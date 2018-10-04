import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  taskList= {
    tasks: [
      {name: 'Task', selected : false},
      {name: 'Task', selected : true},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
      {name: 'Task', selected : false},
    ]
  };

  
 
  public title = 'Dashboard';
  form: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      tasks: this.buildTasks()
    });
  }

 

  ngOnInit() {
    console.log(this.form.controls)
  }


  get tasks()  {
    return this.form.get('tasks');
  };

 

  buildTasks() {
    const arr = this.taskList.tasks.map(s => {
      return this.fb.control(s.name);
    })
    return this.fb.array(arr);
  }

}
