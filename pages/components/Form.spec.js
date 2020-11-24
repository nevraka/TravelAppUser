import { search } from './Form';

test('search', () => {
  let results = search('Berli');
  expect(results).toMatchSnapshot();
  results = search('istanb');
  expect(results).toMatchSnapshot();
});
