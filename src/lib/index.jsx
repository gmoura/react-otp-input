// @flow
import React, { Component, PureComponent } from 'react';

// keyCode constants
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

type Props = {
  numInputs: number,
  onChange: Function,
  separator?: Object,
  containerStyle?: Object,
  inputStyle?: Object,
  focusStyle?: Object,
  isDisabled?: boolean,
  disabledStyle?: Object,
  hasErrored?: boolean,
  errorStyle?: Object,
  shouldAutoFocus?: boolean,
  isInputNum?: boolean,
  clear?: Boolean,
  value?: string,
};

type State = {
  activeInput: number,
  otp: string[],
};

// Doesn't really check if it's a style Object
// Basic implementation to check if it's not a string
// of classNames and is an Object
// TODO: Better implementation
const isStyleObject = obj => typeof obj === 'object';

class SingleOtpInput extends PureComponent<*> {
  input: ?HTMLInputElement;

  // Focus on first render
  // Only when shouldAutoFocus is true
  componentDidMount() {
    const {
      input,
      props: { focus, shouldAutoFocus },
    } = this;

    if (input && focus && shouldAutoFocus) {
      input.focus();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      input,
      props: { focus },
    } = this;

    // Check if focusedInput changed
    // Prevent calling function if input already in focus
    if (prevProps.focus !== focus && (input && focus)) {
      input.focus();
      input.select();
    }
  }

  getClasses = (...classes) =>
    classes.filter(c => !isStyleObject(c) && c !== false).join(' ');

  render() {
    const {
      separator,
      isLastChild,
      inputStyle,
      focus,
      isDisabled,
      hasErrored,
      errorStyle,
      focusStyle,
      disabledStyle,
      shouldAutoFocus,
      isInputNum,
      value,
      ...rest
    } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          style={Object.assign(
            { width: '1em', textAlign: 'center' },
            isStyleObject(inputStyle) && inputStyle,
            focus && isStyleObject(focusStyle) && focusStyle,
            isDisabled && isStyleObject(disabledStyle) && disabledStyle,
            hasErrored && isStyleObject(errorStyle) && errorStyle
          )}
          className={this.getClasses(
            inputStyle,
            focus && focusStyle,
            isDisabled && disabledStyle,
            hasErrored && errorStyle
          )}
          type={isInputNum ? 'tel' : 'text'}
          maxLength="1"
          ref={input => {
            this.input = input;
          }}
          disabled={isDisabled}
          value={value ? value : ''}
          {...rest}
        />
        {!isLastChild && separator}
      </div>
    );
  }
}

class OtpInput extends Component<Props, State> {
  static defaultProps = {
    numInputs: 4,
    onChange:(callback) => callback(this.state.otp),
    isDisabled: false,
    shouldAutoFocus: false,
    clear: false
  };

  state = {
    activeInput: 0,
    otp : [...Array(this.props.numInputs)].map((_,i) => "")
  };

  componentWillReceiveProps(){
    const { clear, numInputs } = this.props;
    if(clear) {
      this.setState({
        otp: [...Array(numInputs.numInputs)].map((_,i) => "")
      })
    }
  }

  // Focus on input by index
  focusInput = (input: number) => {
    const { numInputs } = this.props;
    const activeInput = Math.max(Math.min(numInputs - 1, input), 0);
    this.setState({ activeInput });
  };

  // Focus on next input
  focusNextInput = () => {
    const { activeInput } = this.state;
    this.focusInput(activeInput + 1);
  };

  // Focus on previous input
  focusPrevInput = () => {
    const { activeInput } = this.state;
    this.focusInput(activeInput - 1);
  };

  // Handle pasted OTP
  handleOnPaste = (e: Object) => {
    e.preventDefault();
    const { numInputs, isInputNum, onChange } = this.props;
    const { activeInput, otp } = this.state;
    let hasString = false;
    const newOtp = []
    
    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - activeInput)
      .split('');
    
