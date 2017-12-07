import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', ()=>{
    let component;
    beforeEach(()=>{
        component = renderComponent(CommentBox);
    });


    it('has a textarea', ()=>{
        
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', ()=>{
        expect(component.find('button')).to.exist;
    });

    it('has the class commentBox', ()=>{
        expect(component).to.have.class('comment-box');
    });


    describe('textarea manipulation', ()=>{
        beforeEach(()=>{
            component.find('textarea').simulate('change', 'new comment');
        });


        it('should display text that is entered', ()=>{
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('should remove all text when submitted', ()=>{
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });

    });

});