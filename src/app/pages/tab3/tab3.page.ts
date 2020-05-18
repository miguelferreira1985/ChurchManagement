import { Component } from '@angular/core';
import { ContructionItemAddService } from '../../../services/construction-item/construction-item-add.service';
import { NavController } from '@ionic/angular';
import { ConstructionItem } from 'src/models/construction-item/construction-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructionItem: any;

  constructionItemList$: Observable<ConstructionItem[]>;

  constructor(private navCtrl: NavController, private constructionItemList: ContructionItemAddService) {
    this.constructionItemList$ = this.constructionItemList.getContructionItemList()
                                  .subscribe((constructionItems: any[]) => {
                                    console.log(constructionItems);
                                  })
    

  }
   ngOnInit(): void {
    
     
   }

}
