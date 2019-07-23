import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.webkitSpeechRecognition = class {};

Enzyme.configure({ adapter: new Adapter() });