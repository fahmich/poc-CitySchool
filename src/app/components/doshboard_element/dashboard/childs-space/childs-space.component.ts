import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { TabService } from 'src/app/Shared/services/tabs.service';
import { ChildComponent } from './child/child.component';
import { Tab } from 'src/app/Shared/models/tab.model';
import { ChildsService } from 'src/app/Shared/services/firebase-services/child.service';
import { child } from 'src/app/Shared/models/child';

@Component({
  selector: 'app-childs-space',
  templateUrl: './childs-space.component.html',
  styleUrls: ['./childs-space.component.css']
})
export class ChildsSpaceComponent implements OnInit {

  @ViewChild(ChildComponent) childComponent: ChildComponent;
  tabs = []
 
  selectedTab: number;
  tabsitems: any
  uid: any
   child: child = new child();
  constructor(private tabService: TabService, public childsService: ChildsService) { }

  ngOnInit() {
    console.log("chi")
   this.tabs = []
   this.tabs=[...this.tabs]
    this.uid = localStorage.getItem('uid')
    this.childsService.getChilds(this.uid).subscribe((item: any) => {
      if (item.length == 0) {
        this.tabs.push(new Tab(ChildComponent, "ajouter fils", this.child)
        );
      }

   if(this.tabs.length< item.length) {
    for (let i = 0; i < item.length; i++) {
    this.tabs.push(new Tab(ChildComponent, `${item[i].nom}(${item[i].codeChild})`, item[i]));
    //  this.tabs=[...this.tabs,  new Tab(ChildComponent, `${item[i].nom}(${item[i].codeChild})`, item[i])  ] ;
    }
  }else{
    this.tabs=[]
    for (let i = 0; i < item.length; i++) {
      this.tabs.push(new Tab(ChildComponent, `${item[i].nom}(${item[i].codeChild})`, item[i]));
      }

    }

      console.log("this.tabs", this.tabs)
    })
    // this.tabService.tabSub.subscribe(tabs => {
    //   console.log("tabSub",tabs)
    //   this.tabs = tabs
    //   this.selectedTab = tabs.findIndex(tab => tab.active);
    // });
   this.tabstatus()
  }

  tabstatus(){
    this.tabService.tabSub.subscribe(tabs => {
      console.log("tabSub",tabs)
      
      this.tabs = tabs
      console.log("tabSub this.tabs",this.tabs)
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
  }

  addNewTab() {
    this.tabService.addTab(
      new Tab(ChildComponent, "fils(code)", this.child)
    );
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
    console.log(index)
  }
}

