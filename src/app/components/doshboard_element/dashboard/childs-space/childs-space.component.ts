import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { TabService } from 'src/app/Shared/services/tabs.service';
import { ChildComponent } from './child/child.component';
import { Tab } from 'src/app/Shared/models/tab.model';
import { ChildsService } from 'src/app/Shared/services/firebase-services/child.service';

@Component({
  selector: 'app-childs-space',
  templateUrl: './childs-space.component.html',
  styleUrls: ['./childs-space.component.css']
})
export class ChildsSpaceComponent  implements OnInit {

  @ViewChild(ChildComponent) childComponent:ChildComponent;
  tabs = new Array<Tab>();
  selectedTab: number;
tabsitems:any
uid:any
// tab1= new Tab(ChildComponent, "tti1", { parent: "AppComponent" });
// tab2= new Tab(ChildComponent, "tti2", { parent: "AppComponent" });

  constructor(private tabService: TabService,  public childsService: ChildsService) {}

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs
      // this.tabs=[this.tab1,this.tab2 ];
      
          console.log("this tabs nb:",this.tabs[0].title)
      this.selectedTab = tabs.findIndex(tab => tab.active);
      console.log(" this.selectedTab:", this.selectedTab )
    });


// ------entete tab dynamique
    this.uid = localStorage.getItem('uid')
    this.childsService.getChilds(this.uid).subscribe((item: any) => {     
      this.tabsitems = item   
         console.log("this tabs item:" ,item)
       // this.tabs= [new Tab(ChildComponent,`${item[0].nom}(${item[0].codeChild})`, { parent: "AppComponent" })];
        this.tabs= [new Tab(ChildComponent,`${item[0].nom}(${item[0].codeChild})`, item[0])];
   })
// ------------
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab() {
    console.log('chiiiiiiiiiiiiiiiiiii')
    this.tabService.addTab(
      new Tab(ChildComponent, "New fils", { parent: "ChildsSpaceComponent" })
    );
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}

