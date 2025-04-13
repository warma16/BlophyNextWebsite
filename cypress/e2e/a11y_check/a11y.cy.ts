/// <reference types="cypress" />
import 'wick-a11y';
describe('Accessibility Test', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173');
    });
  
    it('should check accessibility of the page', { defaultCommandTimeout: 15000 }, () => {
      //检测是否渲染好
    
    });
  });