import {render} from '@testing-library/react';
import App from './App';

test('renders the app', () => {
    const content = render(<App/>);
    expect(content).toMatchSnapshot();
});
