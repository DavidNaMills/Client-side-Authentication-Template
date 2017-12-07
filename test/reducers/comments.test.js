//test default case

import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';


describe('comments reducer', ()=>{
    it('handles action with defaults', ()=>{
        // expect(commentReducer()).to.be.instanceof(Array);
        expect(commentReducer(undefined, {})).to.be.eql([]); //does deep check, absolute identical 
                                                //equal used for string comparison, numbers, etc
    });

    it('SAVE_COMMENT type', ()=>{
        const payload='testing testing 1 2 1 2';
        const action={
            type:SAVE_COMMENT,
            payload
        };
        expect(commentReducer([], action)).to.eql([payload]);
    });
})