    //Prevent to insert string, when isInputNum is true
    pastedData.forEach(value => {
      if(isInputNum && isNaN(Number(value))) hasString = true
    })

    if(isInputNum && hasString) return false;

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        newOtp[pos] = pastedData.shift();
      }
    }

    this.setState({
      otp: newOtp
    });

    this.focusInput(numInputs - 1 )

    //Workaround to nofify parent element with the otp value
    setTimeout(() => {
      onChange(otp)
    }, 2)
  };

  handleOnChange = (e: Object) => {
    const { activeInput, otp } = this.state;
    const { isInputNum, onChange} = this.props;
    const newOtp = otp;
    
    if(isInputNum && isNaN(Number(e.target.value)) ) {
      this.focusInput(activeInput)
      return false;
    }
    // fix backspace on android chrome
    if(e.target.value.length === 0 || e.target.value == " ") { 
      return false
    }
    
    newOtp[activeInput] = e.target.value;
    this.setState({
      otp: newOtp
    })

    this.focusNextInput();
    onChange(otp)
  };

  // Handle cases of backspace, delete, left arrow, right arrow, space
  handleOnKeyDown = (e: Object) => {
    const { otp, activeInput } = this.state;
    const { onChange } = this.props;
    const newOtp = otp;
    if((e.keyCode === BACKSPACE || e.key === 'Backspace') && e.target.value.length === 0) {
      e.preventDefault();
      this.focusPrevInput();
    } else if ((e.keyCode === BACKSPACE || e.key === 'Backspace')) {
      e.preventDefault();
      newOtp[activeInput] = '';
      this.setState({
        otp: newOtp
      })
      onChange(otp)
    } else if (e.keyCode === DELETE || e.key === 'Delete') {
      e.preventDefault();
      newOtp[activeInput] = '';
      this.setState({
        otp: newOtp
      })
      onChange(otp)
    } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
      e.preventDefault();
      this.focusPrevInput();
    } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
      e.preventDefault();
      this.focusNextInput();
    } else if (e.keyCode === SPACEBAR || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
    }
    // Workaround on Android browser
    // Input on Android: 229 Unidentified 
    else if (e.key === 'Unidentified') {
      e.preventDefault();
      newOtp[activeInput] = '';
      this.setState({
        otp: newOtp
      })
      onChange(otp)
    }
  };

  checkLength = (e: Object) => {
    const value = e.target.value.trim()
    if (value.length > 1) {
      e.preventDefault();
      this.focusNextInput();
    }
  };

  renderInputs = () => {
    const { activeInput, otp} = this.state;
    const {
      numInputs,
      inputStyle,
      focusStyle,
      separator,
      isDisabled,
      disabledStyle,
      hasErrored,
      errorStyle,
      shouldAutoFocus,
      isInputNum,
      clear
    } = this.props;
    const inputs = [];

    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <SingleOtpInput
          key={i}
          focus={activeInput === i}
          value={ clear ? '' : otp[i]}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
          onInput={this.checkLength}
          onPaste={this.handleOnPaste}
          onFocus={e => {
            this.setState({ activeInput: i });
            e.target.select();
          }}
          onBlur={() => this.setState({ activeInput: -1 })}
          separator={separator}
          inputStyle={inputStyle}
          focusStyle={focusStyle}
          isLastChild={i === numInputs - 1}
          isDisabled={isDisabled}
          disabledStyle={disabledStyle}
          hasErrored={hasErrored}
          errorStyle={errorStyle}
          shouldAutoFocus={shouldAutoFocus}
          isInputNum={isInputNum}
        />
      );
    }

    return inputs;
  };

  render() {
    const { containerStyle } = this.props;

    return (
      <div
        style={Object.assign(
          { display: 'flex' },
          isStyleObject(containerStyle) && containerStyle
        )}
        className={!isStyleObject(containerStyle) ? containerStyle : ''}
      >
        {this.renderInputs()}
      </div>
    );
  }
}

export default OtpInput;
