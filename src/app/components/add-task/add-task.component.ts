import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  text: string | undefined;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('You gotta add a task, babes!')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);


    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
