import React from 'react';
import './SkillBox.css';

const styleSheet = document.styleSheets[2];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class SkillBox extends React.Component {
  keyframes = (index) => {
    const dims = [true, false];
    const dim = dims[Math.floor(Math.random() * 2)];
    // if x
    if (dim) {
      return `@keyframes fly-in${index} {
                  0%   {transform: translate3d(${getRandomInt(-200, 200)}px, 0, 0);}
                  100% {transform: translate3d(0, 0, 0);}`;
    }
    // if y

    return `@keyframes fly-in${index} {
              0%   {transform: translate3d(0, ${getRandomInt(-200, 200)}px, 0);}
              100% {transform: translate3d(0, 0, 0);}`;
  };

  createAnimation = index => ({
    animationName: `fly-in${index}`,
    animationDuration: '1s',
    animationDelay: 300 + Math.random() * 100,
  });

  render() {
    const { text, index } = this.props;

    styleSheet.insertRule(this.keyframes(index), styleSheet.cssRules.length);
    const dim = getRandomInt(90, 200);
    const size = {
      width: dim,
      height: dim,
      lineHeight: `${dim}px`,
      fontSize: dim < 120 ? '1.1rem' : '1.5rem',
    };
    return (
      <div
        className="skill-box text-center d-inline-block mt-3 ml-3 align-middle hvr-bounce-to-top"
        style={{ ...size, ...this.createAnimation(index) }}
      >
        {text}
      </div>
    );
  }
}

export default SkillBox;
