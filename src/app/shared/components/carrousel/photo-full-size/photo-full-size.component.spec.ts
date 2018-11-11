import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { PhotoFullSizeComponent } from './photo-full-size.component';

describe('#PhotoFullSizeComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let elment: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        PhotoFullSizeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    elment = fixture.debugElement.nativeElement;
  });

  it('Renders correctly and set the values inside the template', () => {
    expect(elment.querySelector('img').src).toEqual('http://someurl/');
    expect(elment.querySelector('p').textContent).toEqual('Mock title');
  });

});

@Component({
  template: `<photo-full-size [photo]="testPhoto"></photo-full-size>`
})
class TestHostComponent {
  testPhoto = {
    title: 'Mock title',
    url: 'http://someurl/'
  };
}
