import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tab } from '../models/tab.model';
import { ChildComponent } from 'src/app/components/doshboard_element/dashboard/childs-space/child/child.component';
import { ChildsService } from './firebase-services/child.service';
@Injectable()
export class TabService {
    
    public tabs: Tab[] =  [  ];
  

     public tabSub = new BehaviorSubject<Tab[]>(this.tabs);
     
    public removeTab(index: number) {
        this.tabs.splice(index, 1);
        console.log("1remove",index)
        console.log("1remove",this.tabs)

        if (this.tabs.length > 0) {
            this.tabs[this.tabs.length - 1].active = true;
        }
        console.log("1remove",this.tabSub)
        this.tabSub.next(this.tabs);
    }
    
    public addTab(tab: Tab) {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].active === true) {
                this.tabs[i].active = false;
            }
        }
        console.log("2add", this.tabs)

        tab.id = this.tabs.length + 1;
        tab.active = true;
        this.tabs.push(tab);
        this.tabSub.next(this.tabs);
    }
    
}