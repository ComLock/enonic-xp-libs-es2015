/* global describe it */
import { deepStrictEqual as eq, throws } from 'assert';
import { getContentByKey } from '../../src/functional/content';
import { CONTENT, ID } from './data';
import { newBean, toNativeObject } from './__';


describe('content', () => {
  describe('getContentByKey', () => {
    it('throws on no parameters', () => {
      throws(() => {
        getContentByKey();
      }, /TypeError: Cannot read property 'key' of undefined/);
      // eq('', );
    });

    it('throws on emptyObj', () => {
      throws(() => {
        getContentByKey({});
      }, /TypeError: newBean is not a function/);
      // eq('', );
    });

    it('returns content', () => {
      eq(CONTENT, getContentByKey({
        key: ID,
        newBean,
        toNativeObject
      }));
    });
  }); // getContentByKey
}); // content
