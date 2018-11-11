import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PhotoThumbnailComponent } from './photo-thumbnail.component';

describe('PhotoThumbnailComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        PhotoThumbnailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  it('should render correctly and set the image src as expected', () => {
    expect(element.querySelector('img').src).toMatch('TEST');
  });

});

@Component({
  template: `<photo-thumbnail [photo]="testPhoto"></photo-thumbnail>`
})
class TestHostComponent {
  testPhoto = {
    thumbnailUrl: 'TEST'
  };
}
