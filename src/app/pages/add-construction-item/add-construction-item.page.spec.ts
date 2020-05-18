import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddConstructionItemPage } from './add-construction-item.page';

describe('AddConstructionItemPage', () => {
  let component: AddConstructionItemPage;
  let fixture: ComponentFixture<AddConstructionItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConstructionItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddConstructionItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
