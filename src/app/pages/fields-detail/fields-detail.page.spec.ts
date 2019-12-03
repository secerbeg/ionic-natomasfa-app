import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldsDetailPage } from './fields-detail.page';

describe('FieldsDetailPage', () => {
  let component: FieldsDetailPage;
  let fixture: ComponentFixture<FieldsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
