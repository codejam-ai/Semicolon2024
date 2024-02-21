import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentExistingThreadComponent } from './comment-existing-thread.component';

describe('CommentExsistingThreadComponent', () => {
  let component: CommentExistingThreadComponent;
  let fixture: ComponentFixture<CommentExistingThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentExistingThreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentExistingThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
