import React from 'react';
import './gifts.css';

export default function Gifts() {
  return (
    <div className="tags">
      <div className="tag-container">
        <div className="tag">
          <div className="tag-side tag-1-side">
            <div className="tag-1-top"></div>
            <div className="tag-text tag-1-text">
              <span className="question-mark">1</span>
              <div className="rule-shape rule-red">★</div>
            </div>
          </div>

          <div className="tag-side tag-1-side is-back">
            <div className="tag-1-top"></div>
            <div className="tag-text tag-1-text">
              Corsair K70 Mechanical Keyboard
              <div className="rule-shape">★</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tag-container">
        <div className="tag">
          <div className="tag-side tag-3-side">
            <div className="tag-text tag-3-text">
              <span className="question-mark">2</span>
              <div className="rule-shape">&#10052;</div>
            </div>
          </div>

          <div className="tag-side tag-3-side is-back">
            <div className="tag-text tag-3-text">
              COVID Date Night Airbnb + Door Dash Gift Cards
              <div className="rule-shape">&#10052;</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tag-container">
        <div className="tag">
          <div className="tag-side tag-2-side">
            <div className="tag-text tag-2-text">
              <span className="question-mark">3</span>
              <div className="rule-diagonal"></div>
            </div>
          </div>

          <div className="tag-side tag-2-side is-back">
            <div className="tag-text tag-2-text">
              Ember Smart Mug
              <div className="rule-diagonal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
