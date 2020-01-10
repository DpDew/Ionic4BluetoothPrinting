import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintpagePage } from './printpage.page';

describe('PrintpagePage', () => {
  let component: PrintpagePage;
  let fixture: ComponentFixture<PrintpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
