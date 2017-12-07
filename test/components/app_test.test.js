// import { renderComponent , expect } from '../test_helper';
// import App from '../../src/components/app';

// describe('App' , () => {
//   let component;

//   beforeEach(() => {
//     component = renderComponent(App);
//   });

//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });


import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

describe('App', ()=>{
  let component;
  
  beforeEach(()=>{
    component = renderComponent(App);
  });
  
  it('should contain a CommentList', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('should contain commentList', ()=>{
    expect(component.find('.comment-list')).to.exist;
  });


})