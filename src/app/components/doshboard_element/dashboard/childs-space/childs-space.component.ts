import { Component, OnInit, NgZone } from '@angular/core';
import { TabService } from 'src/app/Shared/services/tabs.service';
import { ChildComponent } from './child/child.component';
import { Tab } from 'src/app/Shared/models/tab.model';

@Component({
  selector: 'app-childs-space',
  templateUrl: './childs-space.component.html',
  styleUrls: ['./childs-space.component.css']
})
export class ChildsSpaceComponent  implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab() {
    console.log('chiiiiiiiiiiiiiiiiiii')
    this.tabService.addTab(
      new Tab(ChildComponent, "New", { parent: "ChildsSpaceComponent" })
    );
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}

