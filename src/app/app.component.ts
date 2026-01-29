import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  tasks = [
    { name: 'Study Angular', category: 'Education', dueDate: new Date(), priority: 'High' },
    { name: 'Grocery Shopping', category: 'Errands', dueDate: new Date(), priority: 'Medium' }
  ];

  addTask() {
    const newTask = { 
      name: 'New Task', 
      category: 'General', 
      dueDate: new Date(), 
      priority: 'Low' 
    };
    this.tasks.push(newTask);
  }
}
