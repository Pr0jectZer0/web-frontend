import {Component, OnInit} from '@angular/core';
import {GroupsService} from "../shared/groups.service";
import {Group} from "../shared/group.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/user.model";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  groups: Group[];
  mygroups: Group[];
  user: User;

  constructor(private groupService: GroupsService, private router: Router, private http: HttpClient, private auth: AuthService) {
  }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe(data => {
      this.groups = data['groups'];
    });
    this.groupService.getGroups().subscribe(data => {
      this.mygroups = data['groups'];
    });
    this.http.get<User>('https://pr0jectzer0.ml/api/user?token=' + this.auth.getToken()).subscribe(data => {
      this.user = data['user'];
    });
  }

  public groupClicked(id: number) {
    this.router.navigate(['/group-profile', id]);
  }

  public isMemberOfGroup(id: number): boolean {
    let g: Group;
    this.groupService.getGroup(id).subscribe(data => {
      g = data['group'];
      for (let m of g.users) {
        if (m.id === this.user.id) {
          console.log(g);
          return true;
        }
      }
    });
    return false;
  }

}
