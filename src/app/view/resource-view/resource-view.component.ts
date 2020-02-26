import {Component, OnInit} from '@angular/core';
import {GameEngineService} from '../../services/game-engine.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cult-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.scss']
})
export class ResourceViewComponent implements OnInit {

  elemList = ['fokus', 'falowers', 'cultist', 'minions', 'priest', 'elder minions', 'high priest ', 'Eldritch cultist', 'Eldritch minions ', 'Eldritch priest'];

  constructor(private game: GameEngineService) {
  }

  ngOnInit(): void {
  }

}
