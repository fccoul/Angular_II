import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
            <h1>My First Angular 2 App</h1>
            <div class="container">
               <h2>To Do List {{day}}/{{month}}/{{year}}</h2>
               <h3>{{currentFocus}}</h3>
               <ul>
                 <!--<li>{{firstTask.description}}</li>-->
                 <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)"
                 *ngFor="let currentTask of tasks">{{currentTask.description}}
                 <button (click)="editTask(currentTask)">Edit</button>
                 </li>
               </ul>
               <hr/>
               <div>
                  <h4>{{selectedTask.description}}</h4>
                  <p>Task Complete ? {{selectedTask.done}}</p>
                  <h5>Edit Task</h5>
                  <label>Enter Task Description</label>
                  <input [(ngModel)]="selectedTask.description" type="text">
                  <label>Enter Task priority (1-3) :</label>
                  <br>
                  <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority) <br>
                  <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority) <br>
                  <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority) <br>
               </div>
               <hr/>
               Welcome {{name}} !<br>
               <form>
                <!--  $event.target.value : recuprere la valeur du tag html en cours-->
                <!--<input type="text" [value]="name" (input)="name=$event.target.value">-->
                <!--ecriture simplifié databinding-->
                <input [(ngModel)]="name" type ="text" name="name" >
                </form>
            </div>
             `
})
export class AppComponent {
  title = 'app';
  currentFocus = 'Angular Framework FCO';

  currentTime: Date = new Date();
  day = this.currentTime.getDate();
  month = this.currentTime.getMonth() + 1;
  year = this.currentTime.getFullYear();

  /*
  firstTask = {
    description: 'Finish weekend Angular homework for Epicodus course'
  };
  */
  valTask = 'FCO learned Angular II';
  /*
   firstTask: Task = new Task (this.valTask);
   */
  tasks: Task[] = [
    new Task(this.valTask, 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
    // alert('You just requested to edit a Task!');
    this.selectedTask = clickedTask;
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      alert('this task is done !');
    } else {
      alert('This Task is not done. Better get to work !');
    }
  }
  // property de class
  priorityColor(currentTask) {
      if (currentTask.priority === 3) {
        return 'bg-danger';
      } else if (currentTask.priority === 2 ) {
        return 'bg-warning';
      } else {
        return 'bg-info';
      }
  }
}

export class Task {
  public done = false;
  constructor (public description: string, public priority: number) {

    }
}


