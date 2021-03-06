import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {SignupComponent} from './auth/signup/signup.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {GameLibraryComponent} from './game-library/game-library.component';
import {GameDetailComponent} from './game-library/game-detail/game-detail.component';
import {ChatsComponent} from './chats/chats.component';
import {ChatComponent} from './chats/chat/chat.component';
import {GroupProfileComponent} from './groups/group-profile/group-profile.component';
import {GroupMemberlistComponent} from './groups/group-memberlist/group-memberlist.component';
import {GroupForumComponent} from "./groups/group-forum/group-forum.component";
import {GroupForumPostComponent} from "./groups/group-forum-post/group-forum-post.component";
import {GroupCreateComponent} from "./groups/group-create/group-create.component";
import {NotesComponent} from './notes/notes.component';
import {NoteComponent} from './notes/note/note.component';
import {CommunityComponent} from "./community/community.component";
import {NotificationComponent} from "./notification/notification.component";
import {CalendarComponent} from './calendar/calendar.component';
import {ScheduleListComponent} from './calendar/schedule-list/schedule-list.component';
import {ScheduleAddComponent} from './calendar/schedule-add/schedule-add.component';
import {ScheduleEditComponent} from './calendar/schedule-edit/schedule-edit.component';
import {ScheduleShareComponent} from './calendar/schedule-share/schedule-share.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'library', component: GameLibraryComponent, canActivate: [AuthGuard], children: [
    {path: ':id', component: GameDetailComponent},
  ]
  },
  { path: 'chat', component: ChatsComponent, canActivate: [AuthGuard] },
  { path: 'chat/:id', component: ChatComponent, canActivate: [AuthGuard] },
  {path: 'group-profile/:id', component: GroupProfileComponent, canActivate: [AuthGuard]},
  {path: 'group-forum/:id', component: GroupForumComponent, canActivate: [AuthGuard]},
  {path: 'group-memberlist/:id', component: GroupMemberlistComponent, canActivate: [AuthGuard]},
  {path: 'group-forum-post/:id', component: GroupForumPostComponent, canActivate: [AuthGuard]},
  {path: 'group/create', component: GroupCreateComponent, canActivate: [AuthGuard]},
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard]},
  { path: 'notes/:id', component: NoteComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent},
  {path: 'notification', component: NotificationComponent},
  {
    path: 'calendar' , component: CalendarComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ScheduleListComponent },
      { path: 'add', component: ScheduleAddComponent },
      { path: 'edit/:id', component: ScheduleEditComponent },
      { path: 'share/:id', component: ScheduleShareComponent }
    ]
  },
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
