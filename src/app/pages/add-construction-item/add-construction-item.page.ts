import { Component, OnInit } from '@angular/core';
import { ConstructionItem } from '../../../models/construction-item/construction-item.model';
import { ContructionItemAddService } from '../../../services/construction-item/construction-item-add.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-construction-item',
  templateUrl: './add-construction-item.page.html',
  styleUrls: ['./add-construction-item.page.scss'],
})
export class AddConstructionItemPage implements OnInit {

  constructionItem: ConstructionItem = {
    amount: undefined,
    enterDate: new Date().toDateString(),
    note: undefined,
  };

  constructor(
    private navCtrl: NavController,
    private contructionItemAdded: ContructionItemAddService) { }

  addContructionItem( constructionItem: ConstructionItem ) {


    this.contructionItemAdded.addConstructionItemAdded(constructionItem).then(ref => {
      this.navCtrl.navigateRoot('/tabs/tab2');
    });

  }

  ngOnInit() {
  }

}
