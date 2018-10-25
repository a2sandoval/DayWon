import React, { Component } from 'react';

export default class BarbellWeight extends Component {
    
    state = {
        barbell: 45,
        weight: weights
    }


    
    render(){
    return (
      <div>
        <div className='plates'>
          <button>55</button>
          <button>45</button>
          <button>35</button>
          <button>25</button>
          <button>15</button>
          <button>10</button>
          <button>5</button>
          <button>2.5</button>
          <button>1.25</button>
        </div>
        <div className='barWeight'>
          <button>35</button>
          <button>45</button>
          <button>55</button>
        </div>
      </div>
    );
  };

};