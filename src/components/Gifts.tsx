import React from 'react';
import '../styles/gifts.css';

export interface Gift {
  name: string;
  imageName: string;
  style: string;
}

export interface GiftProps {
  gifts: Gift[];
}

// Original source/idea: https://codemyui.com/christmassy-tags-flip-hover/
export default function Gifts({ gifts }: GiftProps) {
  const renderTopShape = (style: string) => {
    switch (style) {
      case '1':
        return <div className="tag-1-top"></div>;
      default:
        return undefined;
    }
  };

  const renderBottomShape = (style: string, extraClassNames: string[] = []) => {
    switch (style) {
      case '1':
        return <div className={['rule-shape'].concat(extraClassNames).join(' ')}>★</div>;
      case '2':
        return <div className={['rule-diagonal'].concat(extraClassNames).join(' ')}></div>;
      default:
        return <div className={['rule-shape'].concat(extraClassNames).join(' ')}>&#10052;</div>;
    }
  };

  return (
    <div className="tags">
      {gifts.map((gift, i) => (
        <div className="tag-container" key={gift.name}>
          <div className="tag">
            <div className={['tag-side', `tag-${gift.style}-side`].join(' ')}>
              {renderTopShape(gift.style)}
              <div className={['tag-text', `tag-${gift.style}-text`].join(' ')}>
                <span className="question-mark">{i + 1}</span>
                {renderBottomShape(gift.style, gift.style === '1' ? ['rule-red'] : [])}
              </div>
            </div>

            <div className={['tag-side', 'is-back', `tag-${gift.style}-side`].join(' ')}>
              {renderTopShape(gift.style)}
              <div className={['tag-text', 'tag-text-sm', `tag-${gift.style}-text`].join(' ')}>
                {gift.name}
                <img className="tag-img" src={gift.imageName} />
                {renderBottomShape(gift.style)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
