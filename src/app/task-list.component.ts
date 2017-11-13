import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
    selector: 'app-task-list',
    template: `
    <ul>
    <!--<li>{{firstTask.description}}</li>-->
      <li (click)="isDone(currentTask)"
        *ngFor="let currentTask of childTaskList">{{currentTask.description}}
         <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      </li>
  </ul>
    `
})

export class TaskListComponent {
    // @Input : afin de recevoir les datas depuis le composant parent
    // This @Input() is like an "inbox" where the parent can send that data.
   @Input() childTaskList: Task[];
   @Output() clickSender = new EventEmitter();
/*
    tasks: Task[] = [
        new Task('Finish weekend Angular homework for Epicodus course', 3),
        new Task('Begin brainstorming possible JavaScript group projects', 2),
        new Task('Add README file to last few Angular repos on GitHub', 2)
      ];
      */

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

      editButtonHasBeenClicked(tasktoEdit: Task) {
          this.clickSender.emit(tasktoEdit);
      }
    }


