import { async, TestBed } from '@angular/core/testing';
import { EangModule } from './eang.module';

describe('EangModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [EangModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(EangModule).toBeDefined();
  });
});
