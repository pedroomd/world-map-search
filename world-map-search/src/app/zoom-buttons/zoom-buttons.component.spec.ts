import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ZoomButtonsComponent } from './zoom-buttons.component';

describe('ZoomButtonsComponent', () => {
  let component: ZoomButtonsComponent;
  let fixture: ComponentFixture<ZoomButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button zoomIn', () => {
    let zoomInButton = fixture.debugElement.query(By.css('#zoomIn'));
    const isZoomInDisabled = true;
    component.isZoomInDisabled = isZoomInDisabled;
    fixture.detectChanges();
    expect(zoomInButton.nativeElement.disabled).toBe(isZoomInDisabled);
  });

  it('should disable button zoomOut', () => {
    let zoomOutButton = fixture.debugElement.query(By.css('#zoomOut'));
    const isZoomOutDisabled = true;
    component.isZoomOutDisabled = isZoomOutDisabled;
    fixture.detectChanges();
    expect(zoomOutButton.nativeElement.disabled).toBe(isZoomOutDisabled);
  });

  it('should raise updateZoomIn event when clicked (triggerEventHandler)', () => {
    let zoomInButton = fixture.debugElement.query(By.css('#zoomIn'));
    let zoomInClickedTest: boolean | undefined;
    component.zoomInClicked.subscribe((flag: boolean) => zoomInClickedTest = flag);
    zoomInButton.nativeElement.click();
    expect(zoomInClickedTest).toBe(true);
  });

  it('should raise updateZoomOut event when clicked (triggerEventHandler)', () => {
    let zoomOutButton = fixture.debugElement.query(By.css('#zoomOut'));
    let zoomOutClickedTest: boolean | undefined;
    component.zoomOutClicked.subscribe((flag: boolean) => zoomOutClickedTest = flag);
    zoomOutButton.nativeElement.click();
    expect(zoomOutClickedTest).toBe(true);
  });

  


});
