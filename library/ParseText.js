import React from 'react';
import ReactNative from 'react-native';

const PATTERNS = {
  url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,
  phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/,
  email: /\S+@\S+\.\S+/,
};

//
const defaultParseShape = React.PropTypes.shape({
  ...ReactNative.Text.propTypes,
  type: React.PropTypes.oneOf(Object.keys(PATTERNS)).isRequired,
});

const customParseShape = React.PropTypes.shape({
  ...ReactNative.Text.propTypes,
  pattern: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(RegExp)]).isRequired,
});

class ParsedText extends React.Component {

  static displayName = 'ParsedText';

  static propTypes = {
    ...ReactNative.Text.propTypes,
    parse: React.PropTypes.arrayOf(
      React.PropTypes.oneOfType([defaultParseShape, customParseShape]),
    ),
  };

  static defaultProps = {
    parse: null,
  };

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  getPatterns() {
    return this.props.parse.map((option) => {
      const {type, ...patternOption} = option;
      if (type) {
        if (!PATTERNS[type]) {
          throw new Error(`${option.type} is not a supported type`);
        }
        patternOption.pattern = PATTERNS[type];
      }

      return patternOption;
    });
  }

  getParsedText() {
    if (!this.props.parse)                       { return this.props.children; }
    if (typeof this.props.children !== 'string') { return this.props.children; }

    const textExtraction = new TextExtraction(this.props.children, this.getPatterns());

    return textExtraction.parse().map((props, index) => {
      return (
        <ReactNative.Text
          key={`parsedText-${index}`}
          {...props}
        />
      );
    });
  }

  render() {
    return (
      <ReactNative.Text
        ref={ref => this._root = ref}
        {...this.props}>
        {this.getParsedText()}
      </ReactNative.Text>
    );
  }

}

class TextExtraction {
  /**
   * @param {String} text - Text to be parsed
   * @param {Object[]} patterns - Patterns to be used when parsed
   *                              other options than pattern would be added to the parsed content
   * @param {RegExp} patterns[].pattern - RegExp to be used for parsing
   */
  constructor(text, patterns) {
    this.text     = text;
    this.patterns = patterns || [];
  }

  /**
   * Returns parts of the text with their own props
   * @return {Object[]} - props for all the parts of the text
   */
  parse() {
    let parsedTexts = [{children: this.text}];
    this.patterns.forEach((pattern) => {
      let newParts = [];
      // console.log(newParts);
      parsedTexts.forEach((parsedText) => {
        if (parsedText._matched) {
          newParts.push(parsedText);
          return;
        }

        let parts    = [];
        let textLeft = parsedText.children;

        while (textLeft) {

          let matches = pattern.pattern.exec(textLeft);
          if (!matches) { break; }

          let previousText = textLeft.substr(0, matches.index);
          parts.push({children: previousText});
          parts.push(this.getMatchedPart(pattern, matches[0], matches));
          textLeft = textLeft.substr(matches.index + matches[0].length);
        }

        parts.push({children: textLeft});
        newParts.push(...parts);
      });

      parsedTexts = newParts;
    });

    // Remove _matched key.
    parsedTexts.forEach((parsedText) => delete(parsedText._matched));

    return parsedTexts.filter(t => !!t.children);
  }

  // private

  /**
   * @param {Object} matchedPattern - pattern configuration of the pattern used to match the text
   * @param {RegExp} matchedPattern.pattern - pattern used to match the text
   * @param {String} text - Text matching the pattern
   * @param {String[]} text - Result of the RegExp.exec
   * @return {Object} props for the matched text
   */
  getMatchedPart(matchedPattern, text, matches) {
    let props = {};

    Object.keys(matchedPattern).forEach((key) => {
      if (key === 'pattern' || key === 'renderText') {
        return;
      }

      if (typeof matchedPattern[key] === 'function') {
        props[key] = () => matchedPattern[key](text);
      } else {
        props[key] = matchedPattern[key];
      }
    });

    let children = text;
    if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
      children = matchedPattern.renderText(text, matches);
    }

    return {
      ...props,
      children: children,
      _matched: true,
    };
  }
}

export default ParsedText;
