import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Leader} from './leader';
import {LeaderDetailComponent} from './leader-detail.component';
import {LeaderService} from './leader.service';

@Component({
  selector: 'my-leaders',
  templateUrl: 'app/leaders.component.html',
  styleUrls: ['app/leaders.component.css'],
  directives: [LeaderDetailComponent]
})
export class LeadersComponent implements OnInit {
  leaders: Leader[];
  selectedLeader: Leader;

  constructor(
    private _leaderService: LeaderService,
    private _router: Router ) {
  }

  getLeaders() {
    this._leaderService.getLeaders().then(leaders => this.leaders = leaders);
  }

  ngOnInit() {
    this.getLeaders();
  }

  onSelect(leader: Leader) { this.selectedLeader = leader; }

  gotoDetail() {
    let link = ['LeaderDetail', { id: this.selectedLeader.id }];
    this._router.navigate(link);
  }
}