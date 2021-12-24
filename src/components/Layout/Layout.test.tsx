import { shallow } from 'enzyme';
import { Layout } from '.';

describe('Hello, Enzyme!', () => {
    it('renders', () => {
        const wrapper = shallow(
            <Layout>
                <h1>Hello</h1>
            </Layout>
        );

        expect(wrapper.find('h1').html()).toMatch(/Hello/);
    });

    it('renders snapshots, too', () => {
        const wrapper = shallow(
            <Layout>
                <h1>Hello</h1>
            </Layout>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
