import { TestBed } from '@angular/core/testing';
import { ThemeService, Theme } from './theme.service';
import { PLATFORM_ID } from '@angular/core';
import { describe, beforeEach, it, expect, vi } from 'vitest';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Mock local storage and matchMedia
    const localStorageMock = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => { store[key] = value; },
        clear: () => { store = {}; }
      };
    })();

    vi.stubGlobal('localStorage', localStorageMock);
    
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to light theme', () => {
    expect(service.getCurrentTheme()).toBe('light');
  });

  it('should toggle theme from light to dark and back', () => {
    expect(service.getCurrentTheme()).toBe('light');
    service.toggleTheme();
    expect(service.getCurrentTheme()).toBe('dark');
    service.toggleTheme();
    expect(service.getCurrentTheme()).toBe('light');
  });

  it('should set specific theme and store it', () => {
    service.setTheme('dark');
    expect(service.getCurrentTheme()).toBe('dark');
    expect(localStorage.getItem('app-theme')).toBe('dark');
  });
});
