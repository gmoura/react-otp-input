import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import PincodeInput, { SinglePincodeInput, isStyleObject } from './'

describe('Pinco', () => {
    describe('Single input', () => {
        describe('Input Number', () => {
            test('Has error', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isInputNum
                        isDisabled={false}
                        isLastChild={true}
                        hasErrored={true}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }} 
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('No error', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isDisabled={false}
                        isInputNum
                        isLastChild={true}
                        hasErrored={false}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('Disabled', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={true}
                        hasErrored={false}
                        isDisabled
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('With focus', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        focus
                        separator="-"
                        isLastChild={true}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('With separator', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
    
            test('Empty', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value=""
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('1 digit', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        maxLength="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('Not allow 2 digits', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="10"
                        maxLength="2"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            })
        });
    
        describe('Input Text', () => {
            test('Has error', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isInputNum={false}
                        isDisabled={false}
                        isLastChild={true}
                        hasErrored={true}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }} 
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('No error', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isDisabled={false}
                        isInputNum={false}
                        isLastChild={true}
                        hasErrored={false}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
    
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('Disabled', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={true}
                        hasErrored={false}
                        isDisabled
                        isInputNum={false}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('With focus', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        focus
                        separator="-"
                        isLastChild={true}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum={false}
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
    
            test('With separator', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
    
            test('Empty', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value=""
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('1 digit', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="1"
                        maxLength="1"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
            test('Not allow 2 digits', () => {
                const component = renderer.create(
                    <SinglePincodeInput
                        value="10"
                        maxLength="2"
                        onChange={() => console.log('onChange')}
                        onKeyDown={() => console.log('onKeyDown')}
                        onInput={() => console.log('onInput')}
                        onPaste={() => console.log('onPaste')}
                        onBlur={() => console.log('onBlur')}
                        separator="-"
                        isLastChild={false}
                        hasErrored={false}
                        isDisabled={false}
                        isInputNum
                        inputStyle={{
                            color: 'red'
                        }}
                        focusStyle={{
                            color: 'blue'
                        }}
                        errorStyle={{
                            color: 'write'
                        }}
                        disabledStyle={{
                            color: 'yellow'
                        }}
                    />
                );
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            })
        });
    })

    describe('Behaviors - Render 4 inputs enableds with input type equal a text', () => {
        it('Empty value', () => {
            const wrapper = mount(<PincodeInput />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach(node => {
                expect(node.props().value).toBe('')
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)
            })
        });
        it('Initial value equal [1,2,3,4]', () => {
            const initialValue = [1,2,3,4];
            const wrapper = mount(<PincodeInput initialValue={initialValue} />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node, index) => {
                expect(node.props().value).toBe(initialValue[index])
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)
            })
        });
        it('Initial value equal ["a","b","c","d"]', () => {
            const initialValue = ["a","b","c","d"];
            const wrapper = mount(<PincodeInput initialValue={initialValue} />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node, index) => {
                expect(node.props().value).toBe(initialValue[index])
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)
            })
        });
        it('Initial value equal ["A","b","]","0"]', () => {
            const initialValue = ["A","b","]","0"];
            const wrapper = mount(<PincodeInput initialValue={initialValue} />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node, index) => {
                expect(node.props().value).toBe(initialValue[index])
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)
            })
        });
        it('Initial value "1234" cames from paste event, and paste on the first element', async () => {
            const mEvent = { clipboardData: { getData: jest.fn(() => '1234') } };
            const wrapper = mount(<PincodeInput />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node) => {
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)

            });

            wrapper.setState({
                pincode: ['', '', '', '']
            });
            wrapper.setProps({
                numInputs: 4,
                onChange:() => {},
                isDisabled: false,
                shouldAutoFocus: false,
            })

            counterInput.at(0).find('input[type="text"]').simulate('paste', mEvent);
            expect(counterInput.at(0).find('input[type="text"]').getDOMNode().value).toBe('1')
            expect(counterInput.at(1).find('input[type="text"]').getDOMNode().value).toBe('2')
            expect(counterInput.at(2).find('input[type="text"]').getDOMNode().value).toBe('3')
            expect(counterInput.at(3).find('input[type="text"]').getDOMNode().value).toBe('4')
        });
        it('Initial value "Ab]0" cames from paste event, and paste on the second element', async () => {
            const mEvent = { clipboardData: { getData: jest.fn(() => 'Ab]0') } };
            const wrapper = mount(<PincodeInput />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node) => {
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)

            });

            wrapper.setState({
                pincode: ['', '', '', '']
            });
            wrapper.setProps({
                numInputs: 4,
                onChange:() => {},
                isDisabled: false,
                shouldAutoFocus: false,
            })

            counterInput.at(1).find('input[type="text"]').simulate('paste', mEvent);
            expect(counterInput.at(0).find('input[type="text"]').getDOMNode().value).toBe('A')
            expect(counterInput.at(1).find('input[type="text"]').getDOMNode().value).toBe('b')
            expect(counterInput.at(2).find('input[type="text"]').getDOMNode().value).toBe(']')
            expect(counterInput.at(3).find('input[type="text"]').getDOMNode().value).toBe('0')
        });
        it('Initial value "AaAa" cames from paste event, and paste on the third element', async () => {
            const mEvent = { clipboardData: { getData: jest.fn(() => 'AaAa') } };
            const wrapper = mount(<PincodeInput />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node) => {
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)

            });

            wrapper.setState({
                pincode: ['', '', '', '']
            });
            wrapper.setProps({
                numInputs: 4,
                onChange:() => {},
                isDisabled: false,
                shouldAutoFocus: false,
            })

            counterInput.at(1).find('input[type="text"]').simulate('paste', mEvent);
            expect(counterInput.at(0).find('input[type="text"]').getDOMNode().value).toBe('A')
            expect(counterInput.at(1).find('input[type="text"]').getDOMNode().value).toBe('a')
            expect(counterInput.at(2).find('input[type="text"]').getDOMNode().value).toBe('A')
            expect(counterInput.at(3).find('input[type="text"]').getDOMNode().value).toBe('a')
        });
        it('Initial value "123456" cames from paste event, and paste on the fourth element', async () => {
            const mEvent = { clipboardData: { getData: jest.fn(() => '123456') } };
            const wrapper = mount(<PincodeInput />);
            const counterInput = wrapper.find(SinglePincodeInput);

            expect(counterInput).toHaveLength(4)
            counterInput.forEach((node) => {
                expect(node.props().isDisabled).toBe(false)
                expect(node.find('input[type="text"]')).toHaveLength(1)

            });

            wrapper.setState({
                pincode: ['', '', '', '']
            });
            wrapper.setProps({
                numInputs: 4,
                onChange:() => {},
                isDisabled: false,
                shouldAutoFocus: false,
            })

            counterInput.at(1).find('input[type="text"]').simulate('paste', mEvent);
            expect(counterInput.at(0).find('input[type="text"]').getDOMNode().value).toBe('1')
            expect(counterInput.at(1).find('input[type="text"]').getDOMNode().value).toBe('2')
            expect(counterInput.at(2).find('input[type="text"]').getDOMNode().value).toBe('3')
            expect(counterInput.at(3).find('input[type="text"]').getDOMNode().value).toBe('4')
        });
    })
  });