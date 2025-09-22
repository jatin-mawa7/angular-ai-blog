import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogPage } from './single-blog-page';

describe('SingleBlogPage', () => {
  let component: SingleBlogPage;
  let fixture: ComponentFixture<SingleBlogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBlogPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
