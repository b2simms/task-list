webpackJsonp([1],{0:function(t,e,n){t.exports=n("x35b")},"0WBy":function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.taskAdded=new o.EventEmitter,this.task=null}return t.prototype.addTask=function(){this.taskAdded.emit(this.task),this.task=null},t}();r([n.i(o.Output)(),a("design:type",Object)],i.prototype,"taskAdded",void 0),i=r([n.i(o.Component)({selector:"app-task-form",template:n("Naf3"),styles:[n("esCT")]})],i)},"52hV":function(t,e,n){"use strict";var o=n("3j3K"),r=n("cHfL"),a=n.n(r),i=n("2vVT");n.n(i);n.d(e,"a",function(){return d});var c=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u="Rp3KNHLW5pyInaCQLNr4KdjNjcIPbmL1",p="managebrent.auth0.com",f="token",d=function(){function t(){this.lock=new a.a(u,p,{}),this.lock.on("authenticated",function(t){localStorage.setItem(f,t.idToken)})}return t.prototype.signIn=function(){this.lock.show()},t.prototype.signOut=function(){localStorage.removeItem(f)},t.prototype.authenticated=function(){return n.i(i.tokenNotExpired)(f,localStorage.getItem(f))},t}();d=c([n.i(o.Injectable)(),s("design:paramtypes",[])],d)},"5xMp":function(t,e){t.exports='<app-nav-bar></app-nav-bar>\r\n\r\n<div class="app-container">\r\n\r\n  \x3c!-- ... welcome message ... --\x3e\r\n  <md-card *ngIf="!authService.authenticated()">\r\n    <md-card-title>Hello, visitor.</md-card-title>\r\n    <md-card-subtitle>\r\n      Please <a (click)="authService.signIn()">sign in</a> to manage your task list.\r\n    </md-card-subtitle>\r\n  </md-card>\r\n\r\n  <app-task-list *ngIf="authService.authenticated()"\r\n    (startAjaxRequest)="slimLoading.start()"\r\n    (completeAjaxRequest)="slimLoading.complete()">\r\n  </app-task-list>\r\n\r\n  \x3c!-- adds the slim loading bar to our app --\x3e\r\n  <ng2-slim-loading-bar [color]="\'gold\'" [height]="\'4px\'"></ng2-slim-loading-bar>\r\n  \r\n</div>'},Iksp:function(t,e,n){"use strict";function o(t,e){return new m.AuthHttp(new m.AuthConfig,t,e)}var r=n("Qbdm"),a=n("KN8t"),i=n("3j3K"),c=n("NVOs"),s=n("Fzro"),u=n("YWx4"),p=n("n3Dd"),f=n("52hV"),d=n("fYnu"),l=n("xHFn"),h=n("0WBy"),m=n("2vVT"),b=(n.n(m),n("qT1o")),y=n("FdG/");n.d(e,"a",function(){return v});var g=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},v=function(){function t(){}return t}();v=g([n.i(i.NgModule)({declarations:[u.a,p.a,l.a,h.a],imports:[r.a,a.a,c.a,s.HttpModule,d.a,y.a.forRoot()],providers:[f.a,b.a,{provide:m.AuthHttp,useFactory:o,deps:[s.Http,s.RequestOptions]}],bootstrap:[u.a,p.a]})],v)},KCGK:function(t,e){t.exports='<md-toolbar color="primary">\r\n  <span>Task List</span>\r\n\r\n  <span class="fill-space"></span>\r\n\r\n  <button md-button (click)="authService.signIn()" *ngIf="!authService.authenticated()">Sign In</button>\r\n  <button md-button (click)="authService.signOut()" *ngIf="authService.authenticated()">Sign Out</button>\r\n</md-toolbar>'},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},Naf3:function(t,e){t.exports='<div class="task-form">\r\n  <md-input-container>\r\n    <input mdInput [(ngModel)]="task" placeholder="New task">\r\n  </md-input-container>\r\n  <button md-button md-raised-button color="primary" (click)="addTask()">Add</button>\r\n</div>'},YWx4:function(t,e,n){"use strict";var o=n("3j3K"),r=n("52hV"),a=n("FdG/");n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.authService=t,this.slimLoading=e}return t}();s=i([n.i(o.Component)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),c("design:paramtypes",["function"==typeof(u=void 0!==r.a&&r.a)&&u||Object,"function"==typeof(p=void 0!==a.b&&a.b)&&p||Object])],s);var u,p},esCT:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},n3Dd:function(t,e,n){"use strict";var o=n("3j3K"),r=n("52hV");n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.authService=t}return t}();c=a([n.i(o.Component)({selector:"app-nav-bar",template:n("KCGK"),styles:[n("rlqk")]}),i("design:paramtypes",["function"==typeof(s=void 0!==r.a&&r.a)&&s||Object])],c);var s},okgc:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".app-container{padding:20px}",""]),t.exports=t.exports.toString()},paU5:function(t,e){t.exports='<md-card>\r\n  <md-card-title>Task List</md-card-title>\r\n  <md-card-subtitle>All your tasks in one place.</md-card-subtitle>\r\n\r\n\r\n  <app-task-form (taskAdded)="taskAddedHandler($event)"></app-task-form>\r\n\r\n\r\n  <md-list>\r\n    <div class="task-item" *ngFor="let task of tasks; trackBy: $index">\r\n      <p><small><strong>{{ task.createdAt | date: \'short\' }}</strong></small></p>\r\n      <p class="col">{{ task.description }}</p>\r\n\r\n      <button class="delete" md-button md-raised-button\r\n        color="accent" (click)="deleteTask(task)">Delete</button>\r\n    </div>\r\n    <div class="task-item" *ngIf="tasks?.length == 0">\r\n      <p>You have no pending tasks.</p>\r\n    </div>\r\n  </md-list>\r\n</md-card>'},qT1o:function(t,e,n){"use strict";var o=n("3j3K"),r=n("2vVT");n.n(r);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=s=function(){function t(t){this.authHttp=t}return t.prototype.loadTasks$=function(){return this.authHttp.get(s.TASKS_ENDPOINT)},t.prototype.addTask$=function(t){return this.authHttp.post(s.TASKS_ENDPOINT,{description:t})},t.prototype.deleteTask$=function(t){return this.authHttp.delete(s.TASKS_ENDPOINT+"?id="+t._id)},t}();c.TASKS_ENDPOINT="https://wt-1e9b40a3378f6071bf2b112b43143839-0.run.webtask.io/tasks",c=s=a([n.i(o.Injectable)(),i("design:paramtypes",["function"==typeof(u=void 0!==r.AuthHttp&&r.AuthHttp)&&u||Object])],c);var s,u},rjSw:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".task-item{padding:10px;margin-bottom:10px;background-color:#eee}button.delete{float:right;top:-60px}.col{width:50%}@media only screen and (min-width:768px){.col{width:100%}}",""]),t.exports=t.exports.toString()},rlqk:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".fill-space{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}",""]),t.exports=t.exports.toString()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("O61y"),r=n("3j3K"),a=n("kZql"),i=n("Iksp");a.a.production&&n.i(r.enableProdMode)(),n.i(o.a)().bootstrapModule(i.a)},xHFn:function(t,e,n){"use strict";var o=n("3j3K"),r=n("qT1o");n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.taskListService=t,this.startAjaxRequest=new o.EventEmitter,this.completeAjaxRequest=new o.EventEmitter}return t.prototype.ngOnInit=function(){this.loadTasks()},t.prototype.loadTasks=function(){var t=this;this.startAjaxRequest.emit(),this.taskListService.loadTasks$().subscribe(function(e){return t.tasks=e.json()},function(t){return console.log(t)},function(){return t.completeAjaxRequest.emit()})},t.prototype.taskAddedHandler=function(t){var e=this;this.startAjaxRequest.emit(),this.taskListService.addTask$(t).subscribe(function(t){return e.loadTasks()},function(t){return console.log()})},t.prototype.deleteTask=function(t){var e=this;this.startAjaxRequest.emit(),this.taskListService.deleteTask$(t).subscribe(function(t){return e.loadTasks()},function(t){return console.log()})},t}();a([n.i(o.Output)(),i("design:type",Object)],c.prototype,"startAjaxRequest",void 0),a([n.i(o.Output)(),i("design:type",Object)],c.prototype,"completeAjaxRequest",void 0),c=a([n.i(o.Component)({selector:"app-task-list",template:n("paU5"),styles:[n("rjSw")]}),i("design:paramtypes",["function"==typeof(s=void 0!==r.a&&r.a)&&s||Object])],c);var s}},[0]);