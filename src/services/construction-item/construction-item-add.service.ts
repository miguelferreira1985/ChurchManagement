import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConstructionItem } from '../../models/construction-item/construction-item.model';
import { map } from 'rxjs/operators';
 

@Injectable()
export class ContructionItemAddService{

    private constructionItemRef = this.db.list<ConstructionItem>('contruction-item-add');

    constructor(private db: AngularFireDatabase) {}

    getContructionItemList() {
        this.constructionItemRef.valueChanges();
    }

    addConstructionItemAdded(constrcutionItem: ConstructionItem){
        return this.constructionItemRef.push(constrcutionItem);
    }
}