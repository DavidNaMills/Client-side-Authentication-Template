import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', ()=>{
    let component;

    const props = {comments:['test 1', 'test 2', 'test 3', 'test 4']};

    beforeEach(()=>{
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', ()=>{
        expect(component.find('li').length).to.equal(4);
    });



    it('shows a list of comments', ()=>{
        expect(component).to.contain('test 1');
        expect(component).to.contain('test 2');
        expect(component).to.contain('test 3');
        expect(component).to.contain('test 4');
    });

});